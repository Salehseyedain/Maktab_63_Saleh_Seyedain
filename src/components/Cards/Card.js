// import React, { Component } from 'react'

// export default class Card extends Component {
//   render() {
//     return (
//       <div>
//           Card
//       </div>
//     )
//   }
// }


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {PATHS} from "../../configs/routes.config";
import style from "../../asset/styles/CardComponent.module.css"
export default function card(props) {
  return (
    <Card dir="rtl" sx={{ width: "29%",margin:1}}>
      <Link to={`${PATHS.COMMODITI}/?Card=${props.data.id}`}>
        <CardMedia sx={{objectFit:'contain'}}
          component="img"
          alt="Trobche"
          height="350"
          // width="80"
          image={`http://localhost:3002/files/${props.data.category.icon}`}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.data.category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {props.data.tozih}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={style.downBox}>
          <Button sx={'color: darkslategray'} size="large">انتخاب محصول</Button>
          <p>{props.data.price} تومان</p>
        </div>
      </CardActions>
      
    </Card>
  );
}