const nugu = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 442;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

// 아침 먹을 걸 물으면 밥 종류 중 랜덤으로 추천해주는 엔드포인트
app.use('/recommend/res', (req, res) => {
  const rice = ['현미밥', '잡곡밥', '흑미밥', '찰현미밥', '보리밥'];
  const bread = ['호밀빵', '식빵', '햄치즈 샌드위치'];
  const salad = ['치킨텐더 샐러드', '아보카도 샐러드', '연어샐러드'];
  const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
  const menu = req.body.action.parameters['menu'].value
  let output = nugu.response.output;
  let ment = "아침으로 "
  
  if(menu == '밥'){
    output = {"prompt" : rice[Math.floor(Math.random() * rice.length)] + "어떠세요?"}
  }else if(menu == '빵'){
    output = {"prompt" : bread[Math.floor(Math.random() * bread.length)] + "어떠세요?"}
  }else if(menu == "샐러드"){
    output = {"prompt" : salad[Math.floor(Math.random() * bread.length)] + "어떠세요?"}
  }
  console.log(nugu)
  nugu.response.output = output
  return res.json(nugu.response)
});

app.use('/recipe/res', (req, res) => {
  
});

app.use('/column/res', (req, res) => {
  let output = nugu.response.output;
  const column = [
    {"아침 왜 몸에 좋을까?" : ""}
  ]
  

});

app.listen(PORT, (err, result)=>{
    console.log("server on", PORT)
})
