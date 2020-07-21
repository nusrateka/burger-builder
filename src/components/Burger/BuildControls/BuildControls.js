import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const style ={
    buildControls:{
        backgroundColor:'#CF8F2E',
        display:'flex',
        flexFlow:'column',
        alignItems:'center',
        boxShadow: '0 2px 1px #ccc',
        margin: '5%',
        padding: '10px 0'
    }
}

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
    {label: 'Bacon', type:'bacon'}
]

const buildControls = () =>{
   return(
       <div style={style.buildControls}>
           {controls.map(ctrl=>(
             <BuildControl key={ctrl.label} label={ctrl.label}/>
           ))}
       </div>
   )
}

export default buildControls;