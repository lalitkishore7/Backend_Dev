const express = require('express');
const bodyParser = require('body-parser');

// when we call the function express we create a new express server object

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

// express middleware :-> These middlewares can be used as validation layer
function m1(req, res, next) {
    console.log("m1 is called");
    next();
}

function m2(req, res, next) {
    console.log("m2 is called");
    next();
}


app.get('/home', m1, m2, (req, res) => {
    // everytime someone calls the /home route, this callback will be called
    console.log("/home called");
    console.log(req.url, req.query);
    return res.json({ msg: "OK" }); // here we just passing the js object
})

app.get('/products/:product_id/rating/:rate', (req, res) => {
    // :id part is variable and products is static
    // :id part is your url params and overall these kind of routes are called as dynamic routes

    console.log(req.params);
    const pid = req.params.product_id;

    return res.json({ productId: pid , rating: req.params.rate});
})

app.post('/data', (req, res) => {

    console.log(req.body);
    return res.json({ msg: 'ok' });

});

app.listen(PORT, () => {
    console.log(`Express Server has started at port ${PORT}`);
})

// how can the client send custom data to the server
/*
 1. URL Params -> /products/7
 2. Query Params -> ?key1=value1&key2=value2&key2=value3
 3. Request Body
*/