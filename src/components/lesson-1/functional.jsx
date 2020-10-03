import React, { useState, useContext, useEffect } from 'react';
import Row from '../../layoutComponents/Row';
import { ThemeContext } from '../../context/index2';

const FunctionalComponent = () => {
	const name = useInput('Peter');
	const surname = useInput('Peter');
	const theme = useContext(ThemeContext);
	const width = useWidth();

	return (
		<section className={ theme }>
			<h1>Functional</h1>
			<Row label={ 'Name' }>
				<input type='text' { ...name }/>
			</Row>
			<Row label={ 'Surname' }>
				<input type='text' { ...surname }/>
			</Row>
			<Row label={ 'Width' }>
				<input type='tel' value={ width }/>
			</Row>
		</section>
	);
};

export default FunctionalComponent;

export const useWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleWidthChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWidthChange);
		return () => {
			window.removeEventListener('resize', handleWidthChange);
		};
	});

	return width;
};

const useInput = (initialState) => {
	const [value, setValue] = useState(initialState);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return {
		value, onChange
	};
};