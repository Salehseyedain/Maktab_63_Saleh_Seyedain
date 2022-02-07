import React, {Component} from 'react';
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
                    <p>سبد خرید</p>
                    <ShoppingCartIcon sx={{ fontSize: 40 }} color="success"/>
                    </div>
                    {/* <span> <RiShoppingCart2Line size={50}/></span> */}
                    <div className={style.admin}>

                    <SupervisorAccountIcon sx={{ fontSize: 44 }} color="success"/>
                    </div>
                    {/* <span><GrUserManager/></span> */}
                </div>
                <div className={style.headerCenter}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="...جست و جو" inputProps={{ 'aria-label': 'search' }}/>
                 </Search>
                </div>
                <div className={style.rightHedear}>
                    <h1>فروشگاه تربچه</h1>
                    <img className={style.logoPic} src={logo}/>
                </div>
            </div>
        );
    }
}

export default CustomerHedar;