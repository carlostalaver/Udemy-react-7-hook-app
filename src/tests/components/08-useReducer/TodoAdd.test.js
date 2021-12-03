import { React } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Pruebas en <TodoAdd />', () => {


    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />);

    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
    })


    test('NO DEBE de llamar a la funcion handleAddTodo ', () => {
        /* En este test los que busco es llamar al submit sin haber escrito en el input text, es decir,
        como si pinchara en el boton Agregar */

        const miFormulario = wrapper.find('form').prop('onSubmit'); // esto retorna una funcion por lo que puedo llamarla
        miFormulario({ preventDefault() { } }); // le paso como arg un obj que simular ser el objeto event    

        expect(handleAddTodo).toHaveBeenCalledTimes(0); // espero que no haya sido llamado por eso es cero
    })

    test('Debe de llamar la función handleAddToDo',()=>{

        const value = 'Aprender React';
        
        //Simulo un cambio de en el input, notar que es change y no onChange xq tengo la referencia a un elemento html
        wrapper.find('input').at(0).simulate('change', {target: {name: 'description', value: value}});
        
       // console.log( wrapper.find('input').at(0).html());

       //aqui si es onSubmit porque es la propiedad que necesito ubicar en el wrapper
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault: ()=>{}});// ejecuto la funcion formSubmit
        expect(handleAddTodo).toHaveBeenCalledTimes(1);

        // expect.any(Object): con esto le digo que no importa el contenido del obj, lo que me importa es que sea un objeto
        expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object) );

        expect(handleAddTodo).toHaveBeenCalledWith( {
            id: expect.any(Number), //solo me importa que sea un numero, cualquiera.
            desc: value,
            done: false
        } );

        expect( wrapper.find('input').prop('value') ).toBe('');

        console.log(expect.any(Object));
    });



})
