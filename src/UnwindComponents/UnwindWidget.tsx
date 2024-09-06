import { Box} from '@mui/material';
import { WidthDefaults } from '../providers/global-provider';
import {LoanInfo} from "../UnwindComponents/LoanInfo"
import RepaySlider from "./RepaySlider";
import LoanBox from "./LoanBox";
import CollateralBox from "./CollateralBox";
import ClosePosition from "./ClosePosition";
import { useState, useEffect, useContext } from 'react';
import PositionsBox from '../BorrowComponents/PositionsBox.tsx';
import useLoanByAddress from '../hooks/useLoanByAddress';
import useAccountWithBalance from '../hooks/useAccountWithBalance';
import { GlobalContext } from '../providers/global-provider';
import LoadingScreen from "./LoadingScreen.tsx"
import useWriteContractAndWaitForConfirm from '../hooks/useWriteContractAndWaitForConfirm.tsx';

const LoanWidget = () => {

  const {status, message, setStatus} = useContext(GlobalContext);
  const {writeContract,hash, isPending, isConfirming, isError, isUserError, isSuccess} = useWriteContractAndWaitForConfirm();
  console.log(hash);
  
  const [showPosition, setShowPosition] = useState(false);
  const {isConnected} = useAccountWithBalance();
  const {data} = useLoanByAddress();
  const endDate = data ? data.endDate.toString() : "--";
  
  useEffect(()=>{
      setShowPosition(false);
      if(isConnected){
          if(Number(endDate) !== 0){
              setShowPosition(true);
          }
      }
  }, [endDate, isConnected])
  

  const [isTransactionOccuring, setIsTransactionOccuring] = useState(false);
  
  useEffect(()=> {
    setStatus(
      isError ? "ERROR" 
    : isUserError ? "ERROR"
    : isSuccess ? "SUCCESS" 
    : isConfirming ? "CONFIRMING"
    : isPending ? "PENDING"
    : "NONE"
    , 
    isError ? 
    `There was an error with your transaction on the blockchain`
    :
    isUserError ?
    'There was an error with your transaction. '
    :
    isSuccess ? 
    `Success` 
    :
    isConfirming ? 
    `Blockchain transaction is confirming`
    :
    isPending ?
    `Your transaction is pending`
    :
    ""
    ); 
  }, [isError, isUserError, isSuccess, isConfirming, isPending]) 

  useEffect(() => {
    if(status !== "NONE"){
      setIsTransactionOccuring(true);
    }else{
      setIsTransactionOccuring(false);
    }
  }, [status])

  return showPosition ? 
    <Box sx={{borderRadius: '16px', boxShadow:5}} bgcolor='#BDEEFF' alignSelf={"center"} opacity={10} width={WidthDefaults} height={650} padding={3} >
    {!isTransactionOccuring ? 
      <>
      <LoanInfo /> 
      
      <RepaySlider writeContract={writeContract} />
      
      <LoanBox   writeContract={writeContract} />
      
      <CollateralBox   writeContract={writeContract} />

      <ClosePosition   writeContract={writeContract} /> 
      </>
    :
    <LoadingScreen  /> 
  } 
  </Box>
  : 
    <PositionsBox /> 
};

export default LoanWidget;
