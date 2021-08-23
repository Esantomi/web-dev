// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// 5.0 Intervals
// Interval: 일정 간격으로 발생

// HTML에서 clock 가져오기
const clock = document.querySelector("h2#clock");  // 그냥 #clock도 가능

// 예제용 함수
function sayHello() {
    console.log("Hello");
}

// interval 설정 (반복할 함수명, 시간 간격(ms))
setInterval(sayHello, 5000);  // 5초마다 콘솔에 Hello 출력


// 5.1 Timemouts and Dates
// Timeout : 특정 시각 이후 발생

// Timeout 설정 (반복할 함수명, 시간 간격(ms))
setTimeout(sayHello, 5000);  // 5초 후에 콘솔에 Hello 1번 출력

