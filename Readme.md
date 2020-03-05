# Node/React Sample

A node.js app which renders a HTML page containing a React component. Typescript is used in both the client and server.

- `server` contains a simple node.js express application. It has one endpoint and also server the static content.
- `client` contains the React.js client

## Running the app

- `make run-server` builds client javascript and runs the node.js server.
- `make run-client` runs the client only using `webpack-dev-server`
