import React from 'react';
import classes from './MainPage.module.scss';
import navigationIcon from '../img/for_main_page/header/navigation.svg';

const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__inf}>
        <div className={classes.burger}>
          <p>Это</p>
        </div>
        <div className={classes.header}>
          <h3>Need for drive</h3>
          <img src={navigationIcon} alt="icon navigation" />
        </div>
        <main className={classes.main}>
          <h1>Каршеринг</h1>
          <h2>Need for drive</h2>
          <h4>Поминутная аренда авто твоего города</h4>
          <button>
             Забронировать
          </button>
        </main>
        <footer className={classes.footer}>
        <p>© 2016-2019 «Need for drive»</p>
        <p>8 (495) 234-22-44</p>
        </footer>
      </div>

      <div className={classes.wrapper__slider}>
      </div>
    </div>
  );
};

export default MainPage;
