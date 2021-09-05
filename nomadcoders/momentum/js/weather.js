// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


const API_KEY = "02b29a529cc1def43bb20d1e3046dbbd";

function onGeoOk1(position) {               // JS가 GeolocationPosition argument를 돌려 줌
    const lat = position.coords.latitude;   // latitude
    const lng = position.coords.longitude;  // longitude
    // console.log("사는 곳 좌표 :", lat, lng);
}

function onGeoError() {
    alert("위치 파악이 안 돼요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

/* 위도, 경도를 장소로 바꿔 주기 : https://openweathermap.org/api
Current weather data, API doc의 By geographic coordinates 사용
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */

// JS에서 URL 부르기
function onGeoOk(position) {
    const lat = position.coords.latitude;   // latitude
    const lng = position.coords.longitude;  // longitude

    // 불러야 할 url + API doc의 units parameter (화씨 >> 섭씨)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    // url 가져오기 : 개발자 환경 Network에 가 보면 Type이 fetch인 항목이 보임
    fetch(url)  // fetch는 promise라 시간이 다소 소요됨 (서버 응답 시간)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const dong = document.querySelector("#weather span:last-child");
            weather.innerText = `날씨: ${data.weather[0].main}, 온도: ${data.main.temp}°C,`;  // Clouds, 26.71°C
            dong.innerText = `위치: ${data.name}`;                                            // Banpobondong
        });
}