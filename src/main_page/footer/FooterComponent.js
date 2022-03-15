import React from 'react';
import classes from './FooterComponent.module.scss';

const FooterComponent = () => {
  return (
    <footer className={classes.footer}>
      <p>© 2016-2019 «Need for drive»</p>
      <p>8 (495) 234-22-44</p>
    </footer>
  );
};

export default FooterComponent;
