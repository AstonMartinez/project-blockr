from flask import Blueprint, request
from app.models import db
from app.models.card_questions import CardQuestion
from flask_login import current_user, login_user, logout_user, login_required
from app.forms.new_flashcard import UpdateCardForm

card_q_routes = Blueprint('card_qs', __name__)

@card_q_routes.route('/<int:id>/update', methods=["PUT"])
def update_flash_card(id):
    card = CardQuestion.query.get(id)
    form = UpdateCardForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        front = request.json['front']
        back = request.json['back']

        card.front = front
        card.back = back

        db.session.commit()
    return card.to_dict()

@card_q_routes.route('/<int:id>/delete', methods=["DELETE"])
def delete_flash_card(id):
    card = CardQuestion.query.get(id)
    card_dict = card.to_dict()

    db.session.delete(card)
    db.session.commit()
    return card_dict

@card_q_routes.route('/sets/<int:id>/cards')
def get_cards_by_quiz_id(id):
    result = {}
    cards = CardQuestion.query.filter(CardQuestion.set_id == id).all()

    for card in cards:
        card_dict = card.to_dict()
        result[card.id] = card_dict

    return result

@card_q_routes.route('/<int:id>')
def get_single_card(id):
    card = CardQuestion.query.get(id)
    return card.to_dict()
