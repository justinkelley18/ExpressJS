const express = require('express');
const path = require('path');
let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

// app.get('/', (req, res) => {
//     res.send('Hello Justin');
// });

app.use(express.static(path.join(__dirname, '../public')));


// app.get('/order/:name', (req, res) => {
//     let name = req.params.name;
//     let email = req.query.email;
//     res.send(`Your Name is ${name} and your Email is ${email}`);

// });

app.listen(3000);