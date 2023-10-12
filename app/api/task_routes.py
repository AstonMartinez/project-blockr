from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.task import Task
from app.forms.new_task_form import NewTaskForm
from flask_login import current_user, login_user, logout_user, login_required
from datetime import datetime
from app.api.auth_routes import validation_errors_to_error_messages
from sqlalchemy import and_
from datetime import datetime

task_routes = Blueprint('tasks', __name__)

@task_routes.route('/new', methods=["POST"])
def create_task():
    form = NewTaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        title = request.json['title']
        description = request.json['description']
        category = request.json['category']
        day = request.json['day']
        icon = request.json['icon']
        color = request.json['color']
        start_time = request.json['start_time']
        end_time = request.json['end_time']
    return {}

@task_routes.route('/<day>')
def get_task_by_day(day):
    result = {}
    tasks = Task.query.filter(and_(Task.user_id == current_user.id, Task.day == day))
    for task in tasks:
        task_dict = task.to_dict()
        result[task.id] = task_dict
    return result
