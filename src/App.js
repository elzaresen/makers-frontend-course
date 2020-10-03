import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component from './components/lesson-1/homework';

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
