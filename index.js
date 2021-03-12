const express = require('express');
const app = express();
const path = require('path');

let indexRouter = require('./routes/index');

//by default express will look in the views folder for the views but we'll specify here
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //now express knows that ejs will be used to create our view template

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/new', (req, res) => {
    res.render('form');
} )

// app.get('/', (req, res) => {
//     res.send("its working");
// })

app.listen(process.env.PORT || 8000, () => console.log("port has begun listening..."));