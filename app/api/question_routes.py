from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.trivia_quiz import TriviaQuiz
from app.models.trivia_questions import TriviaQuestion
from flask_login import current_user, login_user, logout_user, login_required

question_routes = Blueprint('questions', __name__)

@question_routes.route('/<int:id>/add', methods=["POST"])
def create_quiz_questions(id):
    questions = request.json['questions']

    for q in questions:
        question = q['question']
        answer_one = q['answer_one']
        answer_two = q['answer_two']
        answer_three = q['answer_three']
        answer_four = q['answer_four']
        solution = q['solution']
        status = q['status']

        new_question = TriviaQuestion(
            quiz_id=id,
            question=question,
            answer_one=answer_one,
            answer_two=answer_two,
            answer_three=answer_three,
            answer_four=answer_four,
            solution=solution,
            status=status
        )

        db.session.add(new_question)
    db.session.commit()
    return {}

@question_routes.route('/<int:id>/update', methods=["PUT"])
def update_q(id):
    question = TriviaQuestion.query.get(id)
    q = request.json['question']
    a1 = request.json['answer_one']
    a2 = request.json['answer_two']
    a3 = request.json['answer_three']
    a4 = request.json['answer_four']
    s = request.json['solution']
    question.question = q
    question.answer_one = a1
    question.answer_two = a2
    question.answer_three = a3
    question.answer_four = a4
    question.solution = s

    db.session.commit()
    return question.to_dict()


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
