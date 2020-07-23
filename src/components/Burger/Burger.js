import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
const style ={
    burgerStyle:{
        width: '100%',
        margin: 'auto',
        height: '300px',
        overflow: 'scroll',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    }
}
const burger = (props) => {
    let getIngredients = Object.keys(props.ingredients).map(value=>{
        return [...Array(props.ingredients[value])].map((_,i)=>{
            return <BurgerIngredient key={value + i} type={value}/>
        });
    }).reduce((arr, el) => {return arr.concat(el)}, []);
    //reducer is an action to get one value
    if (getIngredients.length ===0){
        getIngredients = <p>Please add some ingredients!</p>
    }
    return (
        <div style={style.burgerStyle}>
            <BurgerIngredient type='bread-top'/>
            {getIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}
export default burger;