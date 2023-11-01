from flask import Blueprint, request
from app.models import db
from app.models.trivia_quiz import TriviaQuiz
from flask_login import current_user, login_required

quiz_routes = Blueprint('quizzes', __name__)

@quiz_routes.route('/quizzes/public')
def get_all_public():
    """
    Retrieves all quizzes with a status of "Public".
    """
    result = {}
    quizzes = TriviaQuiz.query.filter(TriviaQuiz.status == "Public").all()
    for quiz in quizzes:
        quiz_dict = quiz.to_dict()
        result[quiz.id] = quiz_dict
    return result

@quiz_routes.route('/quizzes/new', methods=["POST"])
@login_required
def create_quiz():
    """
    Creates a new quiz.
    """
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
@login_required
def get_all_available_quizzes():
    """
    Retrieves all quizzes with a status of "Public", as well as the user's custom quizzes.
    """
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
@login_required
def get_user_quizzes():
    """
    Retrieves all custom quizzes belonging to the current user.
    """
    result = {}
    quizzes = TriviaQuiz.query.filter(TriviaQuiz.user_id == current_user.id).all()

    for quiz in quizzes:
        quiz_dict = quiz.to_dict()
        result[quiz.id] = quiz_dict

    return result

@quiz_routes.route('/quizzes/<category>')
def get_by_category(category):
    """
    Retrieves all quizzes with a category that matches the indicated category.
    """
    result = {}
    quizzes = TriviaQuiz.query.filter(TriviaQuiz.category == category).all()

    for quiz in quizzes:
        quiz_dict = quiz.to_dict()
        result[quiz.id] = quiz_dict

    return result

@quiz_routes.route('/quizzes/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_quiz(id):
    """
    Deletes an existing quiz.
    """
    quiz = TriviaQuiz.query.get(id)
    quiz_dict = quiz.to_dict()
    db.session.delete(quiz)
    db.session.commit()
    return quiz_dict

@quiz_routes.route('/quizzes/<int:id>/update', methods=["PUT"])
@login_required
def update_quiz(id):
    """
    Updates an existing quiz.
    """
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


@quiz_routes.route('/quizzes/<int:id>')
def get_by_quiz_id(id):
    """
    Retrieves an individual quiz.
    """
    result = {}
    quiz = TriviaQuiz.query.get(id)
    result = quiz.to_dict()

    return result
