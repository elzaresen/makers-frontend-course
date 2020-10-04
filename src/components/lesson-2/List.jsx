import React, { useEffect, useState } from 'react';

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems(3));
		console.log('Updated List');
	}, [getItems]);

	return (
		<ul>
			{ items.map((item, index) => <li key={'list'+index}>{ item }</li>) }
		</ul>
	);
};

export default List