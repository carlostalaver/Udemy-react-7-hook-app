import { React } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoList } from '../../../components/08-useReducer/TodoList';

describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos = { demoTodos }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />)

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de tener dos <TodoListItem /> ', () => {
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

        /* para ver las props (props en plural) que tiene TodoListItem */
       // console.log( wrapper.find('TodoListItem').at(0).props() );

       //verifico que handleDelete sea una funcion, notar que use prop en singular
       //expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any('Function') ); no me funciono, tuve que usar la instruccion de abajo
       expect( typeof wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual('function');

    })
    
})