import { React } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';

describe('Pruebas en <TodoListItem />',() => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo = { demoTodos[0] }
            index = { 0 }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />)

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de llamar a la funcion handleDelete', () => {
        /* simulo el click en el unico boton que hay en el html */
        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('Debe de llamar a la funcion handleToggle', () => {
        /* simulo el click en el unico en la etiqueta <p></p> que hay en el html */
        wrapper.find('p').simulate('click');

        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    })

    test('Debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(`1.${ demoTodos[0].desc }`);
    })


    test('Debe de tener la clase complete si el TODO.done == true', () => {
        const todo = demoTodos[0];
        todo.done = true;

        /* no le paso el resto de las props al componente porq no las necesito para esta prueba */
        const wrapper = shallow(
            <TodoListItem
                todo = { demoTodos[0] }
            />
        );

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    })
    
})