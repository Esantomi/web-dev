// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter3.html/

// 서버 구축하기 - http basic


// server.js
// 1. 서버 사용을 위해서 http 모듈을 http 변수에 담는다. (모듈과 변수의 이름은 달라도 된다.) 
var http = require('http');  // require: 외부 모듈 import


// 2. http 모듈로 서버를 생성한다.
//    아래와 같이 작성하면 서버를 생성한 후, 사용자로부터 http 요청이 들어오면 function 블럭 내부의 코드를 실행해서 응답한다.

// http 모듈의 createServer 함수로 서버 생성
var server = http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type':'text/html'});  // 아래 주석 참고
    response.end('Hello node.js!');                         // 포트 들어가면 뜨는 메시지
    // end( ) 함수에 컨텐츠를 전달하면 브라우저는 해당 컨텐츠를 받은 후 html 형태로 화면에 출력해 준다.

});

    /* function(request,response){ } 은 함수명이 없는데, 이런 패러미터는 이벤트 발생 시 callback된다.
    즉, 생성된 서버로 어떤 요청이 들어오면 function 내부의 로직이 실행되면서
    function 내부에 선언한 request와 response라는 이름으로 사용할 수 있는 값을 넘겨준다.
    
    response 객체는 웹브라우저 또는 앱에서 서버로 요청이 있을 때 요청한 사용자 측으로 값을 반환할 때 사용하는 객체다.
    반대로 request 객체는 사용자가 요청한 내용이 담겨 있는 객체다. */

    /* writeHead()의 숫자 200은 웹 서버에 들어오는 요청에 대해 정상적으로 값을 리턴할 때 사용하는 http 상태 코드이다.
    즉, 오류가 없이 서버에서 정상적으로 처리가 완료되면 200 코드를 담아서 응답 헤더를 설정해 주게 된다.
    응답 헤더는 서버로부터 반환되는 값에 대한 기본 정보를 담고 있는 것이다.

    브라우저를 예로 들면 화면에는 뜨지 않지만 브라우저는 header 값을 보고
    서버에서 넘어온 값이 어떤 형태인지 파악하고 실제 값을 header에 세팅된 설정에 맞게 보여 주게 된다. */

    /* {'Content-Type' : 'text/html'} 값은 서버 측에서 보내주는 컨텐츠의 타입이 텍스트고, html 형태라는 것을 정의한다.
    Content-Type 이라는 키값 외에도 Authorization, Cookie 등의 다양한 값들을 지정할 수 있다. */


// 3. listen 함수로 8080 포트를 가진 서버를 실행한다.
// 서버가 실행된 것을 콘솔창에서 확인하기 위해 'Server is running...' 로그를 출력한다.
server.listen(8080, function(){ 
    console.log('Server is running...');
});

// cmd에 node 02_http_basics로 실행 후 http://localhost:8080 접속