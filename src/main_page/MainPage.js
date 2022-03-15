import React from 'react';
import classes from './MainPage.module.scss';
import navigationIcon from '../img/for_main_page/header/navigation.svg';

const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__inf}>
        <div className={classes.burger}>
          <p>Это будет для бургера</p>
        </div>
        <div className={classes.header}>
          <h2>Need for drive</h2>
          <img src={navigationIcon} alt="icon navigation" />
        </div>
        <main className={classes.main}>
          <p>Это будет main</p>
        </main>
        <footer className={classes.footer}>
          <p>Это будет fother</p>
        </footer>
      </div>

      <div className={classes.wrapper__slider}>
        <p>Это будет слайдер</p>
      </div>
    </div>
  );
};

export default MainPage;
