const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);  // images 요소 셋 중 하나 출력

// document.createElement() : html element 생성
const bgImage = document.createElement("img");
// console.log(bgImage);  // img 객체(=== <img>) 출력 

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);  // <img src="img/*.jpg">