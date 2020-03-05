# Node/React Sample

A node.js app which renders a HTML page containing a React component.

`server` contains a node.js espress application. It has one endpoint and also servers the static content.
`client` contains the React.js client

## Running the app

`make run-server` builds client javascript and runs the node.js server
`make run-client` runs the client only using `webpack-dev-server`
