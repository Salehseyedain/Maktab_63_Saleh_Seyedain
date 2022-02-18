import * as React from 'react';
import style from '../../asset/styles/Comiditi.module.css'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import mobile from "../../asset/images/iphone13.jpg"
function Commoditi() {
        const [age, setAge] = React.useState('');
        const handleChange = (event) => {
            setAge(event.target.value);
          };
        return (
            <div className={style.container}>
                <div className={style.c1}>
                    <div className={style.lBox}>
                        <h2>کالای فلان</h2>
                        <p> تومان ۲۰،۰۰۰،۰۰۰</p>
                        <div className={style.ldBox}>
                            <button className={style.btn}><AddIcon/>افزودن به سبد خرید</button>
                            <FormControl dir="ltr">
                                <InputLabel id="demo-simple-select-label">۱</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                                    <MenuItem value={1}>۱</MenuItem>
                                    <MenuItem value={2}>۲</MenuItem>
                                    <MenuItem value={3}>۳</MenuItem>
                                    <MenuItem value={4}>۴</MenuItem>
                                    <MenuItem value={5}>۵</MenuItem>
                                    <MenuItem value={6}>۶</MenuItem>
                                    <MenuItem value={7}>۷</MenuItem>
                                    <MenuItem value={8}>۸</MenuItem>
                                    <MenuItem value={9}>۹</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <img className={style.photoSize} src={mobile}/>
                    </div>
                </div>
                <br/>
                <div>
                    <p>
                        lorem
                    </p>
                </div>
            </div>
        );
    
}

export {Commoditi};