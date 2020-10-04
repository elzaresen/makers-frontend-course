import React, { useState, useReducer } from 'react';

const CREATE_TODO = 'CREATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state, action) => {
	switch (action.type) {
		case CREATE_TODO:
			return {
				...state,
				todos: [...state.todos, newToDo(action.data.text)]
			}

		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.data.id) {
						return { ...todo, completed: !todo.completed };
					}
					return todo;
				})
			}

		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.data.id)
			}

		default:
			return state
	}
};

const newToDo = (text) => {
	return {
		id: new Date().getTime(),
		text,
		completed: false
	};
};

const UseReducerExample = () => {
	const [state, dispatch] = useReducer(reducer, { todos: [] });

	const [text, setText] = useState('');

	const createToDo = (e) => {
		e.preventDefault();
		dispatch({ type: CREATE_TODO, data: { text } });
		setText('');
	};

	return (
		<div className='todo__wrapper'>
			<h1>useReducer Example</h1>
			<form onSubmit={ createToDo }>
				<input className='todo__input' type='text' value={ text }
				       onChange={ (e) => setText(e.target.value) }/>
			</form>
			<ul className='todo__list'>
				{ state.todos.map(item =>
					<li className={ `todo__item ${ item.completed ? 'todo__item--completed' : '' }` }
					    key={ item.id }>
						{ item.text }
						<div className='todo__item__actions'>
							<button className='todo__button todo__button--toggle'
							        onClick={ () => dispatch({ type: TOGGLE_TODO, data: { id: item.id } }) }>
								Toggle
							</button>
							<button className='todo__button todo__button--delete'
							        onClick={ () => dispatch({ type: DELETE_TODO, data: { id: item.id } }) }>
								Delete
							</button>
						</div>
					</li>
				) }
			</ul>
		</div>
	);
};

export default UseReducerExample;