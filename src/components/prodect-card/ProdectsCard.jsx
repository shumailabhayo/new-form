import { Box, Button, Card, Grid, Rating, Typography } from '@mui/material'
// import { Card, Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react'
import ImageProdect1 from '../assets/kiwi1.jpg';
import ImageProdect2 from '../assets/peach-fruit.jpg';
import ImageProdect3 from '../assets/pomegranate.jpg';
import axios from 'axios'


const ProdectsCard = () => {
  const [prodects, setProdects]= useState([]);
  console.log(prodects, 'prodects');
  

  useEffect(()=>{
    const prodectsData = axios.get('https://api.escuelajs.co/api/v1/products').then((data)=> setProdects(data.data)
    )
    
  },[])
  return (
    <Grid container >
    {prodects?.map((product) => (
<Grid Item sm={3}>
<Card key={product.id} className="text-center p-3" >
        <img className='img-fluid' src={product.images[0]} alt='' />
        <Typography variant="h5" className="mt-2">{product.title}</Typography>
        <Rating name="read-only" value={product.rating} readOnly />
        <Typography variant="h6">${product.price}</Typography>
        <Button className="my-3" variant="contained">
          <AddIcon /> Add
        </Button>
      </Card>
</Grid>

    ))}
  </Grid>
  )
}

export default ProdectsCard;
