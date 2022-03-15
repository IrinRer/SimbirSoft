import React from 'react';
import classes from './ContentComponent.module.scss';

const ContentComponent = () => {
    return (
        <main className={classes.main}>
        <h1>Каршеринг</h1>
        <h2>Need for drive</h2>
        <h4>Поминутная аренда авто твоего города</h4>
        <button>Забронировать</button>
      </main>
    )
}

export default ContentComponent; 