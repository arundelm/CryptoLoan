import useClosePosition from '../hooks/useClosePosition'
import { Button, Box, Typography } from '@mui/material'
import {useState, useEffect, useContext} from "react"
import { GlobalContext } from '../providers/global-provider'
import { JayContract } from '../providers/contracts';
import { Address, formatEther, parseEther } from 'viem';
import useLoanByAddress from '../hooks/useLoanByAddress';

interface Props {
  writeContract: ({}) => any;
}

const ClosePosition = ({writeContract} : Props) => {
  const {abi, address} = JayContract;
  
  const {data} = useLoanByAddress();
  const eth = formatEther(data?.borrowed || 0);

  return (
      <>
    <Box sx={{ marginTop: 4 }} paddingX={2} paddingY={3}> 
      <Button size="large" variant="contained" color="error" onClick={()=>{
        writeContract({
          abi,
          address : address as Address,
          functionName: "closePosition",
          args: [],
          value: parseEther(eth), 
      });
      }} fullWidth>
          Close Position
        </Button>   
      </Box>
      </>
  )
}

export default ClosePosition