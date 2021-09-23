// import React, { useState } from 'react';
// import { useEffect } from 'react/cjs/react.development';

// const getAverage = (numbers) => {
// 	console.log('getAverage');
// 	if (numbers.length === 0) return 0;
// 	const sum = numbers.reduce((a, b) => a + b);
// 	return sum / numbers.length;
// };

// const Counter = () => {
// 	const [list, setList] = useState([]);
// 	const [number, setNumber] = useState('');
// 	const [avg, setAvg] = useState(0);

// 	useEffect(() => {
// 		console.log('here');
// 		setAvg(getAverage(list));
// 	}, [list]);

// 	const onChange = (e) => {
// 		setNumber(e.target.value);
// 	};

// 	const onInsert = (e) => {
// 		const nextList = list.concat(parseInt(number));
// 		setList(nextList);
// 		setNumber('');
// 	};

// 	// const avg = useMemo(() => getAverage(list), [list]);

// 	return (
// 		<>
// 			<input value={number} onChange={onChange} />
// 			<button onClick={onInsert}>등록</button>
// 			<ul>
// 				{list.map((value, index) => {
// 					return <li key={index}>{value}</li>;
// 				})}
// 			</ul>
// 			<div>{avg}</div>
// 		</>
// 	);
// };

// export default Counter;

import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
	console.log('getAverage');
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const Counter = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');

	const onChange = (e) => {
		setNumber(e.target.value);
	};

	const onInsert = (e) => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber('');
	};

	const avg = useMemo(() => getAverage(list), [list]);

	return (
		<>
			<input value={number} onChange={onChange} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((value, index) => {
					return <li key={index}>{value}</li>;
				})}
			</ul>
			<div>{avg}</div>
		</>
	);
};

export default Counter;
