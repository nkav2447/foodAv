const axios = require("axios")
const path = require('path')
const express = require('express')
const ejsMate = require('ejs-mate')
const favicon = require('serve-favicon')
const app = express();
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`port started on port ${port}`)
})