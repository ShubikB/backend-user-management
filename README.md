# User Signup Server-Side Rendering

This project is a Node.js application that provides server-side rendering for user signup and login pages. It also includes a RESTful API for managing user data.

## Features

- Server-side rendering for home, login, and signup pages.
- RESTful API for CRUD operations on user data.
- JSON file-based storage for user data.

## Endpoints

### Server-Side Rendering

- `GET /` - Home page
- `GET /login` - Login page
- `GET /signup` - Signup page

### API Endpoints

- `GET /api/v1/users` - Retrieve all users
- `GET /api/v1/users/:id` - Retrieve a user by ID
- `POST /api/v1/users` - Create a new user
- `PUT /api/v1/users/:id` - Update a user by ID
- `PATCH /api/v1/users/:id` - Partially update a user by ID
- `DELETE /api/v1/users/:id` - Delete a user by ID

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/user-signup-ssr.git
   ```
2. Navigate to the project directory:
   ```bash
   cd user-signup-ssr
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:5000`.

### API Usage

You can use tools like `curl` or Postman to interact with the API endpoints. Here are some example requests:

- **Get all users:**
  ```bash
  curl -X GET http://localhost:5000/api/v1/users
  ```

- **Get a user by ID:**
  ```bash
  curl -X GET http://localhost:5000/api/v1/users/1
  ```

- **Create a new user:**
  ```bash
  curl -X POST http://localhost:5000/api/v1/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com", "age": 30, "address": {"street": "123 Main St", "city": "Anytown", "state": "CA", "zip": "12345"}}'
  ```

- **Update a user by ID:**
  ```bash
  curl -X PUT http://localhost:5000/api/v1/users/1 -H "Content-Type: application/json" -d '{"name": "Jane Doe", "email": "jane@example.com", "age": 25, "address": {"street": "456 Elm St", "city": "Othertown", "state": "NY", "zip": "67890"}}'
  ```

- **Partially update a user by ID:**
  ```bash
  curl -X PATCH http://localhost:5000/api/v1/users/1 -H "Content-Type: application/json" -d '{"age": 35}'
  ```

- **Delete a user by ID:**
  ```bash
  curl -X DELETE http://localhost:5000/api/v1/users/1
  ```

## License

This project is licensed under the MIT License.
