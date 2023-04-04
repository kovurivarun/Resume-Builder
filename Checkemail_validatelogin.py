from flask import Flask, request, jsonify,session

import mysql.connector
from mysql.connector import errorcode
import datetime



app = Flask(__name__)

db_config = {
    'user': 'root',
    'password': '9390',
    'host': 'localhost',
    'port': '3306',
    'database': 'resumebuilder',
    'raise_on_warnings': True
}


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
@app.route('/register', methods = ['POST'])
def register():
    print("Register")
    if request.method=='POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        gender = request.form['gender']
        dob = request.form['dob']
        email = request.form['email']
        mobile_number = request.form['mobile_number']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        if password != confirm_password:
            return jsonify({'message': 'Passwords do not match'})
        cnx = create_db_connection()
        cursor = cnx.cursor()
        sql = "SELECT * FROM sign_up WHERE email = %s"
        val = (email,)
        mycursor = cnx.cursor(dictionary=True)
        mycursor.execute(sql, val)
        user = mycursor.fetchone()
        if user:
            cnx.close()
            response = {'status_code': 400, 'message': 'Email already registered.'}
            return jsonify(response)
        last_updated = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query_signup = "INSERT INTO  sign_up(firstname,lastname,gender,dob,email,mobile_number,password) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        values_signup = (firstname,lastname,gender,dob,email,mobile_number,password)
        cursor.execute(query_signup,values_signup)
        query_user_master="INSERT INTO users(user_id,email,password,isactive,lastupdated,has_resume_content) VALUES (%s,%s,%s,%d,%Y-%m-%d %H:%M:%S,%d)"
        values_user_master=(email,email,password,'1',last_updated,'0')
        cursor.execute(query_user_master, values_user_master)
        cnx.commit()
        cnx.close()
        return jsonify({'status': 201, 'success': 'True', 'message': 'User registered successfully'})




# login API
@app.route('/login', methods=['POST'])
def login():
    print('login started')
    if request.method=='POST':
        try:
            email_1 = request.form['email']
            print(email_1)
            password_1 = request.form['password']
        except KeyError:
            # Handle the error caused by missing or invalid data in the request payload
            return jsonify({'status': 400, 'success': 'False', 'message': 'Missing or invalid data'})
        cnx = create_db_connection()
        cursor = cnx.cursor()
        query = "SELECT * FROM sign_up WHERE email=%s AND password=%s "
        values = (email_1, password_1)
        cursor.execute(query,values)
        users = cursor.fetchall()
        cnx.close()
        if users: 
            for user in users:
                if user[0] == email_1 and user[1] == password_1:
                    return jsonify({'message': 'User logged in successfully'})
            return jsonify({'message': 'Invalid email or password'})
        else:
            return jsonify({'message': 'Invalid email or password'}), 401   
           
if __name__ == '__main__':
    app.run(debug=True, port=5000)




































# @app.route('/template',methods = ['GET','POST'])
# def personal_information():
#     if request.method == ['POST']:
#         firstname = request.form['firstName']
#         lastname = request.form['lastName']
#         #middlename = request.form['middlename']
#         dob = request.form['dateofBirth']
#         address = request.form['Address']
#         #address2 = request.form['address2']
#         city = request.form['city']
#         state = request.form['state']
#         pincode = request.form['pincode']

#         # phone = request.form['phone']
#         # email = request.form['email']
#         # website = request.form['website']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query_personal = "INSERT INTO personal_information(firstname, lastname, dob) VALUES (firstname, lastname, dob)"
#         values_personal = (firstname, lastname, dob)
#         cursor.execute(query_personal, values_personal)
#         address = address+","+city+","+","+state+","+pincode
#         query_contact = "INSERT INTO contact_information(address) VALUES (address)"
#         values_contact = (address)
#         cursor.execute(query_contact, values_contact)
#         cnx.commit()
#         cnx.close()

# def personal_information():
#     print("and")
#     if request.method == 'GET':
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "SELECT * FROM personal_information"
#         cursor.execute(query)
#         var_1 = cursor.fetchone()
#         return jsonify({'firstname': var_1[1], 'lastname': var_1[2], 'dob': var_1[3]})
#     #'addressline_1': var_1[4], 'addressline_2': var_1[5], 'city': var_1[6], 'state': var_1[7], 'country': var_1[8], 'pincode': var_1[9], 'phone': var_1[10], 'email': var_1[11], 'website': var_1[12]3#


# def contact_infromation():
#     if request.method == ['POST']:
#         alternate_email = request.form['email']
#         phone_number = request.form['phoneNumber']
#         alternate_number = request.form['alternateNumber']
#         linkedin_url = request.form['linkdin']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query_contact = "INSERT INTO contact_information(alternate_email, phone_number, alternate_number, linkedin_url) VALUES (alternate_email, phone_number, alternate_number, linkedin_url)"
#         values_contact = (alternate_email, phone_number, alternate_number, linkedin_url)
#         cursor.execute(query_contact, values_contact)
#         #query_contact = "INSERT INTO contact_information(address) VALUES (address)"
#         #values_contact = (address)
#         #cursor.execute(query_contact, values_contact)
#         cnx.commit()
#         cnx.close()


