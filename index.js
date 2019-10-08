const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const expHandleBars = require('express-handlebars');
const hbs = expHandleBars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
const routes = require('./todos');


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(routes);

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/firstApp', {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log(`server started`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();