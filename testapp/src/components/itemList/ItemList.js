import React from "react";
import './ItemList.css';
import Item from '../Item/Item.js';

export default function ItemList({items}) {
    return (
        <container className = 'itemlistcontainer'>
            <row>
                {items.map((prod)=> <Item key={prod.id} {...prod}/>)}
            </row>
        </container>
        
        
    )
}
