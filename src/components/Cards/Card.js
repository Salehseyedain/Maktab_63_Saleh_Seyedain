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

export default function card() {
  return (
    <Card dir="rtl" sx={{ maxWidth: 345 }} sx={{margin:5}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">انتخاب محصول</Button>
      </CardActions>
    </Card>
  );
}