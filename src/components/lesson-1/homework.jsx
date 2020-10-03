import React, { useEffect, useState } from 'react';
import Row from '../../layoutComponents/Row';

const Homework = () => {
	const [total, setTotal] = useState(0);
	const senderName = useInput();
	const senderSurname = useInput();
	const senderAddress = useInput();
	const recipientName = useInput();
	const recipientSurname = useInput();
	const recipientAddress = useInput();
	const cargoType = useRadio(
		'cargoType',
		[{ name: 'Конверт', value: 0 }, { name: 'Пакет', value: 1 }, { name: 'Коробка', value: 2 }],
		0
	);
	const deliveryType = useRadio(
		'deliveryType',
		[{ name: 'Стандарт', value: 0 }, { name: 'Экспресс', value: 1 }],
		0
	);

	useEffect(() => {
		setTotal(((cargoType.value + 1) * 40) + ((deliveryType.value + 1) * 100));
	}, [cargoType.value, deliveryType.value]);

	return (
		<main>
			<div className='form'>
				<Row label='Sender Name'>
					<input type='text' name={ 'senderName' } { ...senderName }/>
				</Row>
				<Row label='Sender Surname'>
					<input type='text' name={ 'senderSurname' } { ...senderSurname }/>
				</Row>
				<Row label='Sender Address'>
					<input type='text' name={ 'senderAddress' } { ...senderAddress }/>
				</Row>
				<Row label='Recipient Name'>
					<input type='text' name={ 'recipientName' } { ...recipientName }/>
				</Row>
				<Row label='Recipient Surname'>
					<input type='text' name={ 'recipientSurname' } { ...recipientSurname }/>
				</Row>
				<Row label='Recipient Address'>
					<input type='text' name={ 'recipientAddress' } { ...recipientAddress }/>
				</Row>
				<Row label='Cargo Type'>
					{ cargoType.render }
				</Row>
				<Row label='Delivery Tariff'>
					{ deliveryType.render }
				</Row>
				<Row label='Total'>
					{ total }
				</Row>
			</div>
		</main>
	);
};

const useInput = (initialState = '') => {
	const [value, setValue] = useState(initialState);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return {
		value, onChange
	};
};

const useRadio = (name, options, initialState) => {
	const [selected, setSelected] = useState(initialState);

	return {
		render: <div>
			{ options.map(option =>
				<label htmlFor={ name + '_' + option.value }>
					<input type='radio' name={ name }
					       id={ name + '_' + option.value }
					       value={ option.value }
					       checked={ selected === option.value }
					       onChange={ (e) => setSelected(+e.target.value) }/>
					{ option.name }
				</label>
			) }
		</div>,
		value: selected
	};
};

export default Homework;