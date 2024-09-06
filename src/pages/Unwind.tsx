import {Grid, Link, Typography} from "@mui/material"

import PositionsBox from "../BorrowComponents/PositionsBox"
import AnnouncementBox from "../BorrowComponents/AnnouncementBox"
import {ConnectKitButton} from "connectkit"
import LoanWidget from "../UnwindComponents/UnwindWidget"
import { ConnectButton } from "../BorrowComponents/ConnectButton"

const UnwindPage = () => {
  return (
    <>
    <Grid item xs={12} alignSelf={"center"}> 
    <Typography padding={1} align="center" variant='h5'> MANAGE </Typography>
    <Typography variant='subtitle1'> OPEN POSITIONS </Typography>
  </Grid>

    <Grid item xs={12} alignSelf={"center"} > 
        <ConnectKitButton /> 
    </Grid>
    
    <Grid item xs={12} alignSelf={"center"} >
      <LoanWidget />
    </Grid>

    <Grid item xs={12} alignSelf={"center"} >
    <Typography align="center" variant='subtitle1'><Link color="inherit" href="/about"> Click to learn more about this site</Link></Typography>
    </Grid>
  </>
  )
}

export default UnwindPage