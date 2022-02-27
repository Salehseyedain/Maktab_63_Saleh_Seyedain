import * as React from 'react';


import {PATHS} from "../../configs/routes.config";
import {Link} from "react-router-dom";
import {useRef} from 'react';
import {Helmet} from 'react-helmet';

import {useNavigate} from 'react-router-dom';
import * as api from '../../api/user.api';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../asset/images/trobche.png';
import style from '../../asset/styles/Login.page.module.css'
import {useFormik} from "formik";
import * as yup from 'yup';
import {tableCellClasses} from "@mui/material/TableCell";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';


    const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });



const validationSchema = yup.object({
    username: yup
        .string('نام کاربری را وارد کنید')

        .min(4, 'نام کاربری باید بیشتر از 4 کارکتر باشد')
        .required('نام کاربری اجباری میباشد'),
    password: yup
        .string('رمزعبور را وارد کنید')
        .min(4, 'رمزعبور باید بیشتر از 4 کارکتر باشد')
        .required('رمزعبور اجباری میباشد'),
});



const Login=() =>  {
    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            const response = await api.login(e);
            navigate(PATHS.COMMODITIES);
            // console.log("hi")

        } catch (e) {
                    alert("اکانت وجود ندارد")

        }
    };
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (e) => {
            handleSubmit(e)
        },
    });


    return (
        <div className={style.login}>
            <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs"  className={style.container} dir="rtl" align="right"  >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src={logo} className={style.logoPic} />
                    <Typography component="h1" variant="h5" >
                        ورود به پنل مدیریت
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            dir="rtl"
                            align="right"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="نام کاربری"
                            autoComplete="username"
                            name="username"
                            autoFocus
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={formik.touched.username && Boolean(formik.errors.username)}

                            helperText={formik.touched.username && formik.errors.username}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="رمز عبور"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        <Button
                           
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 , backgroundColor:'darkgreen', fontWeight:'bolder'}}
                        >
                            ورود
                        </Button>
                    </Box>
                    
                    <Link style={{textDecoration:"none", backgroundColor:'purple', width:'100px', textAlign:'center', height:'40px', paddingTop:'6px', marginBottom:'6px', borderRadius:'6px', color:'white'}} to={PATHS.HOME}>بازگشت</Link>
                    
                </Box>

            </Container>
            </ThemeProvider>
            </CacheProvider>
        </div>
    );
}


export {Login};

















