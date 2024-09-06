import EthDeposit from "./EthDeposit"
import DayBox from "./DayBox"
import { Stack, Box } from "@mui/material"
import { useState, useEffect, useContext } from "react"
import ApproveButton from "./ApproveButton"
import { WidthDefaults } from "../providers/global-provider"
import LoadingScreen from "../UnwindComponents/LoadingScreen"
import useWriteContractAndWaitForConfirm from "../hooks/useWriteContractAndWaitForConfirm"
import { GlobalContext } from "../providers/global-provider"

const Widget = () => {
  const [jayAmount, setJayAmount] = useState(0);
  const [days, setDays] = useState(0);

  const {status, setStatus} = useContext(GlobalContext);
  const {writeContract, isError,isUserError, isConfirming, isSuccess, isPending} = useWriteContractAndWaitForConfirm();
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

  return (  
    <Box sx={{borderRadius: '16px', boxShadow:5}} bgcolor='#BDEEFF' alignSelf={"center"} opacity={10} width={WidthDefaults} height={375} padding={3} >
      {isTransactionOccuring ? 
      <LoadingScreen />
      :
    <Stack spacing={5}> 
        <EthDeposit jayAmount={jayAmount} setJayAmount={setJayAmount} />
        <DayBox days={days} setDays={setDays}/>
        <ApproveButton jay={jayAmount.toString()}  days={days} writeContract={writeContract}/>
    </Stack> }
    </Box>
  )
}

export default Widget