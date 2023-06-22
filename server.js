const express = require('express')
const nuguApp = require('nugujs');
const app = express()
let output = {}

app.get('/textSay',  (req, res) => {
  const nugu = nuguApp(req, res);
  let value1 = "Day before yesterday I saw a rabbit, and yesterday a deer,"
  let value2 = "and today, you"
  output.value1 = value1
  output.value2 = value2
  nugu.say(output);
})

app.get('/ssmlSay',  (req, res) => {
const nugu = nuguApp(req, res);

})

app.listen(3000)