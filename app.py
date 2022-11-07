from flask import Flask, render_template, request, redirect, url_for, session
import datetime

app = Flask(__name__)

@app.route("/")
def __main_page():
    return render_template("index.html") 
def access_main_page():
    return __main_page()

@app.route("/info")
def __info_page():
    date_day = datetime.datetime.now()
    y = date_day.year
    m = date_day.month
    d = date_day.day    
    return render_template("info.html", year = y, month = m, day = d) 
def access_info_page():
    return __info_page()

@app.errorhandler(404)
def __404_page(error):
    return render_template('404.html'),404

def access_404_page():
    return __404_page()

def __runApp() :
    if __name__ == "__main__": 
        app.run(host='localhost', port='8000', debug = True)
    
def runApp() :
    return __runApp()

runApp()
