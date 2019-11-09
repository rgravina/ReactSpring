React and Spring Hello World
=

A simple React and Spring Boot app. On load, the frontend will get the message "Hello, World" from the backend and display it. This is a useful starting point for any React and Spring app.


For simplicity, the React app is served by Spring Boot. This means a JAR can be deployed with both the frontend and backend code.

There are  mocha front end unit tests, backend unit tests, and one end-to-end test using Test Cafe.
```
make test # run all client, server and E2E tests 

make run-server # Run Spring server (will also serve React app)

make run-client # Run webpack-dev-server so you can iterate on the client quickly

make deploy # Build a JAR containing the client and server code and push to Cloud Foundry
```
