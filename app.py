from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy()
# db.init_app(app)




@app.route('/display')
def display():
    l=[1,2,3]
    return jsonify(l)



# class Posts(db.Model):
# 	id = db.Column(db.Integer, primary_key=True)
# 	title = db.Column(db.String(255))
# 	content = db.Column(db.Text)
# 	#author = db.Column(db.String(255))
# 	date_posted = db.Column(db.DateTime, default=datetime.utcnow)


	
if __name__=="__main__":
    app.run(debug=True)
