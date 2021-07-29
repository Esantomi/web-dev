// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter10.html

// Binary 파일(image, mp3, mov 등) 처리


// 소스코드를 작성하기 전에 npm install mime으로 mime을 알아내기 위한 모듈을 설치
// npm install mime

// images 폴더에 사용할 이미지 3개 저장해 둠 (kokam noidea 사진)


// server_request_binary.js
var http = require('http');
var url = require('url');
var fs = require('fs');

// 1. mime 모듈 추가. 서비스하려는 파일의 타입을 알아내기 위해서 필요
var mime = require('mime');

var server = http.createServer(function(request,response){

//   var parsedUrl = url.parse(request.url);  // deprecated
  var parsedUrl = new URL('http://localhost'+request.url);
  var resource = parsedUrl.pathname;

  // 2. 요청한 자원의 주소가 '/images/' 문자열로 시작하면
  if(resource.indexOf('/images/') == 0){
    // 3. 첫글자인 '/' 를 제외하고 경로를 imgPath 변수에 저장
    var imgPath = resource.substring(1);
    console.log('imgPath='+imgPath);      // imgPath=images/
    // 4. 서비스 하려는 파일의 mime type
    var imgMime = mime.getType(imgPath);  // lookup -> getType으로 변경됨
    console.log('mime='+imgMime);         // mime=image/jpeg

    // 5. 해당 파일을 읽어 오는 데 두 번째 인자인 인코딩(utf-8) 값 없음
    fs.readFile(imgPath, function(error, data) {
      if(error){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server '+error);
      }else{
        // 6. Content-Type에 4번에서 추출한 mime type을 입력
        response.writeHead(200, {'Content-Type':imgMime});
        response.end(data);
      }
    });
  }else{
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 Page Not Found');
  }
});

server.listen(80, function(){
    console.log('Server is running...');
});


/* 500 Internal Server Error: EISDIR: illegal operation on a directory, read가 뜬다면?
localhost/images/ 뒤에 파일명(noidea.jpg) 넣어서 브라우저에 입력해 볼 것! */