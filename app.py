from flask import Flask, request,jsonify
import mysql.connector
from mysql.connector import errorcode

app = Flask(__name__)
# database configuration
db_config = {
    'user': 'root',
    'password': 'Bunny@9866',
    'host': 'localhost',
    'port': '3306',
    'database': 'resumebuilder',
    'raise_on_warnings': True
}
# mysql = MySQL(app)

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
    # try:
    #     cnx = mysql.connect()
    #     return cnx
    # except Exception as e:
    #     print("error while connecting to database:", e)
    
       

# registration API
@app.route('/register', methods=['POST'])
def register():
    if request.headers.get('Content-Type') != 'application/json':
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
    query = "INSERT INTO signup (firstname, lastname, gender, dob, email, mobile_number, password,confirm_password) VALUES (%s, %s, %s, %s, %s, %s, %s,%s)"
    values = (firstname, lastname, gender, dob, email, mobile_number, password,confirm_password)
    cursor.execute(query, values)
    cnx.commit()
    cnx.close()
    return jsonify({'status': 201, 'success': 'False','message': 'User registered successfully'})
