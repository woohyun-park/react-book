import React from 'react';
import './App.css';
import CSSModule from './CSSModule';

const App = () => {
	return (
		<>
			<CSSModule wrapper={true} inverted="inverted" something={true} />
		</>
	);
};

export default App;
