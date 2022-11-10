from flask import Flask, render_template
from flask_mysqldb import MySQL
import datetime

app = Flask(__name__)

def __database_connection():
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = '16.miRO47.7r'
    app.config['MYSQL_DB'] = 'bordeaux_meteo'
    app.config['CURSORCLASS'] = 'DictCursor'

def access_database_connection():
    return __database_connection()

access_database_connection() 

mysql = MySQL(app)

@app.route("/") 
def __main_page(): 
    date_day = datetime.datetime.now()
    d = date_day.day 
    m = date_day.month
    y = date_day.year     
    select_last_data = mysql.connection.cursor()
    sql = "SELECT H_Releve,T_Releve FROM releve ORDER BY Id_Releve DESC LIMIT 1"
    select_last_data.execute(sql)
    last_data = select_last_data.fetchall()
    select_last_data.close()
    return render_template("index.html",day = d, year = y, month = m, releves = last_data)
def access_main_page():
    return __main_page()

@app.route("/connexion") 
def __login_page(): 
    return render_template("login.html") 
def access_login_page():
    return __login_page()

@app.route("/inscription") 
def __inscription_page(): 
    return render_template("registration.html") 
def access_inscription_page():
    return __inscription_page()

@app.route("/gestion") 
def __data_management_page(): 
    return render_template("user.html") 
def access_data_management_page():
    return __data_management_page()

@app.errorhandler(404)
def __error_404_page(error):
    return render_template('404.html'),404

def access_error_404_page(error):
    return __error_404_page(error)

def __runApp():
    if __name__ == "__main__":
        app.run(host = 'localhost', port = '5050', debug = True)
    
def runApp():
    return __runApp()

runApp()
