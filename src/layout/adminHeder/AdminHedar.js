import React, {Component} from 'react';
import {Link} from "react-router-dom";
import style from '../../asset/styles/AdmiHedar.module.css';

class AdminHedar extends Component {
    render() {
        return (

            <div className={style.hedearContainer}>
                <a href="">bazgsht</a>
                <ul >
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <h1>panel mod</h1>
            </div>


        );
    }
}

export default AdminHedar;