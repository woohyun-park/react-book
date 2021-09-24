import React from 'react';
import './SassComponent.scss';

function SassComponent({ children }) {
	return (
		<div className="SassComponent">
			<div className="box red" />
			<div className="box blue" />
		</div>
	);
}

export default SassComponent;
