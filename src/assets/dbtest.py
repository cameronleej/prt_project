
from datetime import datetime
from pymongo import MongoClient


connection_string = "mongodb+srv://prt-user:prt-password@prtdb.iubfrp0.mongodb.net/"

# connect to the mongoDB Atlas cluster
client = MongoClient(connection_string)

database = client['test']
collection = database['captures']



#get current date/time
current_datetime = datetime.now()


#inserted data field
data = {
    #formatted as MM/DD/YYYY
    "date": current_datetime.strftime("%m/%d/%Y"),

    #formatted as HH:MM
    "time": current_datetime.strftime("%H:%M"),

    "voltage": 7.493843943984

}

#insert data
result = collection.insert_one(data)


print("Inserted document ID:", result.inserted_id)
print("Inserted data:", data)


#close connection
client.close()