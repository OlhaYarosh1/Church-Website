import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.itemsBox}>
            <div className={classes.church}>
                Церква Покрови Пресвятої Богородиці
            </div>
            <div className={classes.eparchy}>
                Самбірсько-Дрогобицька єпархія
            </div>
            <div className={classes.ugcc}>
                Українська греко-католицька церква
            </div>
            <img className={classes.imgEparchy} src='Eparchy.png' alt=''/>
        </div>
    </div>
  )
}

export default Header;
