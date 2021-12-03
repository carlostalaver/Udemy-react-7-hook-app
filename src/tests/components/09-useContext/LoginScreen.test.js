import { React } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow, mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreem } from '../../../components/09-useContext/LoginScreem';


describe('Pruebas en <LoginScreen/>', () => {

    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value= {{
            setUser: setUser
        }}>
            <LoginScreem />
        </UserContext.Provider>
     );


    test('debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con elargumento esperado', () => {

        wrapper.find('button').prop('onClick')();
        expect( setUser ).toHaveBeenNthCalledWith({
            id: 1234,
            name: 'carlos'
        });
            
    })
    



})