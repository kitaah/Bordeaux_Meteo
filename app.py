from flask import Flask, render_template, url_for
from flask_mysqldb import MySQL
import MySQLdb.cursors
import datetime

app = Flask(__name__)

def __database_connection() :
    HEX_SEC_KEY = 'a%45#AmllpoRF2FT(5n%'
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'bordeaux_meteo'
    app.config['MYSQL_PASSWORD'] = 'ch.LOOD2.t37'
    app.config['MYSQL_DB'] = 'bordeaux_meteo'
    app.config['SECRET_KEY'] = HEX_SEC_KEY
    
def access_database_connection() :
    return __database_connection()

access_database_connection() 

mysql = MySQL(app)

@app.route("/")
def __main_page():
    date_day = datetime.datetime.now()
    y = date_day.year
    m = date_day.month
    d = date_day.day      
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM releve")
    data = cur.fetchall()
    cur.close()
    return render_template("index.html", year = y, month = m, day = d, releves = data)
def access_main_page():
    return __main_page()

@app.errorhandler(404)
def __404_page(error):
    return render_template('404.html'),404

def access_404_page():
    return __404_page()

def __runApp() :
    if __name__ == "__main__": 
        app.run(host='localhost', debug = True)
    
def runApp() :
    return __runApp()

runApp()
