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

app.get('/Beef', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Beef', { meals, mealsLength })
})

app.get('/Chicken', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Chicken', { meals, mealsLength })
})

app.get('/Dessert', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Dessert', { meals, mealsLength })
})

app.get('/Lamb', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Lamb', { meals, mealsLength })
})

app.get('/Miscellaneous', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Miscellaneous', { meals, mealsLength })
})

app.get('/Pasta', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Pasta', { meals, mealsLength })
})

app.get('/Pork', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Pork', { meals, mealsLength })
})

app.get('/Seafood', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Seafood', { meals, mealsLength })
})

app.get('/Side', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Side`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Side', { meals, mealsLength })
})

app.get('/Starter', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Starter', { meals, mealsLength })
})

app.get('/Vegan', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Vegan', { meals, mealsLength })
})

app.get('/Vegetarian', async function (req, res) {
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
    const meals = resCategory.data.meals
    const mealsLength = meals.length
    res.render('category/Vegetarian', { meals, mealsLength })
})

app.get('/meals/beefMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/beefMeal`, { foundMeal, yt_id })
})

app.get('/meals/chickenMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/chickenMeal`, { foundMeal, yt_id })
})

app.get('/meals/dessertMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/dessertMeal`, { foundMeal, yt_id })
})

app.get('/meals/lambMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/lambMeal`, { foundMeal, yt_id })
})

app.get('/meals/miscellaneousMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/miscellaneousMeal`, { foundMeal, yt_id })
})

app.get('/meals/pastaMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/pastaMeal`, { foundMeal, yt_id })
})

app.get('/meals/porkMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/porkMeal`, { foundMeal, yt_id })
})

app.get('/meals/seafoodMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/seafoodMeal`, { foundMeal, yt_id })
})

app.get('/meals/sideMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Side`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/sideMeal`, { foundMeal, yt_id })
})

app.get('/meals/starterMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/starterMeal`, { foundMeal, yt_id })
})

app.get('/meals/veganMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/veganMeal`, { foundMeal, yt_id })
})

app.get('/meals/vegetarianMeal/:id', async (req, res) => {
    const { id } = req.params
    const resCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
    const meals = resCategory.data.meals
    const meal = meals.find(m => m.idMeal === id)
    const idMeal = meal.idMeal
    const resMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const foundMeal = resMeal.data.meals[0]
    const yt_id = foundMeal.strYoutube.substring(32)
    res.render(`meals/vegetarianMeal`, { foundMeal, yt_id })
})


app.listen(port, () => {
    console.log(`port started on port ${port}`)
})