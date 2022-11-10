import {Box,Text} from "@chakra-ui/react";
import Modal_Enter from "./Modal_Enter";

import Modal_Pro from "./Modal_Pro";
import Modal_Res from "./Modal_Res";
import Modal_Sol from "./Modal_Sol";



function Navbar(){
    return (
        <>
<Box bg="blue.100" p="5px">
<Text textAlign="center">Join our webinar to see how new Airtable features can transform your work <a href="">Register -></a></Text>
</Box>
<div style={{width:"100%",height:"80px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
    <div style={{width:"55%", display:"flex",justifyContent:"space-around"}}>
    <img style={{width:"130px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/2560px-Airtable_Logo.svg.png" alt="" />
<Modal_Pro></Modal_Pro>
<Modal_Sol></Modal_Sol>
<button style={{fontWeight:"bold",fontSize:"18px"}}>Pricing</button>
<Modal_Enter></Modal_Enter>
<Modal_Res></Modal_Res>
    </div>

    <div style={{width:"24%",display:"flex",justifyContent:"space-around"}}>
        <button style={{padding:"5px",borderRadius:"7px"}}>contact Sales</button>
        <button style={{padding:"5px",borderRadius:"7px",backgroundColor:"#0768f8",color:"white"}}>Sign up for free</button>
        <a href="">Sign in</a>
    </div>
   
</div>

        </>
    )
}



export default Navbar;