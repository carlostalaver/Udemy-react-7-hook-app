import { useEffect, useRef, useState } from "react"

const useFetch = (url) => {

    /* isMounted es para mantener la referencia de si el componente está montado */
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        
        return () => { // funcion que limpia el efecto, se disparará cuando se desmonte el efecto.
            isMounted.current = false;
        }
    }, []);// le paso el 2do argumento para que solo se ejecute una unica vez

    useEffect(() => {

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // simulo un retrazo en la llamada http
                setTimeout(() => {
                    isMounted.current && (setState({
                        loading: false,
                        error: null,
                        data: data
                    }));
                }, 4000);
            })
    }, [url]);

    return state;
}
export default useFetch
