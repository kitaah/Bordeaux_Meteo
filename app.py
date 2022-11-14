from flask import Flask, render_template, request, url_for, redirect, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import datetime
import bcrypt
import re
from flask_bcrypt import Bcrypt

app = Flask(__name__) 

def __database_connection():
    HEX_SEC_KEY = 'a%45#AmllpoRF2FT5n%k'
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = '16.miRO47.7r'
    app.config['MYSQL_DB'] = 'bordeaux_meteo'
    app.config['CURSORCLASS'] = 'DictCursor'
    app.config['SECRET_KEY'] = HEX_SEC_KEY
    
mysql = MySQL(app)

def access_database_connection():
    return __database_connection()

access_database_connection() 

@app.route("/") 
def __main_page(): 
    date_day = datetime.datetime.now()
    d = date_day.day 
    m = date_day.month
    y = date_day.year     
    select_last_data = mysql.connection.cursor()
    sql_limit_1 = "SELECT H_Releve,T_Releve FROM releve ORDER BY Id_Releve DESC LIMIT 1"
    select_last_data.execute(sql_limit_1)
    last_data = select_last_data.fetchall()
    select_last_data.close()
    select_last_15_data = mysql.connection.cursor()
    sql_limit_15 = "SELECT H_Releve,T_Releve,Date_Releve FROM releve ORDER BY Id_Releve DESC LIMIT 15"
    select_last_15_data.execute(sql_limit_15)
    last_15_data = select_last_15_data.fetchall()
    select_last_15_data.close()
    return render_template("index.html",day = d, year = y, month = m, last_data = last_data, last_15_data = last_15_data)
def access_main_page():
    return __main_page()

@app.route("/connexion", methods = ["GET", "POST"]) 
def __login_page(): 
    if request.method == 'POST' :
        email = request.form['login-email']
        password = request.form['login-password'].encode('utf-8')
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute('SELECT * FROM utilisateur WHERE AdresseMail_Utilisateur = % s', (email, ))
        user = cur.fetchone()
        cur.close()
        if len(user) > 0 :
            if bcrypt.hashpw(password, user['Password_Utilisateur'].encode('utf-8')) == user['Password_Utilisateur'].encode('utf-8'):
                session['Prenom_Utilisateur'] = user["Prenom_Utilisateur"]
                session['AdresseMail_Utilisateur'] = user["AdresseMail_Utilisateur"]
            return redirect(url_for('__data_management_page')) 

    else: return render_template('login.html')
    
def access_login_page():
    return __login_page()

@app.route("/inscription", methods = ["GET", "POST"]) 
def __inscription_page(): 
    message = ''
    if request.method == 'POST' :
        fname = request.form['registration-fname']
        lname = request.form['registration-lname']
        address = request.form['registration-address']
        email = request.form['registration-email']
        password = request.form['registration-password'].encode('utf-8')
        hash_password = bcrypt.hashpw(password, bcrypt.gensalt())
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM utilisateur WHERE AdresseMail_Utilisateur = %s', (email, ))
        account = cursor.fetchone()
        if account:
            message = "Le compte existe déjà !"
        elif not fname or not lname or not address or not email or not password :
            message = 'Merci de compléter tous les champs du formulaire !'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            message = "Format d'adresse email invalide !"
        else:
            cursor.execute('INSERT INTO utilisateur (Prenom_Utilisateur,Nom_Utilisateur,Adresse_Utilisateur,AdresseMail_Utilisateur,Password_Utilisateur) VALUES (% s,% s,% s,% s,% s)', (fname, lname, address, email, hash_password, ))
            mysql.connection.commit()
            message = "Votre compte a bien été créé !"
    elif request.method == 'POST':
        message = "Merci de compléter tous les champs du formulaire !"
    return render_template('registration.html', message = message)
def access_inscription_page():
    return __inscription_page()

@app.route("/gestion", methods = ["GET", "POST"]) 
def __data_management_page(): 
    if request.method == 'POST' :
        sensor_name = request.form["sensors-name"] 
        sensor_id = request.form["sensors-id"]   
        update_sensors = mysql.connection.cursor()
        update_sensors.execute("UPDATE sensor SET Nom_Sensor =%s WHERE Id_Sensor=%s", (sensor_name,sensor_id,))
        mysql.connection.commit()
        return redirect(url_for('__data_management_page')) 

    else :
        if 'AdresseMail_Utilisateur' and 'Prenom_Utilisateur' in session:
            select_sensors = mysql.connection.cursor()
            sql_sensors = "SELECT Id_Sensor,Nom_Sensor FROM sensor"
            select_sensors.execute(sql_sensors)
            all_sensors = select_sensors.fetchall()
            select_sensors.close()
            return render_template("user.html", all_sensors = all_sensors)    
        else:
            return redirect(url_for('__main_page')) 

def access_data_management_page():
    return __data_management_page()

@app.route("/logout")
def __logout():
    session.clear()
    return redirect(url_for('__main_page'))     

def access_logout():
    return __logout()

@app.errorhandler(404)
def __error_404_page(error):
    return render_template('404.html'),404

def access_error_404_page(error):
    return __error_404_page(error)

def __runApp():
    if __name__ == "__main__":
        app.run(host = 'localhost', port = '5051', debug = True)
    
def runApp():
    return __runApp()

runApp()

#test
