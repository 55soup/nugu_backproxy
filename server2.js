const nugu = require('./config.json');
const express = require('express');  
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
const PORT = 442;

app.use('/shortcut/response',(req, res)=>{
  const os = req.body.action.parameters['os'].value
  const program = req.body.action.parameters['program'].value
  const action = req.body.action.parameters['action'].value
  let output = nugu.response.output
  console.log(os, program, action)
  var ment = os+ "의 "+program+ " "+action+ "단축키는 "
  
  if(os == "맥"){
      switch (program){
          case "포토샵":
            switch(action){
                case "새 문서 만들기": output = {"prompt": ment + "커맨드 N 입니다"};break;
                case "불러오기": output = {"prompt": ment + "커맨드 O 입니다"};break;
                case "저장": output = {"prompt": ment + "커맨드 S 입니다"};break;
                case "다른 이름으로 저장": output = {"prompt": ment + "커맨드 쉬프트 S 입니다"};break;
                case "포토샵 종료": output = {"prompt": ment + "커맨드 Q 입니다"};break;
                case "반전": output = {"prompt": ment + "커맨드 쉬프트 S 입니다"};break;
            }
      }
    console.log(nugu)
    nugu.response.output = output
    return res.json(nugu.response)   
  }
});

app.use('/', (req, res) => {
  res.send({'hi' : 'hi'});
})

app.listen(PORT, (err, result)=>{
    console.log("숏컷 서버 시작 : ", PORT)
})
