import React from 'react';
import './style.css';

const CardSobre = (props)=>{
    return(
        
        <main className="main_produtos">
            {props.children}
        </main>
        
    )
}

export default CardSobre