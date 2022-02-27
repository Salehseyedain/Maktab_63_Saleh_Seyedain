// import React, { Component } from 'react'
// import style from '../../asset/styles/Nahayi.module.css'
//  class Nahayi extends Component {
//   render() {
//     return (
//         <div className={style.contain}>
//             <div className={style.head}>
//                 <h2>نهایی کردن سبد خرید</h2>
//             </div>
            
//                 <form className={style.form} dir='rtl'>
//                     <div className={style.right}>
//                         <label>نام:
//                             <input type="text" />
//                         </label>
//                         <label>نام:
//                             <input type="text" />
//                         </label>
//                         <label>نام:
//                             <input type="text" />
//                         </label>
//                     </div>
//                     <div className={style.left}>
//                         <label>نام:
//                             <input type="text" />
//                         </label>
//                         <label>نام:
//                             <input type="text" />
//                         </label>
//                     </div>
//                     <button>پرداخت</button>
//                 </form>

//         </div>
//     )
//   }
// }




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import style from '../../asset/styles/Nahayi.module.css'
// function Nahayi() {
//   return (
//       <div  className={style.contain}>
        
//         <Box dir='rtl' className={style.left}  component="form" sx={{'& > :not(style)': { m: 1, width: '45ch' },}} noValidate autoComplete="off">
//             <TextField dir='rtl' fullWidth label="نام" id="fullWidth" />
//             <TextField dir='rtl' fullWidth label="fullWidth" id="fullWidth" />
//         </Box>
//         <Box dir='rtl' className={style.right} component="form" sx={{'& > :not(style)': { m: 1, width: '45ch' },}} Validate autoComplete="off">

//             <TextField dir='rtl' fullWidth label="fullWidth" id="fullWidth" />
//             <TextField dir='rtl' fullWidth label="fullWidth" id="fullWidth" />
//             <TextField dir='rtl' fullWidth label="fullWidth" id="fullWidth" />

//         </Box>
        
//       </div>
//   );
// }




import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Box from '@mui/material/Box';
import style from '../../asset/styles/Nahayi.module.css'

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function Nahayi() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
          <div>
            <div className={style.contain} dir="rtl">
            {/* <TextField label="" variant="standard" /> */}
                
                <Box dir='rtl' className={style.right} component="form" sx={{'& > :not(style)': { m: 1, width: '45ch' },}} Validate autoComplete="off">

                    <TextField  fullWidth label="نام:" id="fullWidth" />
                    <TextField  fullWidth label="ادرس:" id="fullWidth" />
                    <TextField  fullWidth label="تاریخ تحویل:" id="fullWidth" />

                </Box>
                <Box dir='rtl' className={style.left}  component="form" sx={{'& > :not(style)': { m: 1, width: '45ch' },}} noValidate autoComplete="off">
                    <TextField dir='rtl' fullWidth label="نام خانوادگی:" id="fullWidth" />
                    <TextField dir='rtl' fullWidth label="تلفن همراه:" id="fullWidth" />
                </Box>
            </div>
            <div className={style.btn}>
                <button>پرداخت</button>
            </div>
          </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
export {Nahayi};