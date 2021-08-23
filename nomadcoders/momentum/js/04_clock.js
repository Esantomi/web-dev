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

// Date object
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
console.log(Date);        // Date object 출력 : ƒ Date() { [native code] }
console.log(new Date());  // 한국 표준시 기준 현재 연월일시 출력

const date = new Date();          // Date 객체 생성
// console.log(date.getDate());      // 23
// console.log(date.getDay());       // 1 (월요일)
// console.log(date.getFullYear());  // 2021
// console.log(date.getHours());     // 19 (시)
// console.log(date.getMinutes());   // 53 (분)
// console.log(date.getSeconds());   // 29 (초)

// 새 Date object를 만들고, 새 object의 시, 분, 초를 출력하는 함수
function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();                   // 페이지 열자마자 함수 호출
setInterval(getClock, 1000);  // interval 설정 : 1초 간격