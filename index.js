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

app.get('/categories', async (req, res) => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    const categories = response.data.categories
    res.render('categories', { categories })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`port started on port ${port}`)
})