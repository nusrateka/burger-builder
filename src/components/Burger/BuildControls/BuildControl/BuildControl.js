import React from "react";

const style ={
    buildControl : {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px 0',
},
    button: {
    display: 'block',
    font: 'inherit',
    padding: '5px',
    margin: '0 5px',
    width: '80px',
    border: '1px solid #AA6817',
    cursor: 'pointer',
    outline: 'none',
},

    label: {
    padding: '10px',
    fontWeight: 'bold',
    width: '80px',
}
}

const buildControl = (props) => {
    return (
        <div style={style.buildControl}>
            <div style={style.label}>{props.label}</div>
            <button style={style.button}>Less</button>
            <button style={style.button}>More</button>
        </div>
    )
}

export default buildControl;