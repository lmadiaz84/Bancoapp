import React from 'react';
// import './button.css';

export default function Button({...props}) {
    return (
        <div className='div-button'>
            <button {...props}>
                Agregar compra
            </button>
        </div>
    )
}
