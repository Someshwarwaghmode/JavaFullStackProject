import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={3} gap={2}>
                <Grid items  sx={2}>
                    <Box>
                        <Avatar className='text-white' sx={{width:"56", height:"56", bgcolor:"#9155fd"}}></Avatar>
                    </Box>
                </Grid>

                <Grid items sx={9}>
                  <div className='space-y-2'>
                    <div>
                      <p className='font-semibold text-lg'>ram</p>
                      <p className='opacity-70'>March 5, 2025</p>
                    </div>
                  </div>
                  <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard