require('dotenv').config();
require('./database/index');
const routes = require('./routes');
const express = require('express');
const app = express();

app.use(express.json());
app.use(routes);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log('Server running on port 3000');
});