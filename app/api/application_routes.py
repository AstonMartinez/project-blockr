from flask import Blueprint, request
from app.models import db
from app.models.user_applications import Application
from app.forms.new_application import NewApplication
from app.forms.update_application import UpdateApplication
from flask_login import current_user, login_user, logout_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.models.applied_column import AppliedApp
from app.models.interviewed_column import InterviewedApp
from app.models.offered_column import OfferedApp
from app.models.rejected_column import RejectedApp

application_routes = Blueprint('applications', __name__)

@application_routes.route('/columns/<column>/update', methods=["PUT"])
def update_column(column):
    if column == "Applied":
        user_col = AppliedApp.query.filter(AppliedApp.user_id == current_user.id).first()
    elif column == "Interviewed":
        user_col = InterviewedApp.query.filter(InterviewedApp.user_id == current_user.id).first()
    elif column == "Rejected":
        user_col = RejectedApp.query.filter(RejectedApp.user_id == current_user.id).first()
    elif column == "Received Offer":
        user_col = OfferedApp.query.filter(OfferedApp.user_id == current_user.id).first()

    user_col.apps_list = request.json['apps_list']
    db.session.commit()
    return user_col.to_dict()


@application_routes.route('/all-cats')
@login_required
def get_all_categories():
    result = {}
    applied_apps = {}
    interviewed_apps = {}
    offered_apps = {}
    rejected_apps = {}

    applied = AppliedApp.query.filter(AppliedApp.user_id == current_user.id).all()
    interviewed = InterviewedApp.query.filter(InterviewedApp.user_id == current_user.id).all()
    offered = OfferedApp.query.filter(OfferedApp.user_id == current_user.id).all()
    rejected = RejectedApp.query.filter(RejectedApp.user_id == current_user.id).all()

    for apply in applied:
        apply_dict = apply.to_dict()
        applied_apps = apply_dict['apps']
        apps_split = applied_apps.split(",")
        final_applied_list = []
        for app in apps_split:
            app_id = int(app)
            appli = Application.query.get(app_id)
            appli_dict = appli.to_dict()
            final_applied_list.append(appli_dict)

    for intered in interviewed:
        intered_dict = intered.to_dict()
        interviewed_apps = intered_dict['apps']
        apps_split = interviewed_apps.split(",")
        final_interviewed_list = []
        for app in apps_split:
            app_id = int(app)
            appli = Application.query.get(app_id)
            appli_dict = appli.to_dict()
            final_interviewed_list.append(appli_dict)

    for offed in offered:
        offed_dict = offed.to_dict()
        offered_apps = offed_dict['apps']
        apps_split = offered_apps.split(",")
        final_offered_list = []
        for app in apps_split:
            app_id = int(app)
            appli = Application.query.get(app_id)
            appli_dict = appli.to_dict()
            final_offered_list.append(appli_dict)

    for rejed in rejected:
        rejed_dict = rejed.to_dict()
        rejected_apps = rejed_dict['apps']
        apps_split = rejected_apps.split(",")
        final_rejected_list = []
        for app in apps_split:
            app_id = int(app)
            appli = Application.query.get(app_id)
            appli_dict = appli.to_dict()
            final_rejected_list.append(appli_dict)

    result['applied'] = final_applied_list
    result['interviewed'] = final_interviewed_list
    result['offered'] = final_offered_list
    result['rejected'] = final_rejected_list
    return result

@application_routes.route('/user')
@login_required
def get_user_applications():
    """
    Retreives all applications belonging to the current user.
    """
    result = {}
    applications = Application.query.filter(Application.user_id == current_user.id)

    if applications:
        for app in applications:
            app_dict = app.to_dict()
            result[app.id] = app_dict
    return result

@application_routes.route('/<int:id>')
@login_required
def get_single_application(id):
    """
    Retreives a single specified application.
    """
    app = Application.query.get(id)
    if app:
        return app.to_dict()
    return { 'message': 'No application found' }

@application_routes.route('/new', methods=["POST"])
@login_required
def create_application():
    """
    Creates a new application.
    """
    form = NewApplication()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        company = request.json['company']
        job_title = request.json['job_title']
        deadline = request.json['deadline']
        job_url = request.json['job_url']
        salary = request.json['salary']
        date_applied = request.json['date_applied']
        location = request.json['location']
        job_description = request.json['job_description']
        status = request.json['status']
        notes = request.json['notes']

        new_application = Application(
            user_id=current_user.id,
            company=company,
            job_title=job_title,
            deadline=deadline,
            job_url=job_url,
            salary=salary,
            date_applied=date_applied,
            location=location,
            job_description=job_description,
            status=status,
            notes=notes
        )

        db.session.add(new_application)
        db.session.commit()
        return new_application.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }

@application_routes.route('/<int:id>/update', methods=["PUT"])
@login_required
def update_application(id):
    """
    Updates an existing application.
    """
    form = UpdateApplication()
    form['csrf_token'].data = request.cookies['csrf_token']

    app = Application.query.get(id)

    if form.validate_on_submit():
        if app.user_id == current_user.id:
            company = request.json['company']
            job_title = request.json['job_title']
            deadline = request.json['deadline']
            job_url = request.json['job_url']
            salary = request.json['salary']
            date_applied = request.json['date_applied']
            location = request.json['location']
            job_description = request.json['job_description']
            status = request.json['status']
            notes = request.json['notes']

            app.company = company
            app.job_title = job_title
            app.deadline = deadline
            app.job_url = job_url
            app.salary = salary
            app.date_applied = date_applied
            app.location = location
            app.job_description = job_description
            app.status = status
            app.notes = notes

            db.session.commit()
        else:
            return { 'message': 'Unauthorized' }
    return { 'errors': validation_errors_to_error_messages(form.errors) }

@application_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_application(id):
    """
    Deletes an existing application.
    """
    app = Application.query.get(id)
    if app:
        if app.user_id == current_user.id:
            app_dict = app.to_dict()
            db.session.delete(app)
            return app_dict
        else:
            return { 'message': 'Unauthorized' }
    return { 'message': 'Application not found' }
