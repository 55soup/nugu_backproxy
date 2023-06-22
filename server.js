'use strict';
const PORT = 8080;

/**
 * [누구 템플레이트 설명]
 * 구글 cloud용으로 만들어진 단독 파일입니다.
 * exports.nugu_template 의 'nugu_template'는 설정된 이름에 맞추어서 바꾸어 주시면 됩니다.
 *
 * req.body는 SK nugu에서 들어오는 json입니다.
 */

exports.nugu_template = (req, res) => {
  const appTitle = '아침결'; // 앱 타이틀을 적어주세요

  const requestBody = req.body; //request의 body부분
  let parameters = '';

  if(requestBody.action.hasOwnProperty('parameters')){
    if(Object.keys(requestBody.action.parameters).length === 0){
      parameters = ''
    }else{
      parameters = requestBody.action.parameters// 파라메터 부분
    }
  }

  const actionName = requestBody.action.actionName; // action의 이름
  console.log('requestBody ', JSON.stringify(requestBody));

  //마이크 오픈이라고 생각하는 것을 방지하기 위한 사용자 경험용 마지막 물음
  let lastTextArr = ['다음 명령을 말해주세요', '다음 질문이 있으신가요', '이제 어떤 것을 해드릴까요.', '이제 명령을 해 주세요.', '다른 질문이 있으신가요?', '이제 질문해주세요!', '또 궁금하신게 있으신가요?']

  //디버그 용, actionName을 표시합니다
  console.log(`request: ${JSON.stringify(actionName)}`);

  let output = {};

//response json 필드. 여기서 json을 만들어준다.
  function makeJson(jsons) {
    /**
     * [makeJson 설명]
     * @json {jsons}
     * 안에는 누구로 보낼 json들이 있습니다
     * json안에는 파라메터들이 있으며, 각 파라메터는 sk nugu의 play에서 지정한
     * 이름과 동일해야 합니다.
     */
    let jsonReturn = {
      "version": "2.0",
      "resultCode": "OK",
      "directives": {
        "AudioPlayer": {
          "type": "AudioPlayer.Play",
          "audioitems": {
            "stream": {
              "url": "",
              "offsetInMilliseconds": "",
              "progressReport": {
                "progressReportDelayInMilliseconds": "",
                "progressReportIntervalInMilliseconds": ""
              },
              "token": "",
              "expectedPreviousToken": ""
            },
            "metadata": {}
          }
        }
      }

    }
    jsonReturn.output = jsons
    return jsonReturn;
  } //makeJson


  /**
   * [answername 설명]
   * @answername : json으로 보낼 파라메터 이름을 지정합니다.
   * 여기서는 answername으로 합니다.
   */
  // intent
  function action_intent(httpRes) {
    let speechText = '';

    output.answername = speechText;
    return res.send(makeJson(output));
  } //function

  //액션 선언 모음, 여기서 액션을 선언해 줍니다.
  const ACTION_TEMPLATE = 'ACTION.template';

  // Intent가 오는 부분, actionName으로 구분합니다.
  switch (actionName) {
    // 최초 실행시 오는 intent. LaunchRequest만 쓴다.
    case ACTION_TEMPLATE:
      return action_intent(res)
      //INTENT_REQUEST의 경우 하위 function에서 switch로 intent를 처리합니다.

  }

  function recommend_fuc() {
    console.log("recommend_fuc");
    const inputMenu = parameters.inputMenu.value;
    const rice = ['흰쌀밥', '현미밥', '잡곡밥', '흑미밥', '찰현미밥', '보리밥', '귀리밥'];
    const bread = ['호밀빵', '식빵', '햄치즈 샌드위치'];
    const salad = ['치킨텐더 샐러드', '아보카도 샐러드', '연어샐러드'];
    const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
    // const menu = req.body.action.parameters['inputMenu'].value
    // let output = nugu.response.output;
    // let ment = "아침으로 "
    
    if(inputMenu == '밥'){
      output = rice[Math.floor(Math.random() * rice.length)]
    }else if(inputMenu == '빵'){
      output = bread[Math.floor(Math.random() * bread.length)]
    }else if(inputMenu == "샐러드"){
      output = salad[Math.floor(Math.random() * salad.length)]
    }

    output.recommMenu = output;
    return res.send(makeJson(output));
  }

  function recipe_fuc(){

  }

  const ACTION_RECOMMEND = 'action.recommend'; //현재회차 로또
  
  switch(actionName){
    case ACTION_RECOMMEND:
      return recommend_fuc()
      break;
    // case ACTION_RECIPE:
    //   return recipe_fuc()
    //   break;
  }
}