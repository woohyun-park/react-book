import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
	state = {
		color: '#000000',
	};

	getRandomColor = () => {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	};

	handleClick = () => {
		this.setState({
			color: this.getRandomColor(),
		});
		console.log(this.getRandomColor());
	};
	render() {
		return (
			<>
				<button onClick={this.handleClick}>랜덤 색상</button>
				<ErrorBoundary>
					<LifeCycleSample color={this.state.color} />
				</ErrorBoundary>
			</>
		);
	}
}

export default App;

// import React, {useRef} from 'react';
// import ScrollBox from './ScrollBox';
// import './App.css';

// const App = () => {
//   const scrollRef = useRef();

//   const handleClick = () => {
//     scrollRef.current.scrollToBottom();
//   }

//   return (
//     <>
//       <ScrollBox ref={scrollRef}/>
//       <button onClick={handleClick}>
//         Click to Scroll
//       </button>
//     </>
//   );
// }

// export default App;

// import React, { Component } from 'react';
// import ScrollBox from './ScrollBox';
// import './App.css';

// class App extends Component{
//   render(){
//     return(
//       <>
//         <ScrollBox ref={(ref) => this.scrollBox=ref}/>
//         <button onClick={() => {
//           this.scrollBox.scrollToBottom();
//         }}/>
//       </>
//     )
//   }
// }

// export default App;
