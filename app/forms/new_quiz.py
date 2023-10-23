from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewQuizForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = StringField('Description')
    category = StringField('Category', validators=[DataRequired()])
    status = StringField('Status', validators=[DataRequired()])
