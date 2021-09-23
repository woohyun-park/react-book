import React from 'react';

const Sample = () => {
	let has_name = undefined;
	let name = undefined;
	return <>{(has_name && name) || 'UNDEFINED'}</>;
};

export default Sample;
