from flask import Blueprint, request
from app.models import db
from app.models.task import Task
from app.forms.new_task_form import NewTaskForm
from flask_login import current_user, login_required
from app.api.auth_routes import validation_errors_to_error_messages
from sqlalchemy import and_

task_routes = Blueprint('tasks', __name__)

@task_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_task(id):
    """
    Deletes an existing task.
    """
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return task.to_dict()

@task_routes.route('/<int:id>/update', methods=["PUT"])
@login_required
def update_task(id):
    """
    Updates an existing task.
    """
    task = Task.query.get(id)
    title = request.json['title']
    description = request.json['description']
    day = request.json['day']
    icon = request.json['icon']
    color = request.json['color']
    start_time = request.json['start_time']
    end_time = request.json['end_time']

    task.title = title
    task.description = description
    task.day = day
    task.icon = icon
    task.color = color
    task.start_time = start_time
    task.end_time = end_time

    db.session.commit()

    return task.to_dict()


@task_routes.route('/new', methods=["POST"])
@login_required
def create_task():
    """
    Creates a new task.
    """
    form = NewTaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        title = request.json['title']
        description = request.json['description']
        day = request.json['day']
        icon = request.json['icon']
        color = request.json['color']
        start_time = request.json['start_time']
        end_time = request.json['end_time']

        new_task = Task(
            user_id=current_user.id,
            title=title,
            description=description,
            day=day,
            icon=icon,
            color=color,
            start_time=start_time,
            end_time=end_time
        )

        db.session.add(new_task)
        db.session.commit()
        return new_task.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}

@task_routes.route('/<day>')
@login_required
def get_task_by_day(day):
    """
    Retrieves all tasks for a specified day of the week.
    """
    result = {}
    tasks = Task.query.filter(and_(Task.user_id == current_user.id, Task.day.ilike(day))).order_by(Task.start_time)
    for task in tasks:
        task_dict = task.to_dict()
        result[task.id] = task_dict
    return result
