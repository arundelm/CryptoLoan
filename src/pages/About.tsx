import {Grid, Typography,} from "@mui/material"
import AnnouncementBox from "../BorrowComponents/AnnouncementBox"



const AboutPage = () => {
  return (
    <>
    <Grid item xs={12} alignSelf={"center"}> 
    <Typography padding={1} align="center" variant='h5'> ABOUT </Typography>
    <Typography align="center" variant='subtitle1'>  THIS SITE </Typography>
  </Grid>

   <Grid item xs={12}> 
      <AnnouncementBox />
    </Grid>
   

      </>
  )
}


/*
<Grid item xs={12} alignSelf={"center"}> 
      <WrapEth> </WrapEth>
    </Grid>
    <Grid item xs={12} alignSelf={"center"}> 
      <BridgeEth> </BridgeEth>
      </Grid> 
 */
export default AboutPage