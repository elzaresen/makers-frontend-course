import React, { useCallback, useState } from 'react';
import List from './List';

const UseCallbackExample = () => {
	const [value, setValue] = useState(0);
	const [dark, setDark] = useState(false);

	const getItems = useCallback((inc = 0) => {
		return [value + inc, value + inc + 1, value + inc + 2];
	}, [value]);

	const toggleDark = () => {
		setDark(!dark);
	};

	const handleChange = (e) => {
		setValue(+e.target.value);
	};

	const theme = {
		color: dark ? '#fff' : '#000',
		backgroundColor: dark ? '#000' : '#fff'
	};


	return (
		<div className='todo__wrapper' style={theme}>
			<h1>useMemo Example</h1>
			<input className='todo__input' type='number' value={ value } onChange={ handleChange }/>
			<button className='todo__button' onClick={ toggleDark }>Toggle Theme</button>
			<List getItems={ getItems }/>
		</div>
	);
};


export default UseCallbackExample;