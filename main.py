from flask import Flask, request, jsonify, session, render_template

import mysql.connector
from mysql.connector import errorcode
import datetime

app = Flask(__name__)

# database configuration
db_config = {
    'user': 'root',
    'password': '9390',
    'host': 'localhost',
    'port': '3306',
    'database': 'resumebuilder',
    'raise_on_warnings': True
}


# helper function to create database connection
@app.route('/test-db-connection')
def test_db_connection():
    cnx = create_db_connection()
    cursor = cnx.cursor()
    cursor.execute("SELECT VERSION()")
    result = cursor.fetchone()
    cnx.close()
    return jsonify({'status': 'success', 'message': 'Database connected successfully', 'version': result[0]})


def create_db_connection():
    print("Connected")
    try:

        cnx = mysql.connector.connect(**db_config)
        print("connected")
        return cnx
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)


# @app.route("/" , methods = ["GET"])
# def example_template():
#     return render_template("index.html")


# registration API
@app.route('/register', methods=['POST'])
def register():
    print("Register")
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        gender = request.form['gender']
        dob = request.form['dob']
        email = request.form['email']
        mobile_number = request.form['mobile-number']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        if password != confirm_password:
            return jsonify({'message': 'Passwords do not match'})
        cnx = create_db_connection()
        cursor = cnx.cursor()
        last_updated = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = "INSERT INTO user_table(email,password,is_active,last_updated,HasContent) VALUES (%s, %s, %s, %s, %s)"
        values = (email, password, 1, last_updated, 0)
        cursor.execute(query, values)
        cnx.commit()
        cnx.close()
        return jsonify({'status': 201, 'success': 'True', 'message': 'User registered successfully'})


global user_id


# login API
@app.route('/login', methods=['POST'])
def login():
    print('login started')
    if request.method == 'POST':
        try:
            email_1 = request.form['email']
            print(email_1)
            password_1 = request.form['password']
        except KeyError:
            # Handle the error caused by missing or invalid data in the request payload
            return jsonify({'status': 400, 'success': 'False', 'message': 'Missing or invalid data'})
        cnx = create_db_connection()
        cursor = cnx.cursor()
        query = "SELECT * FROM user_table WHERE email=%s and password=%s, (email, password)"
        cursor.execute(query)
        user = cursor.fetchone()
        cnx.close()
        if user:
            return jsonify({'message': 'User logged in successfully'})
        else:
            return jsonify({'message': 'Invalid credentials'})


if __name__ == '__main__':
    app.run(debug=True, port=5000)