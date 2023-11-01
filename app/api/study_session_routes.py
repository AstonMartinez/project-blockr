from flask import Blueprint, request
from app.models import db
from app.models.study_session import StudySession
from app.forms.study_session_form import NewStudySessionForm
from flask_login import current_user, login_required
from datetime import datetime
from app.api.auth_routes import validation_errors_to_error_messages
from sqlalchemy import and_

study_session_routes = Blueprint('study_sessions', __name__)

@study_session_routes.route('/current/recent')
@login_required
def get_recent_sessions():
    """
    Retrieves the current user's 10 most recent study sessions.
    """
    result = {}
    sessions = StudySession.query.filter(StudySession.user_id == current_user.id).limit(10).all()

    for sess in sessions:
        session_dict = sess.to_dict()
        result[sess.id] = session_dict
    return result


@study_session_routes.route('/current/all')
@login_required
def get_user_sessions():
    """
    Retrieves all study sessions belonging to the current user.
    """
    user_sessions = StudySession.query.filter(StudySession.user_id == current_user.id)
    result = {}
    if user_sessions:
        for session in user_sessions:
            result[session.id] = session.to_dict()
    return result

@study_session_routes.route('/current/<category>')
@login_required
def get_session_by_category(category):
    """
    Retrieves all study sessions matching the indicated category.
    """
    user_sessions = StudySession.query.filter(and_(StudySession.category == category, StudySession.user_id == current_user.id))
    result = {}
    if user_sessions:
        for session in user_sessions:
            result[session.id] = session.to_dict()
    return result

@study_session_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_study_session(id):
    """
    Deletes an existing study session.
    """
    session = StudySession.query.get(id)
    if session:
        db.session.delete(session)
        db.session.commit()
    return session.to_dict()

@study_session_routes.route('/new', methods=["POST"])
@login_required
def new_study_session():
    """
    Creates a new study session.
    """
    form = NewStudySessionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        num_correct = request.json['num_correct']
        num_incorrect = request.json['num_incorrect']
        out_of = request.json['out_of']
        time_spent = request.json['time_spent']
        session_type = request.json['session_type']
        category = request.json['category']
        date_created = datetime.now()
        new_session = StudySession(
            user_id=current_user.id,
            num_correct=num_correct,
            num_incorrect=num_incorrect,
            out_of=out_of,
            time_spent=time_spent,
            date_created=date_created,
            session_type=session_type,
            category=category
        )
        db.session.add(new_session)
        db.session.commit()
        return new_session.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }
