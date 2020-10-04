import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component from './components/lesson-2/UseRef';

function App() {
	return (
		<>
			<header className='App-header'>
				<img src={ logo } className='App-logo' alt='logo'/>
			</header>
			<main>
				<Component/>
			</main>
		</>
	);
}

export default App;
