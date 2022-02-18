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

export default function card(props) {
  return (
    <Card dir="rtl" sx={{ width: "29%",margin:1}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="340"
        image={`http://localhost:3002/files/${props.data.category.icon}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.data.category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {props.data.tozih}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">انتخاب محصول</Button>
      </CardActions>
    </Card>
  );
}