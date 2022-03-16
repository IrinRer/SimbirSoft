import React from 'react';
import classes from './SliderComponent.module.scss';
import prevIcon from '../../img/for_main_page/slider/icon/Vector.svg';
import nextIcon from '../../img/for_main_page/slider/icon/Vector2.svg';

const SliderComponent = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__slider}>
        <img src={prevIcon} alt='icon previous page' />
        <div className={classes.slider__inf}>
          <h2>Бесплатная парковка</h2>
          <p>
            Оставляйте машину на платных городских парковках и разрешенных
            местах, не нарушая ПДД, а также в аэропортах.
          </p>
          <button>Подробнее</button>
        </div>
        <img src={nextIcon} alt='icon next page' />
      </div>

      <div className={classes.switches}>
          <div className={classes.switches__item}></div>
          <div className={classes.switches__item}></div>
          <div className={classes.switches__item}></div>
          <div className={classes.switches__item}></div>
        </div>
    </div>
  );
};

export default SliderComponent;
