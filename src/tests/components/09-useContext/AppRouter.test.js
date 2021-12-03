import { React } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow, mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Puebas en <AppRouter />',()=>{

    const user = {
        name:'Carlos',
        email: 'carlos@example.com',
    };

    const wrapper = mount(
        <UserContext.Provider value= {{
            user: user
        }}>
           <AppRouter />
        </UserContext.Provider>
   )

    test('Debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    

})