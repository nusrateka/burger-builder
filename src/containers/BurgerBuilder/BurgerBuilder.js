import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

const IngredientPrice ={
    salad : 100,
    bacon : 300,
    meat : 300,
    cheese : 200
}

class BurgerBuilder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                meat: 0,
                cheese: 0
            },
            totalPrice : 200
    }
    }

    addIngredientsHandler = (type) =>{
      const oldCount = this.state.ingredients[type];
      const updateCount = oldCount + 1;
      const updateIngredients = {
          ...this.state.ingredients
      };
      const additionalPrice = IngredientPrice[type];
      const oldPrice = this.state.totalPrice;
      const updatePrice = oldPrice + additionalPrice;
      updateIngredients[type] = updateCount;
      console.log(updatePrice);
      this.setState({ingredients:updateIngredients, totalPrice:updatePrice});
    }
    removeIngredientsHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updateCount = oldCount -1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        const additionalPrice = IngredientPrice[type];
        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice - additionalPrice;
        updateIngredients[type] = updateCount;
        console.log(updatePrice);
        this.setState({ingredients:updateIngredients, totalPrice:updatePrice});
    }
    render() {
        const disableKeyInfo = {
            ...this.state.ingredients
        }
        for (let key in disableKeyInfo){
            disableKeyInfo[key] = disableKeyInfo[key]<=0
            console.log(disableKeyInfo);
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addIngredients = {this.addIngredientsHandler}
                    removeIngredients = {this.removeIngredientsHandler}
                    disabled = {disableKeyInfo}
                    totalPrice = {this.state.totalPrice}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder;
