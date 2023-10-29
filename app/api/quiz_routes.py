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

@quiz_routes.route('/quizzes/new', methods=["POST"])
def create_quiz():
    user_id = current_user.id
    title = request.json['title']
    description = request.json['description']
    category = request.json['category']
    status = request.json['status']

    new_quiz = TriviaQuiz(
        user_id=user_id,
        title=title,
        description=description,
        category=category,
        status=status
    )

    db.session.add(new_quiz)
    db.session.commit()
    return new_quiz.to_dict()


@quiz_routes.route('/quizzes/all')
def get_all_available_quizzes():
    result = {}
    public_quizzes = TriviaQuiz.query.filter(TriviaQuiz.status == "Public").all()
    user_quizzes = TriviaQuiz.query.filter(TriviaQuiz.user_id == current_user.id).all()

    for quiz in public_quizzes:
        quiz_dict = quiz.to_dict()
        result[quiz.id] = quiz_dict

    for quiz in user_quizzes:
        quiz_dict = quiz.to_dict()
        if not result[quiz.id]:
            result[quiz.id] = quiz_dict
    return result

@quiz_routes.route('/quizzes/user-quizzes')
def get_user_quizzes():
    result = {}
    quizzes = TriviaQuiz.query.filter(TriviaQuiz.user_id == current_user.id).all()

    for quiz in quizzes:
        quiz_dict = quiz.to_dict()
        result[quiz.id] = quiz_dict

    return result

@quiz_routes.route('/quizzes/<category>')
def get_by_category(category):
    result = {}
    quizzes = TriviaQuiz.query.filter(TriviaQuiz.category == category).all()

    for quiz in quizzes:
        quiz_dict = quiz.to_dict()
        result[quiz.id] = quiz_dict

    return result

@quiz_routes.route('/quizzes/<int:id>/delete', methods=["DELETE"])
def delete_quiz(id):
    quiz = TriviaQuiz.query.get(id)
    quiz_dict = quiz.to_dict()
    db.session.delete(quiz)
    db.session.commit()
    return quiz_dict

@quiz_routes.route('/quizzes/<int:id>/update', methods=["PUT"])
def update_quiz(id):
    quiz = TriviaQuiz.query.get(id)
    title = request.json['title']
    description = request.json['description']
    category = request.json['category']
    status = request.json['status']

    quiz.title = title
    quiz.description = description
    quiz.category = category
    quiz.status = status

    db.session.commit()
    return quiz.to_dict()

@quiz_routes.route('/quizzes/<int:id>/delete', methods=["DELETE"])
def delete_quiz(id):
    quiz = TriviaQuiz.query.get(id)
    quiz_dict = quiz.to_dict()

    db.session.delete(quiz)
    db.session.commit()
    return quiz_dict


@quiz_routes.route('/quizzes/<int:id>')
def get_by_quiz_id(id):
    result = {}
    quiz = TriviaQuiz.query.get(id)
    result = quiz.to_dict()

    return result
