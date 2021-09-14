import React, { Component } from "react";

class ScrollBox extends Component{
    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.DOM;
        this.DOM.scrollTop = scrollHeight - clientHeight;
    }
    render(){
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            positon: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }
        return (
            <div
                style={style}
                ref={(ref) => {this.DOM=ref}}>
                <div style={innerStyle}/>
            </div>
        )
    }
}

export default ScrollBox;