# Brew Books

This is a simple Express.js REST API for managing a collection of books. It allows you to perform basic CRUD operations on book records.

## Live Project

You can interact with a live version of this API by visiting [BrewBooks Live](https://brewbooks.vercel.app/).

- Backend Application GitHub Repository: [Backend Repository](https://github.com/sudhakarbaghel/booksCrudBE).
- Frontend Application GitHub Repository: [Frontend Repository](https://github.com/sudhakarbaghel/booksCrudBE).


## API Endpoints and Usage

### 1. Get All Books

- **Endpoint**: `GET /api/books`
- **Description**: Retrieves a list of all books.
- **Usage**: Send a GET request to the endpoint to get a list of all books in the database.

### 2. Get a Book by ID

- **Endpoint**: `GET /api/books/:id`
- **Description**: Retrieves a book by its unique ID.
- **Usage**: Replace `:id` with the actual ID of the book you want to retrieve, then send a GET request to the endpoint.

### 3. Create a New Book

- **Endpoint**: `POST /api/books`
- **Description**: Adds a new book to the database.
- **Usage**: Send a POST request to the endpoint with a JSON body containing the book's information (title, author, summary).

### 4. Update a Book by ID

- **Endpoint**: `PUT /api/books/:id`
- **Description**: Updates an existing book by its unique ID.
- **Usage**: Replace `:id` with the actual ID of the book you want to update, then send a PUT request to the endpoint with a JSON body containing the updated book information (title, author, summary).

### 5. Delete a Book by ID

- **Endpoint**: `DELETE /api/books/:id`
- **Description**: Deletes a book by its unique ID.
- **Usage**: Replace `:id` with the actual ID of the book you want to delete, then send a DELETE request to the endpoint.

## Local Setup and Run

To set up and run this application locally, follow these steps:

1. Clone this repository to your local machine:
2. run npm install
3. run npm start

