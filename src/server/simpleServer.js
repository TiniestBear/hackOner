var express = require('express')
var cors = require('cors')
var app = express()

app.use(express.urlencoded({
  extended: true
}));

app.use(cors())

app.get('/river', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled GET for all origins!'})
})

app.post('/river', function (req, res, next) {
  console.log(req.data);
  res.json({msg: 'This is CORS-enabled POST for all origins!'})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})
