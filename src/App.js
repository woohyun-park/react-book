import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

const App = () => {
	const [visible, setVisible] = useState(true);
	return (
		<>
			<button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				{visible ? '숨기기' : '보이기'}
			</button>
			{visible && <Counter />}
		</>
	);
};

export default App;
