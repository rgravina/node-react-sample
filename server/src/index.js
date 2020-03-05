const express = require('express');
const path = require('path');

const app = express();

// Location of the React HTML/JS/CSS etc.
app.use(express.static(path.join(__dirname, '/../../client/dist')));

// Example API endpoint
app.get('/api/almonds', (req,res) => {
    var list = [ "honey butter", "hot and spicy chicken", "pang pang",  "tiramisu", "tteokbokki", "wasabi"];
    res.json(list);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../../client/dist/index.html'));
});

const port = process.env.PORT || 8000;
app.listen(port);

console.log('Server running on port ' + port);