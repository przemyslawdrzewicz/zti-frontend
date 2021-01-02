// const { prototype } = require('core-js/fn/weak-map')
// const express = require('express')
// const port = process.env.PORT || 8080
// const app = express()

// app.use(express.static(__dirname + "/dist"))
// app.get(/.*/, function(req, res) {
//     res.sendfile(__dirname + "/dist/index.html")
// })

// app.listen(port)
// console.log("Server stareted...")

var express = require('express')
var history = require('connect-history-api-fallback')
var path = require('path')
var serveStatic = require('serve-static')


var app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
// Use a fallback for non-root routes (required for Vue router)
//   NOTE: History fallback must be "used" before the static serving middleware!

// var cors = require('cors')

// app.use(cors()) // Use this after the variable declaration
app.use(history({
    // OPTIONAL: Includes more verbose logging
    verbose: true
}))

// Serve static assets from the build files (images, etc)
app.use(serveStatic(path.join(__dirname, '/dist')))

var port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('Server started at http://localhost:5000')
})