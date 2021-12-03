import { renderHook, act } from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm';

describe('Prueba en useForm', () => {


    const inicialForm = {
        name: 'Carlos',
        email: 'carlos@example.com'
    };

    test('Debe de retornar un formulario por defecto ', () => {

        const { result } = renderHook(() => useForm(inicialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect( formValues ).toBe( inicialForm );
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe de cambiar el valor del formulario', () => {
        const { result } = renderHook(() => useForm(inicialForm));
        const [ , handleInputChange] = result.current;


        act( () => {
            handleInputChange({
                target: {
                    name:'name',
                    value:'Melisa'
                }
            });
        })

        const [formValue ] =  result.current;

        expect( formValue ).toEqual({...inicialForm, name:'Melisa'} );


    }); 


    
    test('Debe de re-establecer el formulario con REST', () => {
        const { result } = renderHook(() => useForm(inicialForm));
        const [ , handleInputChange, reset] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name:'name',
                    value:'Melisa'
                }
            });

            reset();
        })

        const [formValue ] =  result.current;

        expect( formValue ).toEqual( inicialForm );

    }); 

})