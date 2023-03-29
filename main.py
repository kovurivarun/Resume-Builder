from flask import Flask, request, jsonify

import mysql.connector
from mysql.connector import errorcode

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

#     cnx = create_db_connection()
#     cursor = cnx.cursor()
#     query = "SELECT * FROM personal_info"
#     user_2 = cursor.fetchall()
#     print("user_2")


# registration API
@app.route('/register')
def register():
    print("Register")
    if request.headers.get('Content-Type') != "application/json":
        return 'Error: Request must be JSON format', 400
    data = request.get_json()
    firstname = data['firstname']
    lastname = data['lastname']
    gender = data['gender']
    dob = data['dob']
    email = data['email']
    mobile_number = data['mobile_number']
    password = data['password']
    confirm_password = data['confirm_password']
    if password != confirm_password:
        return jsonify({'message': 'Passwords do not match'}), 400
    cnx = create_db_connection()
    cursor = cnx.cursor()

    query = "INSERT INTO signup (firstname, lastname, gender, dob, email, mobile_number, password, confirm_password) VALUES (%s, %s, %s, %s, %s, %s, %s,%s)"
    values = (firstname, lastname, gender, dob, email, mobile_number, password, confirm_password)
    cursor.execute(query, values)
    cnx.commit()
    cnx.close()
    return jsonify({'status': 201, 'success': 'True', 'message': 'User registered successfully'})


# login API
@app.route('/login', methods=['GET'])
def login():
    print('login started')
    # if request.headers.get('Content-Type') != 'application/json':
    #  return 'Error: Request must be JSON format', 400
    data = {'email': 'aravind@gmail.com', 'password': 'Arand@123'}
    print(data['email'])
    # data_1 = request.get_json(data=data)\
    # print(data_1)
    try:
        email_1 = data['email']
        print(email_1)
        password_1 = data['password']
    except KeyError:
        # Handle the error caused by missing or invalid data in the request payload
        return jsonify({'status': 400, 'success': 'False', 'message': 'Missing or invalid data'})
    cnx = create_db_connection()
    cursor = cnx.cursor()
    query = "SELECT * FROM signup"
    cursor.execute(query)
    user_1 = cursor.fetchall()
    print(user_1)
    cnx.close()
    for user in user_1:
        if user[5] == email_1:
            if user[6] == password_1:
                return jsonify({'status': 200, 'success': 'True', 'message': 'User logged in successfully'})
    return jsonify({'status': 400, 'success': 'False', 'message': 'Invalid credentials'})

    # values = (firstname, lastname, middlename, dob, addressline_1, addressline_2, city, state, country, pincode, phone, email, website)
    # cursor.execute(query, values)


@app.route('/template')
def personal_info():
    print("and")
    cnx = create_db_connection()
    cursor = cnx.cursor()
    query = "SELECT * FROM personal_info"
    cursor.execute(query)
    var_1 = cursor.fetchone()
    return jsonify({'firstname': var_1[0], 'lastname': var_1[1], 'middlename': var_1[2], 'dob': var_1[3], 'addressline_1': var_1[4], 'addressline_2': var_1[5], 'city': var_1[6], 'state': var_1[7], 'country': var_1[8], 'pincode': var_1[9], 'phone': var_1[10], 'email': var_1[11], 'website': var_1[12]})
# @app.route('/template',methods = ['GET','POST'])
# def personal_info1():
#     if request.method == ['POST']:
#         firstname = request.form['firstname']
#         lastname = request.form['lastname']
#         middlename = request.form['middlename']
#         dob = request.form['dob']
#         addressline_1 = request.form['addressline_1']
#         addressline_2 = request.form['addressline_2']
#         city = request.form['city']
#         state = request.form['state']
#         country = request.form['country']
#         pincode = request.form['pincode']

#         phone = request.form['phone']
#         email = request.form['email']
#         website = request.form['website']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "INSERT INTO personal_info (firstname, lastname, middlename, dob, addressline_1, addressline_2, city, state, country, pincode, phone, email, website) VALUES (firstname, lastname, middlename, dob, addressline_1, addressline_2, city, state, country, pincode, phone, email, website)"
#         cnx.commit()
#         cnx.close()


if __name__ == '__main__':
    app.run(debug=True, port=5000)
