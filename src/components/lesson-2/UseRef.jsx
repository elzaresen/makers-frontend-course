import React, { useEffect, useRef, useState } from 'react';

const UseRefExample = () => {
	const inputRef = useRef({});

	useEffect(() => {
		console.log(inputRef);
	});

	const forceFocus = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input type='text' ref={ inputRef }/>
			<button onClick={forceFocus}>focus</button>
		</div>
	);
};

export default UseRefExample;