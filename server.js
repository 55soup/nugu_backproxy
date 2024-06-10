const nugu = require('./config.json')
const express = require('express')
const app = express()
app.use(express.json())

// 아침 먹을 걸 물으면 밥 종류 중 랜덤으로 추천해주는 엔드포인트
app.use('/recommend/res', (req, res) => {
  const rice = ['현미밥', '잡곡밥', '흑미밥', '찰현미밥', '보리밥', '비빔밥', '귀리밥', '코코넛오일밥', '찰밥', '콩밥', '단호박밥', '병아리콩밥', '팥밥', '주먹밥'];
  const bread = ['호밀빵', '식빵', '햄치즈 샌드위치', '모닝빵', '땅콩크림빵', '크로와상샌드위치', '바게트빵'];
  const salad = ['치킨텐더 샐러드', '아보카도 샐러드', '연어샐러드', '새우 샐러드', '훈제오리 샐러드', '시저 샐러드', '그린 샐러드'];
  // const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
  const menu = req.body.action.parameters['inputMenu'].value
  let output = nugu.response.output;
  let ment = "아침으로 "
  
  if(menu == '밥'){
    output =  {"prompt" : rice[Math.floor(Math.random() * rice.length)]};
  }else if(menu == '빵'){
    output =  {"prompt" : bread[Math.floor(Math.random() * bread.length)]};
  }else if(menu == "샐러드"){
    output =  {"prompt" : salad[Math.floor(Math.random() * bread.length)]};
  }
  console.log(nugu)
  nugu.response.output = output
  return res.json(nugu.response);
  // return res.send(makeJson(output));
});

// app.use('/recipe/res', (req, res) => {
  
// });

// app.use('/column/res', (req, res) => {
//   let output = nugu.response.output;
//   const column = [
//     {"아침 왜 몸에 좋을까?" : ""}
//   ]
  

// });

app.listen(8080, (err, result)=>{
    console.log("서버 시작 : ", 8080)
})


