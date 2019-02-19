//Install express server
const express = require('express')
const path = require('path')

const app = express()
const dist_dir = __dirname + '/dist/heroku-mean-tut'

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '/dist/heroku-mean-tut')))
console.log(`DEBUG: __dirname: ${__dirname}`)

app.get('/*', function(req, res) {
  console.log(`DEBUG: Final Path: ${path.join(__dirname, '/dist/heroku-mean-tut')}`)
  res.sendFile('index.html', { root: path.join(__dirname, '/dist/heroku-mean-tut') })
})

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080
console.log(`DEBUG: Listening on ${port}`)
app.listen(port)
