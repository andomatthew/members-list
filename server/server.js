if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const server = express();
const PORT = 3000 || process.env.PORT;

server.get('/', (req, res) => {
    res.send('Hello World from server');
});

server.listen(PORT, () => {
    console.log('server running on port ' + PORT);
});