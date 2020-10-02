import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassicComponent from './components/classic';
import FunctionalComponent from './components/functional';
import {useWidth} from './components/functional';

function App() {
	const width = useWidth();
	return (
		<>
			<header className='App-header'>
				<img src={ logo } className='App-logo' alt='logo'/>
			</header>
			<main>
				<ClassicComponent/>
				<FunctionalComponent/>
			</main>
			width: {width}
		</>

	);
}

export default App;
