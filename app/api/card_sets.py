from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.card_sets import CardSets
from app.models.card_questions import CardQuestion
from app.forms.new_card_set import NewCardSetForm
from flask_login import current_user, login_user, logout_user, login_required

card_routes = Blueprint('cards', __name__)

@card_routes.route('/sets/new', methods=["POST"])
def create_set():
    # form = NewCardSetForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    # if form.validate_on_submit():
    title = request.json['title']
    description = request.json['description']
    category = request.json['category']
    status = request.json['status']
    # cards = request.json['cards']

    new_set = CardSets(
        creator_id=current_user.id,
        title=title,
        description=description,
        status=status,
        category=category
    )

    db.session.add(new_set)
    db.session.commit()

    new_set_dict = new_set.to_dict()

    # for card in cards:
    #     new_card = CardQuestion(
    #         set_id=new_set.id,
    #         front=card.front,
    #         back=card.back
    #     )

    #     db.session.add(new_card)
    db.session.commit()

    return new_set_dict

@card_routes.route('/sets/<int:id>/add', methods=["POST"])
def create_cards(id):
    cards = request.json['cards']
    # print(cards)

    for card in cards:
        front = card['front']
        back = card['back']

        new_card = CardQuestion(
            set_id=id,
            front=front,
            back=back
        )

        db.session.add(new_card)

    db.session.commit()
    return {}

@card_routes.route('/<int:id>')
def get_single_set(id):
    card_set = CardSets.query.get(id)
    q_dict = {}
    if card_set:
        set_dict = card_set.to_dict()
        questions = CardQuestion.query.filter(CardQuestion.set_id == card_set.id).all()
        for q in questions:
            curr_q_dict = q.to_dict()
            q_dict[q.id] = curr_q_dict
        set_dict['all_questions'] = q_dict
        return set_dict
    return {}


@card_routes.route('/sets')
def get_sets():
    sets = CardSets.query.all()
    result = {}
    if sets:
        for singleset in sets:
            set_dict = singleset.to_dict()
            result[singleset.id] = set_dict
    return result
