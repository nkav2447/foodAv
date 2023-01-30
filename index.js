const axios = require("axios")
const path = require('path')
const express = require('express')
const ejsMate = require('ejs-mate')
const favicon = require('serve-favicon')
const app = express();
const port = process.env.PORT || 3000

app.use(express.static("public"))
app.use(favicon(__dirname + '/public/favicon.ico'))

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`port started on port ${port}`)
})