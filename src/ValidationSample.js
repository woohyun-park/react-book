import React, {Component} from "react";
import "./ValidationSample.css";

class ValidationSample extends Component{
    state = {
        password: "",
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === "0000"
        });
        this.input.focus();
    }
    render(){
        return(
            <div>
                <input
                    ref={(ref) => this.input = ref}
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
                />
                <button
                    onClick={this.handleButtonClick}
                >Submit</button>
            </div>
        )
    }
}

export default ValidationSample;