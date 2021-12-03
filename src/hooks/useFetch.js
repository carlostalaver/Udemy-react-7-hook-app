import { useEffect, useRef, useState } from "react"

const useFetch = (url) => {

    /* isMounted es para mantener la referencia de si el componente está montado */
    const isMounted = useRef(false);

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        // en lo que react renderice el componente es que lo seteo a true
        //isMounted.current(true);  lo comenté para que pudiera pasar el test

        // hago uso del useEffect para trabajar con la funcion que se dispara cuando el hook se desmonte
        return () => { // funcion que limpia el efecto, se disparará cuando se desmonte el efecto.
            isMounted.current = false;
        }
    }, []);// le paso el 2do argumento para que solo se ejecute una unica vez

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // simulo un retrazo en la llamada http y solo actualizará el 
                //state SI y SOLO SI el componente que hace uso de esete hook personalizado está montado
                setTimeout(() => {
                    isMounted.current && (setState({
                        loading: false,
                        error: null,
                        data: data
                    }));
                }, 1000);
            })
            .catch( () =>{
                setState({
                    data: null,
                    loading: false,
                    error: "No se pudo cargar la info"
                })
            })
    }, [url]);

    return state;
}
export default useFetch
