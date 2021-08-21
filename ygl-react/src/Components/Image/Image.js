import React from 'react';

function Pet(props) {
    return (
        <div>
            <h1>{props.name + "입니다."}</h1>
            <h2>{props.age + "살입니다."}</h2>
            <h3>꼬깜 사진(우)<img src={props.image} width="300" height="300"></img>꼬깜 사진(좌)</h3>
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