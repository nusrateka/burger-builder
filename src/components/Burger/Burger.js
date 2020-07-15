import React from "react";
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
const burger = (props) => {
    console.log(props);
    return (
        <div className={classes.Burger}>
            <p>hh</p>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='Cheese'/>
            <BurgerIngredient type='Salad'/>
            <BurgerIngredient type='Meat'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}
export default burger;