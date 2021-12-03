import { React } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow( <TodoApp />);

    //creo un mock generico del localStorage, Storage es propio de los test, simplemente estoy creando una funcion en sus prototype
    Storage.prototype.setItem = jest.fn(() => {}); // defino una funcion interna que sera el cuerpo de setItem

    test('Debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();        
    })
    
    test('Debe de agregar un nuevo ToDo ', () => {
         /* mount trabaja como el shallow pero este es más completo */
       const wrapper = mount( <TodoApp /> );
        act(() =>{
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        expect( wrapper.find('h1').text().trim() ).toBe('Todo App ( 2 )');
        expect( localStorage.setItem ).toHaveBeenCalledTimes( 2 );
    });

    test('Debe eliminar un todo ', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        expect( wrapper.find('h1').text().trim() ).toBe('Todo App ( 0 )');
        
    })
    

})