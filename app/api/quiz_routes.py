from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.trivia_quiz import TriviaQuiz
from app.models.trivia_questions import TriviaQuestion
from flask_login import current_user, login_user, logout_user, login_required

quiz_routes = Blueprint('quizzes', __name__)

@quiz_routes.route('/quizzes/public')
def get_all_public():
    result = {}
    quizzes = TriviaQuiz.query.filter(TriviaQuiz.status == "Public").all()
    for quiz in quizzes:
        quiz_dict = quiz.to_dict()
        result[quiz.id] = quiz_dict
    return result


@quiz_routes.route('/quizzes/<int:id>')
def get_by_quiz_id(id):
    result = {}
    # questions = {}
    # info = {}
    quiz = TriviaQuiz.query.get(id)
    # questions = TriviaQuestion.query.filter(TriviaQuestion.quiz_id == quiz.id).all()
    # all_qs = {}

    # if quiz:
    #     info = quiz.to_dict()

    # for q in questions:
    #     a_obj = {}

    #     a_obj[1] = q.answer_one
    #     a_obj[2] = q.answer_two

    #     if q.answer_three != None:
    #         a_obj[3] = q.answer_three

    #     if q.answer_four != None:
    #         a_obj[4] = q.answer_four

    #     q_dict = q.to_dict()
    #     q_dict["options"] = a_obj
    #     all_qs[q.id] = q_dict
    result = quiz.to_dict()

    return result
