import { Typography, Button, Box, Stack } from '@mui/material'
import { GlobalContext } from '../providers/global-provider';
import { useContext, useState, useEffect } from 'react';
import {HashLoader } from 'react-spinners';
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import useWriteContractAndWaitForConfirm from '../hooks/useWriteContractAndWaitForConfirm';
import { isElement } from 'react-dom/test-utils';

const LoadingScreen = () => {
  const {status, message, setStatus} = useContext(GlobalContext);
  const {reset} = useWriteContract();

  const click = () => {
    setStatus("NONE", "");
    reset;
  }

  const [isErrorOrSuccess, setIsErrorOrSuccess ] = useState(false);

  useEffect(()=>{
    if(status == "ERROR" || status == "SUCCESS"){
      setIsErrorOrSuccess(true);
    }else{
      setIsErrorOrSuccess(false);
    }
  }, [status])

  return (<> 
  <Stack  alignItems="center" direction={"column"} padding={5} spacing={8} marginX={5}> 
    <Typography variant="h5"> {message} </Typography>
    {!isErrorOrSuccess &&
    <HashLoader color="#1876d1"  size={80} /> }
    <Button fullWidth size="large" variant="contained" onClick={click}> Reset Transaction </Button>
    </Stack>
    </>
  )
}

export default LoadingScreen