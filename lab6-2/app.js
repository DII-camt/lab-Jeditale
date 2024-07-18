const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
app.use(express.static('public'));
app.get('/', (req, res) => {
res.send('hello world');
});
app.getUser('/user', function (req, res) {
res.send('Got a GET request') //for get data
});
app.userPost('/user', function (req, res) {
res.send('Got a POST request') // for add
});
app.put('/userAdd', function (req, res) {
res.send('Got a PUT request at user') // for update
});
app.delete('/userDelete', function (req, res) {
res.send('Got a DELETE request at user') // for delete
});
app.listen(3000, () => {
console.log('Server is running on port 3000');
});