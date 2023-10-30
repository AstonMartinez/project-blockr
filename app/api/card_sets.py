from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.card_sets import CardSets
from app.models.card_questions import CardQuestion
from app.forms.new_card_set import NewCardSetForm
from flask_login import current_user, login_user, logout_user, login_required

card_routes = Blueprint('cards', __name__)

@card_routes.route('/sets/new', methods=["POST"])
def create_set():
    title = request.json['title']
    description = request.json['description']
    category = request.json['category']
    status = request.json['status']

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
    return new_set_dict

@card_routes.route('/sets/<int:id>/add', methods=["POST"])
def create_cards(id):
    cards = request.json['cards']

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

@card_routes.route('/sets/<int:id>/update', methods=["PUT"])
def update_set(id):
    card_set = CardSets.query.get(id)
    title = request.json['title']
    description = request.json['description']
    status = request.json['status']
    category = request.json['category']

    card_set.title = title
    card_set.description = description
    card_set.status = status
    card_set.category = category

    db.session.commit()
    return card_set.to_dict()

card_routes.route('/sets/<int:id>/delete', methods=["DELETE"])
def delete_set(id):
    card_set = CardSets.query.get(id)
    set_dict = card_set.to_dict()
    db.session.delete(card_set)
    db.session.commit()
    return set_dict

@card_routes.route('/sets/cards/<int:id>/delete', methods=["DELETE"])
def delete_card(id):
    card = CardQuestion.query.get(id)
    card_dict = card.to_dict()
    db.session.delete(card)
    db.session.commit()
    return card_dict

@card_routes.route('/sets/cards/<int:id>/update', methods=["PUT"])
def update_card(id):
    card = CardQuestion.query.get(id)
    front = request.json['front']
    back = request.json['back']

    card.front = front
    card.back = back

    db.session.commit()
    return card.to_dict()


@card_routes.route('/sets/public')
def get_all_public():
    sets = CardSets.query.filter(CardSets.status == "Public").all()
    result = {}
    if sets:
        for singleset in sets:
            set_dict = singleset.to_dict()
            result[singleset.id] = set_dict
    return result

@card_routes.route('/sets/all')
def get_all_available_sets():
    result = {}
    public_sets = CardSets.query.filter(CardSets.status == "Public").all()
    user_sets = CardSets.query.filter(CardSets.creator_id == current_user.id).all()

    for card_set in public_sets:
        set_dict = card_set.to_dict()
        result[card_set.id] = set_dict

    for card_set in user_sets:
        set_dict = card_set.to_dict()
        if not result[card_set.id]:
            result[card_set.id] = set_dict

    return result

@card_routes.route('/sets/user-sets')
def get_user_sets():
    result = {}
    user_sets = CardSets.query.filter(CardSets.creator_id == current_user.id).all()

    for card_set in user_sets:
        set_dict = card_set.to_dict()
        result[card_set.id] = set_dict

    return result

@card_routes.route('/sets/<category>')
def get_by_category(category):
    result = {}
    cat_sets = CardSets.query.filter(CardSets.category == category).all()

    for card_set in cat_sets:
        set_dict = card_set.to_dict()
        result[card_set.id] = set_dict

    return result
