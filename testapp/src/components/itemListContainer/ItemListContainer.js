import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import {pedirDatos} from '../PedirDatos/pedirDatos.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        pedirDatos()
        .then((resp) => { 
            setProductos(resp)
        }) 
        .catch((error) => {
            console.log(error)
        })
                
    }, []);

    return (  
        <ItemList items={productos}/>
    );
}
 
export default ItemListContainer;