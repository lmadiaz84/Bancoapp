import React from "react";

const  Item= ({id, descripción, imagen}) => {
    return ( 
        <article key={id}>
           <div className = 'itemcontainer'>
            <h4 className= 'itemdescripcion'> {descripción}</h4>
            <img src={imagen} alt='imagen' width='100' height='100'/>
            </div> 
        </article> 
        

    );
}
 
export default Item;