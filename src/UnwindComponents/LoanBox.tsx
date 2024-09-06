import { useState, useEffect, useContext } from "react";
import {Box, TextField, Typography, Button,Stack} from "@mui/material"
import useExtendLoan from "../hooks/useExtendLoan";
import { GlobalContext } from "../providers/global-provider";
import useGetLoanFee from "../hooks/useGetLoanFee";
import { JayContract } from "../providers/contracts";
import { Address } from "viem";

interface Props {
  writeContract: ({}) => any;
}

const LoanBox = ({writeContract} : Props) => {
  const [extendDays, setExtendDays] = useState(1);
    const dayBoxRestrictions = (value: number) => {
        if(value < 0) setExtendDays(0);
        else if(value > 365) setExtendDays(365);
        else setExtendDays(value);
      }

      const {address, abi} = JayContract;
      const {data} = useGetLoanFee(extendDays);
      const fee = data ? data : 0;


  return (
    <Box sx={{ marginTop: 4 }} paddingX={2} >
      <Typography > Extend loan (days) </Typography>
        <TextField
          type='number' value={extendDays} onChange={(event) => dayBoxRestrictions(Number(event.target.value))}
          fullWidth 
        />
        <Stack marginTop={1}>
        <Button onClick={()=>{
          writeContract({
            abi,
            address : address as Address,
            functionName: "extendLoan",
            args: [extendDays],
            value: fee,
        });
        }} fullWidth variant="contained" > {"EXTEND LOAN " + extendDays + " DAYS"} </Button>
        </Stack>
      </Box>
  )
}

export default LoanBox