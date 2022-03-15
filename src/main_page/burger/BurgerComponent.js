import React from 'react';
import classes from './BurgerComponent.module.scss';

const BurgerComponent = () => {
    return (
        <div className={classes.burger}>
          <div className={classes.allStripe}>
            <div className={classes.stripe}></div>
            <div className={classes.stripe}></div>
            <div className={classes.stripe}></div>
          </div>
          <p className={classes.change_lang}>Eng</p>
        </div>
    )
}

export default BurgerComponent;