// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// HTML에서 clock 가져오기
const clock = document.querySelector("h2#clock");  // 그냥 #clock도 가능

// 현재 시각을 h2#clock 내부 텍스트로 넣어 주는 함수
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");  // string으로 만든 뒤 padding을 붙인다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);