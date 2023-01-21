import React from 'react';

function Navbar({ children }) {
    return (
        <header style={{backgroundColor:'yellow'}}>
            {children}
        </header>
    )
};


function Avatar ({image, name, size}){
    return (
        <div>
            <img
            src={image}
            alt={`${name}`}
            width={size}
            height={size}
            style={{borderRadius:'50%'}}
            />
        </div>
    )
}
