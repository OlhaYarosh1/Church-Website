import React from 'react';
import Footer from './MainPage/Footer/Footer';
import Header from './MainPage/Header/Header';
import MainPage from './MainPage/MainPage';
import classes from './PageBox.module.css';

const PageBox = () => {
    return (
        <div className={classes.box}>
          <Header/>
          <MainPage/>
          <Footer/>
        </div>
    )
}

export default PageBox;
