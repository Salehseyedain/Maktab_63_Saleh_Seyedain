import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PATHS} from '../../configs/routes.config'

import style from '../../asset/styles/CustomerHedar.module.css';
import logo from '../../asset/images/trobche.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import vazir from '../../asset/fonts/vazir/Vazir-Bold.woff'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

class CustomerHedar extends Component {

    render() {
        const Search = styled('div')(({ theme }) => ({
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.1),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        }));
        const SearchIconWrapper = styled('div')(({ theme }) => ({
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }));
        const StyledInputBase = styled(InputBase)(({ theme }) => ({
            color: 'inherit',
            '& .MuiInputBase-input': {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('md')]: {
                    width: '500px',
                    height: '40px'
                },
            },
        }));
        return (
            
                <div className={style.headerContainer}>
                    <div className={style.leftHedear}>
                        <div className={style.basket}>
                            <Link to={PATHS.BASKET}> <ShoppingCartIcon sx={{ fontSize: 40 ,color: "#556b2f"}} /></Link>

                        </div>
                        {/* <span> <RiShoppingCart2Line size={50}/></span> */}
                        <div className={style.admin}>
                            <Link to={PATHS.LOGIN}> <SupervisorAccountIcon sx={{ fontSize: 44,color: "#556b2f" }} /></Link>

                        </div>
                        {/* <span><GrUserManager/></span> */}
                    </div>
                        <Link to={PATHS.HOME}>
                        <div className={style.rightHedear}>
                            <h1>فروشگاه تربچه</h1>
                            <img className={style.logoPic} src={logo}/>
                        </div>
                        </Link>
                </div>
            
        );
    }
}

export default CustomerHedar;