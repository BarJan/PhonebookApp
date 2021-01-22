const { default: axios } = require('axios');
const express = require('express');

const app = express();
const port = 8000;
const table ='users';

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
        res.json(response.data);
    });
});
