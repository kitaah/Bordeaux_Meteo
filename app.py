from flask import Flask, render_template, request, url_for, redirect
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
    sql_limit_1 = "SELECT H_Releve,T_Releve FROM releve ORDER BY Id_Releve DESC LIMIT 1"
    select_last_data.execute(sql_limit_1)
    last_data = select_last_data.fetchall()
    select_last_data.close()
    select_last_10_data = mysql.connection.cursor()
    sql_limit_10 = "SELECT H_Releve,T_Releve,Date_Releve FROM releve ORDER BY Id_Releve DESC LIMIT 10"
    select_last_10_data.execute(sql_limit_10)
    last_10_data = select_last_10_data.fetchall()
    select_last_10_data.close()
    return render_template("index.html",day = d, year = y, month = m, last_data = last_data, last_10_data = last_10_data)
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

@app.route("/gestion", methods =["GET", "POST"]) 
def __data_management_page(): 
    if request.method == 'POST' :
        sensor_id = request.form["sensors-id"]  
        sensor_name = request.form["sensors-name"]  
        update_sensors = mysql.connection.cursor()
        update_sensors.execute("UPDATE sensor SET Nom_Sensor =%s WHERE Id_Sensor=%s", (sensor_name,sensor_id,))
        mysql.connection.commit()
        return redirect(url_for('__data_management_page')) 

    else :
        select_sensors = mysql.connection.cursor()
        sql_sensors = "SELECT Id_Sensor,Nom_Sensor FROM sensor"
        select_sensors.execute(sql_sensors)
        all_sensors = select_sensors.fetchall()
        select_sensors.close()
        return render_template("user.html", all_sensors = all_sensors) 
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
