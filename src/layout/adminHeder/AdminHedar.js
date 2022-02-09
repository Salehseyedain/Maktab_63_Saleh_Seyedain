import * as React from 'react';
import {Link} from "react-router-dom";
import style from '../../asset/styles/AdmiHedar.module.css';
import vazir from '../../asset/fonts/vazir/Vazir-Bold.woff'
import logo from '../../asset/images/trobche.png'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function AdminHedar() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
        return (

            <div className={style.headerContainer}>
                <div className={style.leftHeader}>
                   بازکشت به سایت
                </div>
                <div className={style.headerCenter}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    // size="large"
                    onChange={handleChange}
                    >
                    <ToggleButton value="سفارش ها">سفارش ها</ToggleButton>
                    <ToggleButton size="large" value="موجودی قیمت">موجودی قیمت</ToggleButton>
                    <ToggleButton value="کالا ها">کالا ها</ToggleButton>
                    </ToggleButtonGroup>                    
                </div>
                <div className={style.rightHedear}>
                    <h1>کنترل پنل تربچه</h1>
                    <img className={style.logoPic} src={logo}/>
                </div>
            </div>


        );
    
}

export default AdminHedar;