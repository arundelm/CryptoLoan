import {Box, Button, FormControl, Stack, TextField, Typography} from "@mui/material"
import { WidthDefaults } from "../providers/global-provider";
import { useContext } from "react";
import { GlobalContext } from "../providers/global-provider";
import useAccountWithBalance from "../hooks/useAccountWithBalance";


export interface Props {
  jayAmount: number;
  setJayAmount: (val: number) => void;
}

const EthDeposit = (props: Props) => {

  const {balance} = useContext(GlobalContext);
  const {data, isPending} = balance;
  const {jayAmount, setJayAmount} = props;
  const {isConnected} = useAccountWithBalance();

    
  const bal = data ? Number(data).toFixed(2).toString() : "0";
  
  const _setJayAmount = (value: number) => {
    if(value > Number(bal)) setJayAmount(Number(bal));
    else if(value < 0) setJayAmount(0);
    else return setJayAmount(value);
  }

  return (
    <Box width={WidthDefaults} alignSelf={"center"}> 
    <Stack direction='row' justifyContent={"space-between"}> <Typography > Deposit JAY Coin </Typography>  
    {!isConnected ? (<Typography> JAY: -- </Typography>) : isPending ?  <Typography> Loading...</Typography> : <Typography> JAY: {bal} </Typography> }
    </Stack>
    <FormControl fullWidth> 
    <TextField type='number' value={jayAmount} onChange={(event) => _setJayAmount(Number(event.target.value))}>
    </TextField>
    {!isConnected ? <Stack direction='row' marginY={1}  spacing={1} width={WidthDefaults}>
        <Button size="small" style={{borderWidth: "3px"}} fullWidth disabled variant='contained' onClick={() => setJayAmount(Number(bal)*.25)}> <Typography > 25% </Typography> </Button> 
        <Button size="small"  style={{borderWidth: "3px"}} fullWidth disabled variant='contained' onClick={() => setJayAmount(Number(bal)*.5)}> <Typography> 50% </Typography> </Button> 
        <Button  size="small" style={{borderWidth: "3px"}} fullWidth disabled variant='contained' onClick={() => setJayAmount(Number(bal))}> <Typography > 100% </Typography></Button> 
    </Stack> : 
    <Stack direction='row' marginY={1}  spacing={1} width={WidthDefaults}>
        <Button style={{borderWidth: "2px", borderColor: "#87CEEB"}} size="small"  fullWidth variant='contained' onClick={() => setJayAmount(Number(bal)*.25)}> <Typography > 25% </Typography></Button> 
        <Button style={{borderWidth: "2px", borderColor: "#87CEEB"}} size="small" fullWidth variant='contained' onClick={() => setJayAmount(Number(bal)*.5)}> <Typography> 50% </Typography> </Button> 
        <Button style={{borderWidth: "2px", borderColor: "#87CEEB"}} size="small" fullWidth variant='contained' onClick={() => setJayAmount(Number(bal))}> <Typography > 100% </Typography> </Button> 
    </Stack> }
    </FormControl>
    </Box>
  )
}

export default EthDeposit