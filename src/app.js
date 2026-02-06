const express = require('express');
const { PORT, AGE } = require('./config/server.config');

const app = express();

app.listen(PORT, AGE, () => {
    console.log(`Server is listening at port ${PORT} ${AGE}`);
})