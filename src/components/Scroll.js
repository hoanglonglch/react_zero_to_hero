import React from 'react';


const Scroll = (props)=>{
    return (
        <div style={{height: '800px',overflow: 'scroll'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
