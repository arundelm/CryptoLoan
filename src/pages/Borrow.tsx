import {Grid, Link, Typography} from "@mui/material"
import Widget from "../BorrowComponents/Widget"

import { ConnectKitButton } from "connectkit"



const BorrowPage = () => {
  return (
    <>
  <Grid item xs={12} alignSelf={"center"}> 
    <Typography padding={1} align="center" variant='h5'> BORROW </Typography>
    <Typography align="center" variant='subtitle1'>  ETHEREUM </Typography>
  </Grid>

    <Grid item xs={12} alignSelf={"center"} > 
        <ConnectKitButton />
    </Grid>

    <Grid item xs={12}> 
      <Widget />
    </Grid>

    <Grid item xs={12} alignSelf={"center"} >
    <Typography align="center" variant='subtitle1'><Link color="inherit" href="/about"> Click to learn more about this site</Link></Typography>
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
export default BorrowPage