This is the front end source code to my Student Management Project. 

This project allows the user to enter Their first and last name as well as an email address and adds it to a MySQL database. 
This frontend is coded with React.js and takes advantage of the built in router components to navigate between components. 

JSX is used to create handler methods that take in user input (either update or create) and send it into my studentServices component.
My studentServices class imports Axios which creates http requests and send the user info to my backend to be stored.

studentServices class also allows the use of CRUD (Create, Retrieve, Update, Delete) functions as well as retrieves the complete student database. 

Components can be found under src < components
Services can be found under src < services
This projects home page runs from src < App.js

