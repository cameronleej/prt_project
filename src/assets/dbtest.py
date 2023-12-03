from datetime import datetime
from pymongo import MongoClient
import random
import time

#placeholder function to generate random voltage data
#param base_voltage is the placeholder target voltage that should be read
#param range is the fluctuation range of the base voltage
#return the randomly generated voltage placeholder value
def capture_voltage(base_voltage, range):
    return base_voltage * random.uniform(*range)


connection_string = "mongodb+srv://prt-user:prt-password@prtdb.iubfrp0.mongodb.net/"

# connect to the mongoDB Atlas cluster
client = MongoClient(connection_string)

database = client['test']
collection = database['captures']

#insert data

while True:
    #get current date/time
    current_datetime = datetime.now()
    
    data = {
    #formatted as MM/DD/YYYY
    "date": current_datetime.strftime("%m/%d/%Y"),

    #formatted as HH:MM
    "time": current_datetime.strftime("%H:%M"),

    #capture voltage using base, and fluctuation range
    "voltage": round(capture_voltage(5,(0.5,3)),4)

    }

    print(data)

    #insert data as collection to mongodb
    result = collection.insert_one(data)
    print("Inserted document ID:", result.inserted_id)
    print("Inserted data:", data)
    time.sleep(10)


#close connection
client.close()
