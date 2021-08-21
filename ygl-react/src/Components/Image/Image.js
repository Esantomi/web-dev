import React from 'react';

const pets = [
    {
        id: 1,
        name: '꼬깜',
        image: 'https://avatars.githubusercontent.com/u/61646760?v=4'
    },
    {
        id: 2,
        name: '깜꼬',
        image: 'https://avatars.githubusercontent.com/u/61646760?v=4'
    }
];

// 애완동물 이름 리턴 함수
function petname(a) {
    return a.name;
}
// console.log(pets.map(petname));  // ["꼬깜", "깜꼬"]

// 애완동물 사진 리턴 함수
function petimage(a) {
    return a.image;
}

// 애완동물 정보 HTML 형식 출력 함수
function Pet(props) {
    return (
        <div>
            <h1>{pets.map(petname)}</h1>
            <img src={pets.map(petimage)} width="300" height="300"></img>

            {/* <h1>{props.name + "입니다."}</h1>
            <h2>{props.age + "살입니다."}</h2>
            <h3>꼬깜 사진(우)<img src={props.image} width="300" height="300"></img>꼬깜 사진(좌)</h3> */}
        </div>
    )
}

function Image() {
    return (
        <div>
            <Pet name="꼬깜" age="2" image="https://avatars.githubusercontent.com/u/61646760?v=4"></Pet>
            <img src="https://avatars.githubusercontent.com/u/61646760?v=4"></img>
        </div>
    )
}

export default Image;