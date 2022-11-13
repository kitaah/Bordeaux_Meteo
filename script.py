def __converting_data(string):
    CP1 = "62182233"
    CP2 = "06182660"
    CP3 = "06190484"
    id_capteur = [CP1, CP2, CP3]

    for capteur in id_capteur :
        if capteur in string :
            if capteur == "62182233":
                #afficher l'humidité
                position_hum = string.find(capteur) + 18
                valeur_hum = string[position_hum:(position_hum + 2)]
                humidité = int(valeur_hum, 16)
                #print("L'humidité de " + capteur + " est de " + str(humidité) + "%.")

            # afficher la température
            position_temp = string.find(capteur) + 14
            valeur_temp = string[position_temp : position_temp + 4]
            if valeur_temp[0:1] == '4':
                température = (int(valeur_temp[1:4], 16) / 10) * -1
            else:
                température = int(valeur_temp[1:4], 16) / 10
            #print(valeur_temp)
            #print("La température de " + capteur + " est " + str(round(température, 1)) + "°C.")

            # afficher le niveau de batterie
            position_bat = string.find(capteur)+10
            valeur_bat = string[position_bat:(position_bat + 4)]
            batterie = float.fromhex(valeur_bat)*(0.001)
            #print("La batterie de "  + capteur + " est " + str(round(batterie, 3)) + "V.")

            # afficher le signal RSSI
            position_sig = string.find(capteur) + 20
            valeur_sig = string[position_sig:(position_sig + 2)]
            signal = int(valeur_sig, 16)
            #print("Le signal RSSI de " + capteur + " est -" + str(signal) + "dBm.")

        else:
            return None

            print("Pour le capteur " + capteur + " : \nLa température est " + str(round(température, 1)) + "°C. \nL'humidité est de " + str(round(humidité, 2)) + "%. \nLa batterie est de " + str(round(batterie, 3)) + "V. \nLa signal RSSI est de -" + str(signal) + "dBm.")
            

        __saving_data(température, humidité, batterie, signal, capteur)
        
def access_converting_data(string):
    return __converting_data(string)

def __saving_data(température, humidité, batterie, signal, capteur):
    import pymysql.cursors
    db_con = pymysql.connect(host = 'localhost',
                                user = "root",
                                password = "16.miRO47.7r",
                                database = "bordeaux_meteo",
                                port = 3306,
                                cursorclass = pymysql.cursors.DictCursor)
    cur = db_con.cursor()
    sql = "INSERT INTO Releve(T_Releve, H_Releve, Batterie_Releve, SignalRSSI_Releve, Nom_Sensor) VALUES (" \
"%s, %s, %s, %s, %s"+")"
    print(température, humidité, batterie, signal)
    cur.execute(sql, (température, humidité, batterie, signal, capteur))
    rep = cur.rowcount
    db_con.commit()
    db_con.close()
    return rep

def access_saving_data(température, humidité, batterie, signal, capteur):
    return __saving_data(température, humidité, batterie, signal, capteur)