from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewApplication(FlaskForm):
    company = StringField('Company', validators=[DataRequired()])
    job_title = StringField('Job Title', validators=[DataRequired()])
