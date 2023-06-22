const express = require('express')
const nuguApp = require('nugujs');
const app = express()


exports.nugu_breakfastforce = (req, res) => {
  const nugu = nuguApp(req, res); //request와 response를 넣어줌
  let output = {}; //parameter를 위한 output

  //앱 타이틀 (전역으로 사용)
  const appTitle = '아침결'
  const lastConv = randomField(
    '이제 하실말을 해 주세요.',
    '또 어떤것을 찾을까요.',
    '다음 명령을 말해주세요.'
  )

  function recommend_fuc(){
    const nugu = nuguApp(req, res);
    const menu = nugu.get(inputMenu);

    const rice = ['현미밥', '잡곡밥', '흑미밥', '찰현미밥', '보리밥'];
    const bread = ['호밀빵', '식빵', '햄치즈 샌드위치'];
    const salad = ['치킨텐더 샐러드', '아보카도 샐러드', '연어샐러드'];
    const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
    let ment;
    // let ment = "아침으로 "
    
    if(menu == '밥'){
      ment = rice[Math.floor(Math.random() * rice.length)]
    }else if(menu == '빵'){
      ment = bread[Math.floor(Math.random() * bread.length)] + "어떠세요?"
    }else if(menu == "샐러드"){
      ment = salad[Math.floor(Math.random() * bread.length)] + "어떠세요?"
    }
    output.recommMenu = ment;
    console.log(ment);
    nugu.say(output);
  }

  function recipe_fuc(){}

  const ACTION_RECOMMEND = 'action.recommend'; 
  
  switch(nugu.name()){
    case ACTION_RECOMMEND:
      return recommend_fuc()
      break;
    case ACTION_RECIPE:
      return recipe_fuc()
      break;
  }
}

app.listen(3000)