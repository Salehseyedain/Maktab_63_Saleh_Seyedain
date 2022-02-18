import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as api from "../../../../../api/user.api";
import {PATHS} from "../../../../../configs/routes.config";
import store from "../../../../../redux/store";
import {getData} from "../../../../../api/user.api";

export default function SelectAutoWidth(props) {
    const [age, setAge] = React.useState('');
    const [selector, setSelector] = React.useState(["none"]);
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleClick =async (e) => {
        let selc=[]
        try {
            const response = await api.getData("/category");

             response.forEach(item=>{
                 selc.push(item.name)

            })


        } catch (e) {
            alert("اکانت وجود ندارد")
            // console.log("DDDDDD",store.getState())

        }
        setSelector(selc)
    }

    return (
        <div >
            <label htmlFor={"selector"}>دسته بندي:</label>
            <FormControl sx={{ m: 0, width:"100%",backgroundColor:"white", padding:"0 0",margin:"0.4rem 0"}} id={"selector"}>

                <Select
                    name={"group"}
                    sx={{height:"2rem",width:"100%"}}
                    value={age}
                    onFocus={handleClick}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}

                >
                    <MenuItem value="">
                        <em>{props.value}</em>
                    </MenuItem>
                    {selector.map(item=>{
                        return <MenuItem value={item}>{item}</MenuItem>

                    })}
                    {/*<MenuItem value={10}>Ten</MenuItem>*/}
                    {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                </Select>
            </FormControl>
        </div>
    );
}
