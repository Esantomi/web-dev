// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter11.html

// Streaming 서비스


// node.js는 이벤트 Loop 기반의 비동기 처리를 지원하기 때문에 대용량 파일을 구간별로 작게 나누어서 처리하는 작업에 강점을 갖는다.
// 데이터 전체를 다 읽거나 쓰지 않아도 중간에 처리할 수 있도록 해 주는 것이 stream이다.


// streaming_movie.js
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request,response){

//   var parsedUrl = url.parse(request.url);  // deprecated
  var parsedUrl = new URL('http://localhost'+request.url);
  var resource = parsedUrl.pathname;
  console.log('resource='+resource);

  var resourcePath = '.'+resource;
  console.log('resourcePath='+resourcePath);

  // html 페이지 요청이 들어왔을 경우는 텍스트 파일 처리
  if(resource.indexOf('/html/') == 0){
    fs.readFile(resourcePath, 'utf-8', function(error, data) {
      if(error){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server '+error);
      }else{
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
      }
    });

  }else if(resource.indexOf('/movie/') == 0){
    // 1. stream 생성
    var stream = fs.createReadStream(resourcePath);
    // 2. 잘게 쪼개진 stream이 몇 번 전송되는지 확인하기 위한 count
    var count = 0;
    // 3. 잘게 쪼개진 data를 전송할 수 있으면 data 이벤트 발생 
    stream.on('data', function(data) {
      count = count + 1;
      console.log('data count='+count);
      // 3.1. data 이벤트가 발생되면 해당 data를 클라이언트로 전송
      response.write(data);
    });

    // 4. 데이터 전송이 완료되면 end 이벤트 발생
    stream.on('end', function () {
      console.log('end streaming');
      // 4.1. 클라이언트에 전송 완료를 알림
      response.end();
    });

    // 5. 스트림 도중 에러 발생시 error 이벤트 발생
    stream.on('error', function(err) {
      console.log(err);
      // 5.2. 클라이언트로 에러 메시지를 전달하고 전송 완료
      response.end('500 Internal Server '+err);
    });
  }else{
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 Page Not Found');
  }

});

server.listen(80, function(){
    console.log('Server is running...');
});


// http://localhost/html/movie_player.html 브라우저로 접속

/* 콘솔 출력 :
resource=/html/movie_player.html
resourcePath=./html/movie_player.html
resource=/html/movie/wildlife.mp4
resourcePath=./html/movie/wildlife.mp4 */