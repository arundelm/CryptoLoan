import React from 'react'
import { Box, Typography, Link} from '@mui/material'
import { useContext } from 'react';
import { GlobalContext, WidthDefaults } from '../providers/global-provider';
/* interface Props {
    handleClick: () => void;
} */



const PositionsBox = () => {

  const HeightDefaults = {xs: 115, sm: 85, md: 60 }
  
  return (
    <Box sx={{borderRadius: '16px', boxShadow:5}} bgcolor='#BDEEFF' width={WidthDefaults} height={HeightDefaults} padding = {3}>
        <Typography align="center" variant='subtitle1'> You do not have an open position </Typography>
        <Typography align="center" variant='subtitle1'> Go to <Link color="inherit" href="/borrow"> borrow</Link> to open one </Typography>
    </Box> 
  )
}

export default PositionsBox