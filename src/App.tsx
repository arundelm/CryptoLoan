import {Grid, Typography, Link} from "@mui/material"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UnwindPage from "./pages/Unwind"
import BorrowPage from "./pages/Borrow"
import AboutPage from "./pages/About"

//need to add mainnet vs blast for wrap/bridge
//need to implement approve weth button into loop (reapprove if amount is increased)

function App() {
  
  return <>
  <Router> 
  <Grid container spacing={4} direction="column" alignContent={"center"} style={{minHeight: '100vh'}}>
    <Grid item alignSelf={"center"}> 
    <Typography marginTop={1} color="black"> 
      <Link color="inherit" underline="hover" href="/borrow" marginRight={3} marginLeft={3} > borrow </Link> 
      <Link marginLeft={3} color="inherit" underline="hover" href="/unwind">    manage </Link>
      </Typography>
    </Grid>

    <Routes> 
    <Route path="/" element={<BorrowPage />} />
    <Route path="/borrow" element={<BorrowPage/>} />
    <Route path="/unwind" element={<UnwindPage/>} />
    <Route path="/about" element={<AboutPage/>} />


  </Routes>
  </Grid>
  </Router> 
  </>
}
export default App
