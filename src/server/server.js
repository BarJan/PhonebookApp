const { default: axios } = require('axios');
const express = require('express');

const app = express();
const port = 8000;
const table ='users';

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
    let contacts =[];
    // res.send('success!');
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
        document.write(response);
        res.send(response);
    });
});

// app.get(`/api/users/${d}`, (req, res) => {
//     let contacts =[];
//     axios.get(`https://jsonplaceholder.typicode.com/users/${d}`).then(res=>{
//         contacts = res.data.map((contact)=> new ContactModel(contact));
//         res.send(contacts);
//     });
// });