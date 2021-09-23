import React from 'react';
import { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0,
			fixedNumber: 0,
		};
	}
	render() {
		const { number, fixedNumber } = this.state;
		const increase = () => {
			this.setState(
				(prevState) => {
					return {
						number: prevState.number + 1,
					};
				},
				() => {
					this.setState((prevState) => {
						return {
							number: prevState.number + 1,
						};
					});
				}
			);
		};
		return (
			<>
				<h1>{number}</h1>
				<h1>{fixedNumber}</h1>
				<button onClick={increase}>+1</button>
			</>
		);
	}
}

export default Counter;
