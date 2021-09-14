import React, { Component } from "react";

class EventPractice extends Component{
    state = {
        message: "Hello",
        name: "Steven"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        alert(this.state.name + this.state.message);
        this.setState({
            name: "",
            message: ""
        })
    }

    handleKeyPress = (e) => {
        if(e.key === "Enter"){
            this.handleClick();
        }
    }

    render(){
        return (
            <>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="이름을 입력하세요"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    />
                <input
                    type="text"
                    name="message"
                    placeholder="메세지를 입력하세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button 
                    onClick={this.handleClick}
                >Submit</button>
            </>
        )
    }
}

export default EventPractice;