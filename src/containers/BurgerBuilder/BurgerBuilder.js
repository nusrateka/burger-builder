import React, {Component} from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger.js';

class BurgerBuilder extends Component{
    render() {
        return(
            <Aux>
                <Burger/>
                <p>this is burger</p>
            </Aux>
        )
    }
}
export default BurgerBuilder;
