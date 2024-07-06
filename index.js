const config = require('config');
const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js')
const authRoute = require('./routes/auth.route.js')

const app = express()

// permet fer servir JSON
app.use(express.json());

// permet interpretar dades enviades a la URL
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);

// app.get('/', (req, res) => {
//    res.send('Hello World')
// });

mongoose.connect(config.get('mongodb.uri'))
.then(() => {
    console.log('Connected to mongodb database!');
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
})
.catch(() => {
    console.log('Connection to mongodb database failed!')
    }
);