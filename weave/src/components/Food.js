import React, { Component } from 'react';

class Food extends Component {
    render() {
        return (
            <div className="contbox">
                <div className="foodimg"></div>
                <h1> 먹부림 그룹</h1>
                <p>
                    미식가 여러분 환영합니다~!
                </p>
            </div>
        );
    }
}

export default Food;