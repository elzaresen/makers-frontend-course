import React, { Component } from 'react';
import Row from '../layoutComponents/Row';
import { ThemeContext } from '../context';

class ClassicComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Peter',
			surname: 'Parker',
			width: window.innerWidth
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSurnameChange = this.handleSurnameChange.bind(this);
	}

	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSurnameChange = (e) => {
		this.setState({ surname: e.target.value });
	};

	handleWidthChange = (e) => {
		this.setState({ width: window.innerWidth });
	};

	componentDidMount() {
		window.addEventListener('resize', this.handleWidthChange)
		document.title = this.state.name + ' ' + this.state.surname
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		document.title = this.state.name + ' ' + this.state.surname
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWidthChange)
	}

	render() {
		return (
			<ThemeContext.Consumer>
				{ theme => <section className={ theme }>
					<h1>Classic</h1>
					<Row label={ 'Name' }>
						<input type='text' value={ this.state.name } onChange={ this.handleNameChange }/>
					</Row>
					<Row label={ 'Surname' }>
						<input type='text' value={ this.state.surname } onChange={ this.handleSurnameChange }/>
					</Row>
					<Row label={ 'Width' }>
						<input type='tel' value={ this.state.width }/>
					</Row>
				</section> }
			</ThemeContext.Consumer>
		);
	}
}

export default ClassicComponent;