# def contact_information():
#     print("and")
#     if request.method == 'GET':
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "SELECT * FROM contact_information"
#         cursor.execute(query)
#         var_1 = cursor.fetchone()
#         return jsonify({'alternate_email': var_1[1], 'phone_number': var_1[2],'alternate_number': var_1[3],'linkedin_url': var_1[4]})

# def work_experience():
#     if request.method == ['POST']:
#         company_name = request.form['companyName']
#         position = request.form['position']
#         start_date = request.form['startDate']
#         current_job = request.form['current job']
#         end_date = request.form['endDate']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query_work = "INSERT INTO work_experience(company_name,position,start_date,current_job,end_date) VALUES (company_name,position,start_date,current_job,end_date)"
#         values_work = (company_name,position,start_date,current_job,end_date)
#         cursor.execute(query_work, values_work)
#         #query_contact = "INSERT INTO contact_information(address) VALUES (address)"
#         #values_contact = (address)
#         #cursor.execute(query_contact, values_contact)
#         cnx.commit()
#         cnx.close()


# def work_experience():
#     print("and")
#     if request.method == 'GET':
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "SELECT * FROM work_experience"
#         cursor.execute(query)
#         var_1 = cursor.fetchone()
#         return jsonify({'company_name': var_1[1], 'position': var_1[2],'start date': var_1[3],'current job': var_1[4],'end date':var_1[5]})

# def skills():
#     if request.method == 'POST':
#         skill_name = request.form['skill name']
#         level = request.form['level']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query_skill = "INSERT INTO skills(skill_name,level) VALUES (skill_name,level)"
#         values_skill = (skill_name,level)
#         cursor.execute(query_skill, values_skill)
#         cnx.commit()
#         cnx.close()


# def skills():
#     print("and")
#     if request.method == 'GET':
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "SELECT * FROM skills"
#         cursor.execute(query)
#         var_1 = cursor.fetchone()
#         return jsonify({'skill_name': var_1[1], 'level':var_1[2]})


# def education():
#     if request.method == 'POST':
#         school_name = request.form['school name']
#         qualification = request.form['qualification']
#         cgpa = request.form['cgpa']
#         passing_year = request.form['passing year']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query_education = "INSERT INTO education(school_name,qualification,cgpa,passing_year) VALUES (school_name,qualification,cgpa,passing_year)"
#         values_education = (school_name,qualification,cgpa,passing_year)
#         cursor.execute(education, education)
#         cnx.commit()
#         cnx.close()


# def education():
#     print("and")
#     if request.method == 'GET':
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "SELECT * FROM education"
#         cursor.execute(query)
#         var_1 = cursor.fetchone()
#         return jsonify({'school_name': var_1[1], 'qualification':var_1[2], 'cgpa': var_1[3],'passing_year':var_1[4]})


# def Project():
#     if request.method == 'POST':
#         project_name= request.form['Project name']
#         project_description = request.form['project Description']
#         implementation_year = request.form['Implementation Year']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query_project = "INSERT INTO project(project_name,project_description,implementation_year) VALUES (project_name,project_description,implementation_year)"
#         values_project = (project_name,project_description,implementation_year)
#         cursor.execute(query_project, values_project)
#         cnx.commit()
#         cnx.close()


# def Project():
#     print("and")
#     if request.method == 'GET':
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "SELECT * FROM project"
#         cursor.execute(query)
#         var_1 = cursor.fetchone()
#         return jsonify({'project_name': var_1[1], 'project_description':var_1[2], 'implementation_year': var_1[3]})

# def Certification():
#     if request.method == 'POST':
#         certification_name = request.form['Certification']
#         issued_by = request.form['Certification']
#         certification_id = request.form['Certification']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query_certification = "INSERT INTO certification(certification_name,issued_by,certification_id) VALUES (certification_name,issued_by,certification_id)"
#         values_certification = (certification_name,issued_by,certification_id)
#         cursor.execute(query_certification, values_certification)
#         cnx.commit()
#         cnx.close()

# def Certification():
#     print("and")
#     if request.method == 'GET':
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "SELECT * FROM certification"
#         cursor.execute(query)
#         var_1 = cursor.fetchone()
#         return jsonify({'certification_name': var_1[1], 'issued_by':var_1[2], 'certification_id': var_1[3]})


# def Hobbies():
#     if request.method == 'POST':
#         hobby= request.form['hobbies']
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query_hobby = "INSERT INTO hobbies(hobby) VALUES (hobby)"
#         values_hobby = (hobby)
#         cursor.execute(query_hobby, values_hobby)
#         cnx.commit()
#         cnx.close()

# def Hobbies():
#     print("and")
#     if request.method == 'GET':
#         cnx = create_db_connection()
#         cursor = cnx.cursor()
#         query = "SELECT * FROM hobbies"
#         cursor.execute(query)
#         var_1 = cursor.fetchone()
#         return jsonify({'hobby': var_1[1]})

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)
