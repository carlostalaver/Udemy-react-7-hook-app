import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';

describe('Prueba en useCounter', () => {

    test('Debe  de retornar valores por defecto ', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Debe  de tener el counter en 100 ', () => {

        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('Debe  de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        /* Esta funcion act permite ejecutar funciones que estan definidas dentro de hooks,
           notar ques la estoy importando de @testing-library/react-hooks
         */
        act(() => {

            increment();

        });

        expect(result.current.counter).toBe(101);
    });

    test('Debe  de decrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        /* Esta funcion act permite ejecutar funciones que estan definidas dentro de hooks,
           notar ques la estoy importando de @testing-library/react-hooks, las funciones dentro 
           de act se ejecutan una sola vez, es decir si colocara;
           decrement();
           decrement();
           solo se ejecutar la primer instruncion 
         */
        act(() => {

            decrement();

        });

        expect(result.current.counter).toBe(99);
    });

    test('Debe  de decrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        /* Esta funcion act permite ejecutar funciones que estan definidas dentro de hooks,
           notar ques la estoy importando de @testing-library/react-hooks
         */
        act(() => {

            decrement();

        });

        expect(result.current.counter).toBe(99);
    });

    test('Debe  de resetear el counter, regresar 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;

        /* Esta funcion act permite ejecutar funciones que estan definidas dentro de hooks,
           notar ques la estoy importando de @testing-library/react-hooks
         */
        act(() => {

            decrement();
            reset();

        });

        expect(result.current.counter).toBe(100);
    });






})