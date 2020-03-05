# Node/React Sample

A node.js app which renders a page containing a React app. Typescript is used in both the client and server.

- `server` contains a simple node.js express application. It has one endpoint and also serves the static content.
- `client` contains the React.js client

## Running the app

- `make run-server` builds client javascript for production and runs the node.js server.
- `make run-client` runs the client only using `webpack-dev-server` for faster development. You should also run the server with `make run-server` or manually (`cd server && npm start`)
