
/* Notar que el nombre del archivo empieza con MAYUCULAS porq basicamente un context es basicamente un context
   componente
*/
import { createContext }  from 'react';


/* este UserContext es un componente de orden superior, es decir, es un componente que tiene HIJOS */
export const UserContext =  createContext(null);
