import React, { Component, createContext } from 'react';

export const ThemeContext = createContext('modern');

class ThemeContextProvider extends Component {
	render() {
		return (
			<ThemeContext.Provider>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;