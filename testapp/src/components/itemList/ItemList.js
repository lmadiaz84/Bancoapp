import React from "react";
import './ItemList.css';

export default function ItemList({bazar, precio}) {
    return (
        <div className='div_menu'>
            <li className='li_menu'>Tenemos: {bazar} Precio: {precio}</li>
        </div>
        
    )
}
