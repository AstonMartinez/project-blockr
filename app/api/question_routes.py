from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.trivia_quiz import TriviaQuiz
from app.models.trivia_questions import TriviaQuestion
from flask_login import current_user, login_user, logout_user, login_required

question_routes = Blueprint('questions', __name__)

@question_routes.route('/<int:id>/all')
def get_qs(id):
    result = {}
    questions = TriviaQuestion.query.filter(TriviaQuestion.quiz_id == id).all()
    for q in questions:
        q_dict = q.to_dict()
        a_obj = {}

        a_obj[1] = q.answer_one
        a_obj[2] = q.answer_two

        if q.answer_three != None:
            a_obj[3] = q.answer_three

        if q.answer_four != None:
            a_obj[4] = q.answer_four

        q_dict["options"] = a_obj
        result[q.id] = q_dict
    return result
