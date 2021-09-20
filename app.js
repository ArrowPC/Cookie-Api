const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => console.log(`api listening at http://localhost:${port}`))


app.get('/api/cookie', (req, res) => {
    try {
        const cookies = require("./cookie.json");
        const cookie = cookies[Math.floor(Math.random() * cookies.length)];        
        res.status(200).send({cookie});
    } catch (error) {
        res.status(500).send({ 'error' : error});    
    }
});