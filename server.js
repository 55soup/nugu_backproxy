const express = require('express')
const nuguApp = require('nugujs');
const app = express()
let output = {}

app.get('/recommend',  (req, res) => {
  const nugu = nuguApp(req, res);
  const menu = nugu.get(inputMenu);

  const rice = ['현미밥', '잡곡밥', '흑미밥', '찰현미밥', '보리밥'];
  const bread = ['호밀빵', '식빵', '햄치즈 샌드위치'];
  const salad = ['치킨텐더 샐러드', '아보카도 샐러드', '연어샐러드'];
  const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
  let ment;
  // let ment = "아침으로 "
  
  if(menu == '밥'){
    ment = {"prompt" : rice[Math.floor(Math.random() * rice.length)] + "어떠세요?"}
  }else if(menu == '빵'){
    ment = {"prompt" : bread[Math.floor(Math.random() * bread.length)] + "어떠세요?"}
  }else if(menu == "샐러드"){
    ment = {"prompt" : salad[Math.floor(Math.random() * bread.length)] + "어떠세요?"}
  }
  output.recommMenu = ment;
  nugu.say(output);
})

app.get('/ssmlSay',  (req, res) => {
const nugu = nuguApp(req, res);

})

app.listen(3000)