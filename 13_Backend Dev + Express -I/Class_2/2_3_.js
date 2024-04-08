// Define a port number for the server to listen on. It uses the environment variable PORT if available, or defaults to port 3000:
const PORT = process.env.PORT || 3000;

to feed the DATABASE_URL variable in the .env file into process object use dotenv library. 

npm i dotenv

-----------------------------------------

schema :
schema refers to the structure or blueprint of how data is organized and represented. It defines the logical view of the entire database, including tables, fields, relationships, constraints, and other properties. The schema essentially defines the rules and constraints that govern the data stored in the database.

key components of a database schema:
        Tables, columns, constraints, relationships, indexes, triggers, views, and stored procedures.

