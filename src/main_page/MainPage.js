import React from 'react';
import classes from './MainPage.module.scss';
import BurgerComponent from './burger/BurgerComponent';
import HeaderComponent from './header/HeaderComponent';
import ContentComponent from './content/ContentComponent';
import FooterComponent from './footer/FooterComponent';

const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__inf}>
        <BurgerComponent/>
        <HeaderComponent/>
        <ContentComponent/>
        <FooterComponent/>
      </div>

      <div className={classes.wrapper__slider}></div>
    </div>
  );
};

export default MainPage;
