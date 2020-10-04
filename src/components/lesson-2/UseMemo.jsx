import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
	const [value, setValue] = useState(0);
	const [dark, setDark] = useState(false)
	const calcResult = useMemo(() => veryDifficultCalculation(value), [value])

	const toggleDark = () => {
		setDark(!dark)
	}

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const theme = {
		color: dark ? '#fff' : '#000',
		backgroundColor: dark ? '#000' : '#fff'
	}

	return (
		<div className='todo__wrapper'>
			<h1>useMemo Example</h1>
			<input className='todo__input' type='number' value={ value } onChange={ handleChange }/>
			<button className='todo__button' onClick={toggleDark}>Toggle Theme</button>
			<p style={theme}>Calculation Result: {calcResult}</p>
		</div>
	);
};

const veryDifficultCalculation = (value) => {
	for (let i = 0; i <= 1000000000; i++) {}
	return value*2
};

export default UseMemoExample