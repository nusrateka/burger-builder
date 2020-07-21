import React, {Component} from "react";
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const style = {
    breadTop : {
    height: '80px',
    width: '500px',
    background: 'linear-gradient(#bc581e, #e27b36)',
    borderRadius: '50% 50% 0 0',
    boxShadow: 'inset -15px 0 #c15711',
    margin: '2% auto',
    position: 'relative',
},
    breadBottom:{
    height: '65px',
    width: '500px',
    background: 'linear-gradient(#F08E4A, #e27b36)',
    borderRadius: '0 0 30px 30px',
    boxShadow: 'inset -15px 0 #c15711',
    margin: '2% auto',
},
    Seeds1: {
    width: '20px',
    height: '500',
    position: 'absolute',
    backgroundColor: 'white',
    left: '30%',
    top: '50%',
    borderRadius: '40%',
    transform:' rotate(-20deg)',
    boxShadow: 'inset -2px -3px #c9c9c9',
},
    seeds1: {
    content: "",
    width: '500px',
    height: '500px',
    position: 'absolute',
    backgroundColor: 'white',
    left: '-170%',
    top: '-260%',
    borderRadius: '40%',
    transform: 'rotate(60deg)',
    boxShadow: 'inset -1px 2px #c9c9c9',
},

    meat :{
    height: '20px',
    width: '500px',
    background: 'linear-gradient(#7f3608, #702e05)',
    margin: '2% auto',
    borderRadius: '15px',
},
    cheese: {
    height: '13px',
    width: '500px',
    margin: '2% auto',
    background: 'linear-gradient(#f4d004, #d6bb22)',
    borderRadius: '20px',
},
    salad: {
    height: '20px',
    width: '500px',
    margin: '2% auto',
    background: 'linear-gradient(#228c1d, #91ce50)',
    borderRadius: '20px',
},
    bacon: {
        height: '20px',
        width: '500px',
        margin: '2% auto',
        background: 'linear-gradient(#228c1d, #91ce50)',
        borderRadius: '20px',
    }
}

class BurgerIngredient extends Component {
    render() {
        let ingredient = 0;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div style={style.breadBottom}/>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div style={style.breadTop}/>
                )
                break;
            case ('meat') :
                ingredient =
                    <div style={style.meat}/>
                break;
            case ('cheese') :
                ingredient =
                    <div style={style.cheese}/>
                break;
            case ('bacon') :
                ingredient =
                    <div className={classes.Bacon}/>
                break;
            case ('salad') :
                ingredient =
                    <div style={style.salad}/>
                break;
            default: ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propType = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredient;