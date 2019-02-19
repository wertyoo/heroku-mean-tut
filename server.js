//Install express server
const express = require('express')
const path = require('path')

const app = express()

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '/dist/heroku-meant-tut')))

app.get('/*', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '/dist/heroku-meant-tut') });
})

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080
console.log(`Listening on ${port}`)
app.listen(port)
