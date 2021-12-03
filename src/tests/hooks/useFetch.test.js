import { renderHook, act } from '@testing-library/react-hooks'
import useFetch from '../../hooks/useFetch'

describe('Pruebas en useFetch', () => {

    test('Debe de retornar la informacion por defecto ', () => {

        const { result } = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"));

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });


/*      test('debe tener informacion deseada, loading false, error false', async () => {
       // jest.setTimeout(30000)
        const {result, waitForNextUpdate} = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"))
        await waitForNextUpdate({ timeout: 5000 });
        const {data, loading, error} = result.current
        expect(loading).toBe(false)
        expect(error).toBe(null)
        expect(data.length).toBe(1)
    }) */
 
    test('debe manejar el error', async () => {
        // la url que se responde es esta --> https://reqres.in/api/users?page=2
         const {result, waitForNextUpdate} = renderHook(() => useFetch("https://reqres.in/apiError/users?page=2"))
         await waitForNextUpdate({ timeout: 5000 });
         const {data, loading, error} = result.current

         console.log(data, loading, error)

         expect(loading).toBe(false)
         expect(error).toBe("No se pudo cargar la info")
         expect(data).toBe( null)
     })
})