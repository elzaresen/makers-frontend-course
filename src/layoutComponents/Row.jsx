import React from 'react';

const Row = ({ label, children }) => {
	return (
		<div className='row'>
			<label htmlFor=''>{ label }</label>
			{ children }
		</div>
	);
};

export default Row