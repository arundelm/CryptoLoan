import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material";

interface Props{
  days: number;
  setDays: (num : number) => void;
}

const DayBox = ({days, setDays} : Props) => {
  
    const dayBoxRestrictions = (value: number) => {
      if(value < 0) setDays(0);
      else if(value > 365) setDays(365);
      else setDays(value);
    }

  return (
    <Box width='300'> 
    <Typography> Extend loan (days) </Typography>
    <TextField type='number' value={days} fullWidth onChange={(event) => dayBoxRestrictions(Number(event.target.value))} >
    </TextField>
    </Box>
  )
}

export default DayBox