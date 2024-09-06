import { Button } from '@mui/material'
import useAccountWithBalance from '../hooks/useAccountWithBalance';
import useBorrow from "../hooks/useBorrow"
import { GlobalContext } from '../providers/global-provider';
import { useContext, useEffect } from 'react';
import useJayToEth from '../hooks/useJayToEth';
import { JayContract } from '../providers/contracts';
import { Address, parseEther } from 'viem';

interface Props {
  jay : string;
  days : number;
  writeContract: ({}) => any;
}

const ApproveButton = ({jay, days, writeContract}  : Props) => {
    const {isConnected} = useAccountWithBalance();
    const {data: eth} = useJayToEth(jay);
    const jayToEth = (Number(eth)*.95).toString();
    const { abi, address} = JayContract;
    
  return (
    <>
    {!isConnected ? 
        <Button size="large" disabled variant="contained">  Borrow </Button>
    :
    <Button variant="contained" onClick={()=>{
      writeContract({
        abi,
        address : address as Address,
        functionName: "borrow",
        args: [parseEther(jay), parseEther(jayToEth), days],
    });
    }}> Borrow </Button> 
      
    }
  
  </>)
}

export default ApproveButton