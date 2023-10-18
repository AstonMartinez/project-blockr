from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.trivia_quiz import TriviaQuiz
from app.models.trivia_questions import TriviaQuestion
from flask_login import current_user, login_user, logout_user, login_required

trivia_routes = Blueprint('trivia', __name__)

@trivia_routes.route('/quizzes/public')
def get_all_public():
    result = {}
    quizzes = TriviaQuiz.query.filter(TriviaQuiz.status == "Public").all()
    for quiz in quizzes:
        quiz_dict = quiz.to_dict()
        result[quiz.id] = quiz_dict
    return result


@trivia_routes.route('/quizzes/<int:id>/questions')
def get_by_quiz_id(id):
    result = {}
    questions = TriviaQuestion.query.filter(TriviaQuestion.quiz_id == id).all()
    for q in questions:
        q_dict = q.to_dict()
        result[q.id] = q_dict
    return result
