Author: Bryce Watson

This is my full stack application for Gomoku.

To Run the application you need to start the back-end server and the front end application.

Step 1: Start the application:
    - Open a terminal window.
    - Navigate to the 'gomoku-service' directory. 
    - Run the following command: 'docker-compose up'
        (This command will start all the necessary dockerized containers, including the back-end server, front-end client, and MongoDB.)
    
Step 2: Navigate to http://localhost:3000 to access the application

Finally, to stop the application:
    - While still in the 'gomoku-service' directory, run the following command: 'docker-compose down'
        (This command will stop and remove all the containers created by docker-compose up)

Link to Postman Collection: https://www.getpostman.com/collections/af08cad4eea3bed4600d
