const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
// connect to DB
mongoose.connect('mongodb+srv://yusske:1234@cluster0-d5u8a.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to DB');
})
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});