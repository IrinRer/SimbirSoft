import React from 'react';
import navigationIcon from '../../img/for_main_page/header/navigation.svg';
import classes from './HeaderComponent.module.scss';

const HeaderComponent = () => {
    return (
    <div className={classes.header}>
        <h3>Need for drive</h3>
        <img src={navigationIcon} alt='icon navigation' />
    </div>
    )
}

export default HeaderComponent; 