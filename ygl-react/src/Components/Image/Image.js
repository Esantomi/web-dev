import React from 'react';

function Friend(props) {
    return <h1>{props.name + "입니다."}</h1>
}

function Image() {
    return (
        <div>
            <Friend name="꼬깜"></Friend>
            <img src="https://avatars.githubusercontent.com/u/61646760?v=4"></img>
        </div>
    )
}

export default Image;