import { React } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { HomeScreem } from '../../../components/09-useContext/HomeScreem';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <HomeScreen/>', () => {

    const user = {
        name:'Carlos',
        email: 'carlos@example.com',
    };

    /* Tengo que usar mount en lugar de shallow porque necesito el componente nieto (<HomeScreem />).
        <UserContext.Provider value= {{
            user: user
        }}></UserContext.Provider>

        se lo proporciono tal cual lo definí porq de lo contrario fallara la prueba xq solo redireccionará  <UserContext.Provider></UserContext.Provider>
    */
    const wrapper = mount( 
        <UserContext.Provider value= {{
            user: user
        }}>
            <HomeScreem />
        </UserContext.Provider>
     );


    test('debe de mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    



})