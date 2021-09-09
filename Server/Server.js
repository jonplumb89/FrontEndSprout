const express = require('express');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3500;
const cors = require('cors');

app.use(cors());

app.use(routes);

app.get('/', (req, res) => {
    res.send('hello you hit me')
})

app.listen(port, () => {
    console.log("Server Running");
});