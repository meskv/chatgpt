# About Project
This project is a clone of [chatgpt](https://chat.openai.com/). The project is divided into two parts: the client and the server. The client is a React app that allows the user to interact with the chatbot. The server is a NodeJs app that handles the requests to the Openai API.

## Installation
### Server
* install the dependencies
```bash
npm install
```

### Client
* install the dependencies
```bash
cd client
npm install
```
* create a .env file in the root directory and add the following environment variables

```bash
OPENAI_API_KEY: The API key for the Openai API.
PORT: The port on which the server will run.
MONGO_URI: The URI for the MongoDB database.
DB_NAME: The name of the database in the MongoDB database.

```

* start the client
```bash
cd client
npm run dev -- --host
```