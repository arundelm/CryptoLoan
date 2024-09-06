import {Box, Typography, Link}  from "@mui/material"
import { WidthDefaults } from "../providers/global-provider"

const AnnouncementBox = () => {
  const HeightDefaults = {xs: 1500, sm: 1100,  md: 700, lg: 550 };
  

  return (
    <Box sx={{borderRadius: '16px', boxShadow:5}} bgcolor='#87CEEB' width={WidthDefaults} height={HeightDefaults} padding = {3}>

<Typography variant='subtitle1' gutterBottom> 
  <b> Overview</b>
    </Typography>

    <Typography variant='subtitle1' gutterBottom> 
    The site offers a decentralized platform where users can deposit JAY Coin as collateral in order to borrow Ethereum (ETH) from the blockchain. By leveraging smart contract technology, the platform provides a secure and transparent system for borrowing and lending, ensuring that the deposited JAY Coins are locked until the Ethereum loan is repaid. This service allows users to maintain liquidity while still holding onto their JAY Coin assets, offering flexibility for those who need ETH for various purposes such as trading, staking, or other blockchain-related activities. With low fees and a user-friendly interface, the platform simplifies the process of obtaining Ethereum through collateralized loans.
    </Typography>

    <Typography variant='subtitle1' gutterBottom> 
    <b> Borrow</b>
    </Typography>

    <Typography variant='subtitle1' gutterBottom> 
    After connecting your wallet, deposit JAY Coin as collateral. Freely choose your amount of JAY to deposit as well as the length of the loan (1-365) days. 
    </Typography>

    <Typography variant='subtitle1' gutterBottom> 
    <b> Manage</b>
    </Typography>

    <Typography variant='subtitle1' gutterBottom> 
    Once you have an open position, manage your loan. Repay your ETH loan for JAY collateral, extend your existing loan, remove your collateral, or completely close your position through this page.
    </Typography>

    </Box>
  )
}

export default AnnouncementBox