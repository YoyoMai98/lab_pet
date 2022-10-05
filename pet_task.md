# Lab - Connecting Spring Boot to React

In this exercise your task is to build a React application which will let you load data from a locally-hosted API and submit new entries to it. The back-end will be provided for you, your job will be to build the front end. 

The API provides a list of pets and routes to see the the entire list and add a new pet. Your application should have separate components to view the list and let the user add a new pet.

## MVP

- Make a wireframe for the site including a title, list of pets and a form. Use the wireframe to determine which components you will need to create.
- Test the API using Postman to ensure you understand the structure of the data and the requirements for the `POST` request. It exposes two routes with CORS already configured:
	- `GET` requests to `localhost:8080/pets`
	- `POST` requests to `localhost:8080/pets`
- Determine where each piece of state should sit in your application and what needs to be passed as props between components.
- Create a new React app to let the user display all pets and add a new pet
- Remember to create the database before you run the API!

## Extensions

- The API also exposes a `DELETE` route at `localhost:8080/pets/{id}`. Add a delete button for each pet to let the user delete the record.
- Revisit your HTML and ensure you are following good accessibbility practices. For example, are you minimising your use of `div`s? Are all your `label`s correctly linked to their `input`s?
- Add CSS to your application. 
