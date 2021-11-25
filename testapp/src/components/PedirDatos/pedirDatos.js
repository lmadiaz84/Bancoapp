import {productos} from '../../img/productos';

export const pedirDatos = () => {
    return new Promise ((  
        resolve) =>{
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        }
    );
}
 