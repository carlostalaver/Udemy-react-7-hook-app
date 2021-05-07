import React, { useEffect, useReducer } from 'react'
import useForm from '../../hooks/useForm'
import './style.css'
import { todoReducer } from './todoReducer'

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const  [{ description }, handleImputChange, reset ] = useForm({description: ''});

	useEffect(() => {
			localStorage.setItem("todos", JSON.stringify(todos));
	},[todos])

	const handleSubmit =  (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return
		};

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false
		}

		const action = {
			type: 'add',
			payload: newTodo
		}

		dispatch( action );
		reset();
	}

	const handleDelete = (todoId) => {
	
			const action = {
				type: 'delete',
				payload: todoId
			}

			dispatch( action );
	}

	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId
		});
	}

	return (
		<div>
			<h1>Todo App ( {todos.length} )</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<ul className="list-group list-group-flush">
						{
							todos.map((todo, i) => (
								<li
									key={todo.id}
									className="list-group-item">
									<p className={`${ todo.done && 'complete'}`}  onClick={() => handleToggle(todo.id)}> {i + 1}.{todo.desc} </p>
									<button	className="btn btn-danger" onClick={() => handleDelete(todo.id)}>	Borrar </button>
								</li>
							))
						}
					</ul>
				</div>

				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />

					<form onSubmit={ handleSubmit }>
						<input 
							type="text"
							className="form-control"
							name="description"
							placeholder="Aprender..."
							autoComplete="off"
							value = { description }
							onChange={ handleImputChange }
						/>
					<button type="submit"	className="btn btn-outline-primary mt-1 btn-block"> Agregar </button>
					</form>

        </div>

			</div>
		</div>
	)
}