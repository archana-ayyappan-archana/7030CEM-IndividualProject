# Bookstore API

This is a simple RESTful API for managing a bookstore. The API allows you to perform CRUD operations on books.

## Endpoints

- `GET /books` - Retrieve a list of all books
- `GET /books/:id` - Retrieve details of a specific book
- `POST /books` - Add a new book
- `PUT /books/:id` - Update details of a specific book
- `DELETE /books/:id` - Delete a specific book

## Setup

1. Clone the repository.
2. Install dependencies:
    ```
    npm install
    ```
3. Start the server:
    ```
    npm start
    ```

## Environment Variables

- `DATABASE_URL` - The URL for the database connection.
