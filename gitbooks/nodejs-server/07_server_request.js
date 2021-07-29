// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter8.html

// URL 다루기


/* http://www.naver.com/my_page/firstpage?section=15 (전체 URI)
[ http://www.naver.com ] [ /my_page/firstpage ] [ ?section=15 ]
        도메인                  서버URI           쿼리스트링   */

// url 모듈을 사용해서 node.js 서버로 들어온 자원(주소) 요청을 처리하는 방법
var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){

  // 1. 실제 요청한 주소 전체를 콘솔에 출력  
  console.log(request.url);                   // localhost:8080/address로 들어갔다면 '/address'
  // var parsedUrl = url.parse(request.url);  // deprecated
  var parsedUrl = new URL('http://localhost:8080'+request.url);

  // 2. parsing된 url 중에 서버URI에 해당하는 pathname만 따로 저장
  var resource = parsedUrl.pathname;
  console.log('resource path=%s', resource);  // localhost:8080/address로 들어갔다면 'resource path=/address'

  // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달
  if(resource == '/address'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('서울특별시 구구 9동 999');
  }else if(resource == '/phone'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('02-3545-1237');
  }else if(resource == '/name'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Kokam');
  }else{
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 Page Not Found');
    // 404: 서버와 통신할 수는 있지만 서버가 요청한 바를 찾을 수 없다는 것을 가리키는 HTTP 표준 응답 코드
  }

});

// 4. 서버 포트 80번으로 변경 (안 돼서 8080 포트로 변경)
server.listen(8080, function(){
    console.log('Server is running...');
});


// 서버URI 요청 및 확인

/* http://localhost:8080 접속 시 '404 Page Not Found' 표시

요청한 자원이 소스코드에서 정의한 /address , /phone , /name 문자열에 해당되지 않기 때문에
페이지가 없다는 메시지가 뜨는 것이므로 http://localhost:8080/address 경로로 접속해 본다.
한글이 깨지긴 하지만 address에 해당하는 값이 뜬다.

위와 같이 클라이언트에서 요청한 url을 parsing하여 요청 자원별 처리를 해 줄 수 있다. */