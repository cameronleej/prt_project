import datetime
from csv import reader
import csv
import pyrebase

firebaseConfig = {

  "apiKey": "AIzaSyDHIs6xtIZrJ8BypJ2hZJLJcyd0lvw1u6s",

  "authDomain": "prt-project-edc2c.firebaseapp.com",

  "projectId": "prt-project-edc2c",

  "storageBucket": "prt-project-edc2c.appspot.com",

  "messagingSenderId": "977381220415",

  "appId": "1:977381220415:web:5b84e1d8ad331d73ff188a",

  "measurementId": "G-0L4RBLH27X"

}

def load_csv():
    # Open file in read mode
    file = open('cvs_test1.csv', "r")
    # Reading file
    lines = reader(file)

    # Converting into a list
    data = list(lines)
    print(data)

load_csv()

firebase = pyrebase.initialize_app(firebaseConfig)

storage = firebase.storage()
database = firebase.database()

database.child("value")
data = {"time": "01:00", "Current": "3.3333"}
database.set(data)