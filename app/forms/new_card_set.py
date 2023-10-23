from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewCardSetForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = StringField('Description')
    length = IntegerField('Length', validators=[DataRequired()])
    category = StringField('Category', validators=[DataRequired()])
    status = StringField('Status', validators=[DataRequired()])
