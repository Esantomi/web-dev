// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// 8.0 Geolocation
function onGeoOk(position) {                // JS가 GeolocationPosition argument를 돌려 줌
    // console.log(position);               // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1630813893245} 출력
    const lat = position.coords.latitude;   // latitude
    const lng = position.coords.longitude;  // longitude
    console.log("사는 곳 좌표 :", lat, lng);
}

function onGeoError() {
    alert("위치 파악이 안 돼요.");
}

// getCurrentPosition()은 2개의 argument를 받음
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 위도, 경도를 장소로 바꿔 주기 : https://openweathermap.org/api


// 8.1 Weather API
