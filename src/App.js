import React, {useRef} from 'react';
import ScrollBox from './ScrollBox';
import './App.css';

const App = () => {
  const scrollRef = useRef();

  const handleClick = () => {
    scrollRef.current.scrollToBottom();
  }

  return (
    <>
      <ScrollBox ref={scrollRef}/>
      <button onClick={handleClick}>
        Click to Scroll
      </button>
    </>
  );
}

export default App;

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