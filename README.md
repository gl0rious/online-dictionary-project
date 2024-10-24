## Setup and Run

### Prerequisites

- Docker (for running MongoDB)
- Node.js (version 18+ recommended)
- npm (Node package manager)

### Installation Steps

1. Clone the project:

    ```bash
    git clone https://github.com/gl0rious/online-dictionary-project.git
    cd online-dictionary-project
    ```

2. Navigate to the server directory:

    ```bash
    cd server
    ```

3. Install server dependencies:

    ```bash
    npm install
    ```

4. Start the MongoDB container:

    ```bash
    docker run -d --name mongodb -p 27017:27017 mongo
    ```

5. Import the initial dataset into MongoDB:

    ```bash
    npm run import-data
    ```

6. Start the backend server:

    ```bash
    npm start
    ```

   The backend server will run on port `4000`.

7. Navigate to the client directory:

    ```bash
    cd ../client
    ```

8. Install client dependencies:

    ```bash
    npm install
    ```

9. Start the frontend server:

    ```bash
    npm start
    ```

   The frontend server will run on port `3000`.

### Accessing the Application

- Open your browser and go to `http://localhost:3000/` for the application.
- For Swagger documentation, go to `http://localhost:4000/api-docs/`.
