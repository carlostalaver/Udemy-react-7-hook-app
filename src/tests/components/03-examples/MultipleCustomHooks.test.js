import { renderHook, act } from '@testing-library/react-hooks'
import { React } from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHook } from '../../../components/03-examples/MultipleCustomHook';
import useFetch from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');



describe('Pruebas en <MultipleCustomHooks />', () => {

        beforeEach( () => {
            useCounter.mockReturnValue({
                counter: 10,
                increment: () => {}
            })
        })


    test('debe de mostrarse correctamente ', () => {

        /* Ojo que sete hook ya está probado en otro archivo test, en estas pruebas solo me interesa simular la respuesta
           de useFetch que lo hago con jest.mock('../../../hooks/useFetch') */
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHook />);
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostrar la informacion ', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'John',
                quote: 'Hola mundo'
            }],
            loading: false,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHook />);

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hola mundo');
        expect( wrapper.find('footer').text().trim() ).toBe('John');

        // console.log( wrapper.html() ); retorna el hatml que esta contenido en el wrapper


    })

})