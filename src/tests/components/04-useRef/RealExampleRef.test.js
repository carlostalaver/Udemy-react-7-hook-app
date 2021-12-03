import { React } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';




describe('Pruebas en <RealExampleRef />', () => {

        beforeEach( () => {

        })

        const wrapper = shallow( <RealExampleRef /> )

        test('debe mostrarse correctamente ', () => {
            expect( wrapper ).toMatchSnapshot();
            expect( wrapper.find('MultipleCustomHook').exists() ).toBe( false );
        })
        
        test('debe mostrarse el componente  <RealExampleRef />', () => {
            wrapper.find('button').simulate('click');
            expect( wrapper.find('MultipleCustomHook').exists() ).toBe( true );
            
        })

})