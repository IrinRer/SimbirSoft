import React from 'react';
import navigationIcon from '../../img/for_main_page/header/navigation.svg';
import classes from './HeaderComponent.module.scss';

const HeaderComponent = () => {
  return (
    <div className={classes.header}>
      <h3>Need for drive</h3>
      <div className={classes.header__navigation}>
        <img src={navigationIcon} alt='icon navigation' />
        <p>Ульяновск</p>
      </div>
    </div>
  );
};

export default HeaderComponent;
