import React from 'react';
import Header from './MainPage/Header/Header';
import classes from './PageBox.module.css';

const PageBox = () => {
    return (
        <div className={classes.box}>
          <Header/>
        </div>
    )
}

export default PageBox;
