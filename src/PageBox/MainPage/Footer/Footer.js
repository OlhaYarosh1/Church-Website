import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <hr/>
            <div className={classes.addressTitle}>
                Адреса:
            </div>
            <div className={classes.address}>
                Церква Покрови Пресвятої Богородиці<br/>вул. Дрогобицька, 12/а<br/>м. Трускавець, Львівська обл.<br/>82200 Україна
            </div>
            <img className={classes.imgEparchy} src='Eparchy.png' alt=''/>
        </div>
    )
}

export default Footer;
