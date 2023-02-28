import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <hr className={classes.footerUnderline}/>
            <div className={classes.addressTitle}>
                Адреса:
            </div>
            <hr className={classes.addressUnderline}/>
            <div className={classes.address}>
                вул. Дрогобицька, 12/a,<br/>м. Трускавець, Львівська область,<br/>82200 Україна
            </div>
            <div className={classes.jurisdictionTitle}>
                Юрисдикція:
            </div>
            <hr className={classes.jurisdictionUnderline}/>
            <div className={classes.jurisdiction}>
                Львівська митрополія,<br/>Самбірсько-Дрогобицька єпархія
            </div>
            <div className={classes.phoneTitle}>
                Телефон та E-mail:
            </div>
            <hr className={classes.phoneUnderline}/>
            <div className={classes.phone}>
                (097) 502 1104,<br/>info@info
            </div>
            <img className={classes.imgEparchy} src='Eparchy.png' alt=''/>
        </div>
    )
}

export default Footer;
