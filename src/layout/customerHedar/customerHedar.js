import React, {Component} from 'react';
import {GrUserManager, RiShoppingCart2Line} from "react-icons/all";
import style from '../../asset/styles/CustomerHedar.module.css';


class CustomerHedar extends Component {
    render() {
        return (
            <div className={style.hedearContainer}>
                <div className={style.leftHedear}><span> <RiShoppingCart2Line size={50}/></span><span><GrUserManager/></span></div>
                <div className={style.rightHedear}><h1>name of </h1> <span></span></div>
            </div>
        );
    }
}

export default CustomerHedar;