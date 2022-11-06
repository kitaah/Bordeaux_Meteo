from flask import Flask, render_template

app = Flask(__name__)

@app.route("/") 
def __main_page(): 
    return render_template("index.html") 
def access_main_page():
    return __main_page()

@app.route("/info") 
def __info_page(): 
    return render_template("info.html") 
def access_info_page():
    return __info_page()

@app.errorhandler(404)
def __error_404_page(error):
    return render_template('404.html'),404

def access_error_404_page():
    return __error_404_page()

def __runApp() :
    if __name__ == "__main__":
        app.run(debug = True)
    
def runApp() :
    return __runApp()

runApp()
