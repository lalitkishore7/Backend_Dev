const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();

const PORT = require('./config/server.config');
const  router = require('./routes/index.js');

// const homePingController = require('./controllers/home.controller.js');

const app = express();
// const PORT = process.env.PORT;

// app.get('/home', homePingController);
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})