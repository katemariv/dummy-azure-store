var Db = require('./dboperations');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    next();
});

router.route('/products').get((request, response) => {
    Db.getProducts().then((data) => {
        response.json(data[0]);
    })
})

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Products API is runnning at ' + port);