from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.card_sets import CardSets
from app.models.card_questions import CardQuestion
from flask_login import current_user, login_user, logout_user, login_required

card_routes = Blueprint('cards', __name__)

@card_routes.route('/sets')
def get_sets():
    sets = CardSets.query.all()
    result = {}
    if sets:
        for singleset in sets:
            set_dict = singleset.to_dict()
            questions = CardQuestion.query.filter(CardQuestion.set_id == singleset.id)
            set_dict['questions'] = questions
            result[singleset.id] = set_dict
    return result


@card_routes.route('/<int:id>')
def get_single_set(id):
    card_set = CardSets.query.get(id)
    if(card_set):
        set_dict = card_set.to_dict()
        questions = CardQuestion.query.filter(CardQuestion.set_id == card_set.id)
        set_dict['questions'] = questions
        return set_dict
