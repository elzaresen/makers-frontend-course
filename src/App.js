import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homework from './components/homework';
import {useWidth} from './components/functional';

function App() {
	const width = useWidth();
	return (
		<>
			<header className='App-header'>
				<img src={ logo } className='App-logo' alt='logo'/>
			</header>
			<main>
				<Homework/>
			</main>
		</>

	);
}

export default App;
