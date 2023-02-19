
const express = require('express');

const app = express();

app.use(express.json({}));
app.use(express.json({
    extended:true
}))
const androidx_appcompat_app = require('./Router/androidx_appcompat_app')



app.use('/androidx_appcompat_app', androidx_appcompat_app)

module.exports = app;