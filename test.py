import requests
import script

response = requests.get("http://app.objco.com:8099/?account=MRHAOCUYL2&limit=6")

dico = response.json()
string = dico[0][1]
script.access_converting_data(dico[0][1])