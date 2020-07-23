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

const buildControls = (props) =>{
   return(
       <div style={style.buildControls}>
           <p>Total Price: {props.totalPrice}</p>
           {controls.map(ctrl=>(
             <BuildControl
                 key={ctrl.label}
                 label={ctrl.label}
                 added={()=>props.addIngredients(ctrl.type)
                 }
                 removed = {()=>props.removeIngredients(ctrl.type)}
                 disabled ={props.disabled[ctrl.type]}
             />
           ))}
       </div>
   )
}

export default buildControls;