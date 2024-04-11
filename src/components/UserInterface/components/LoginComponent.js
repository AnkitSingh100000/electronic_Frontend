import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
export default function LoginComponent({status,setStatus})
{ 
  const [mobileno,setMobileno]=useState('')
  var navigate=useNavigate()
  
  const handleOtp=()=>{
  var otp=generateOpt()
  alert(otp)
  navigate('/otp',{state:{otp:otp,mobileno:mobileno}})
} 
 
  const generateOpt=()=>{
    var otp=parseInt((Math.random()*8999)+1000)
    return otp
  }
  
//////////////////////////////Category  edit Action///////////////////////////////////////////////////
const Loginform=()=>{
    return(<div style={{width:500,height:320,}}>  
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"15%"}}>     
     <div style={{border:'1px solid #9A9A9A',width:'75%',height:'90%',borderRadius:5,marginTop:'4%'}}>
      <div style={{display:'flex',alignItems:'center',height:'100%',width:'100%'}}>
     <div style={{color:'#fff',fontSize:13,marginLeft:'15%'}}> <b> Login </b> </div>
     <div style={{ border:'1px solid #9A9A9A',borderRadius:2,width:'7%',display:'flex',alignItems:'center',justifyContent:'center',height:'50%',marginLeft:'20%'}}>
      <b style={{color:'#fff'}}>OR</b>
      </div>
      <div style={{color:'#fff',fontSize:13,marginLeft:'13%'}}> <b> Create Account </b> </div>
      </div>     
     </div>
     </div>
     <div style={{fontSize:14,color:'#fff',marginTop:'7%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <b>Please enter your Email ID or Phone number
     </b>
     </div>
     <div style={{fontSize:14,marginTop:'6%',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <div style={{color:"#9A9A9A",border:'1px solid #fff'}}>
      <input onChange={(e)=>setMobileno(e.target.value)} type="text" placeholder="Enter Your Email Id or Phone Number" style={{outline:'none',border:'none',fontSize:17,color:'#fff',width:370,height:33,borderColor:"#fff",background:'#000',borderRadius:'none'}}></input>
      </div>
     </div>
     <div style={{fontSize:15,marginTop:'4%',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <div >
              <FormGroup style={{ color: "#fff" }}>
                      <FormControlLabel
                      control={<Checkbox style={{ color:"#12DAA8" ,fontWeight:'bold'}} />}
                        label="Keep me signed in"
                      />
             </FormGroup>
      </div>
      </div>
      <div style={{fontSize:12,display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
      <span style={{color:'#fff'}}>By continuing you agree to our</span><span style={{color:"#12DAA8"}}> Terms of Use & Privacy Police</span>
      </div>
      <div onClick={handleOtp} style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
      <Button style={{borderColor:'#12DAA8',fontSize:12,height:40,width:"75%",marginLeft:'4%',background:"#12DAA8",color:'#000',fontWeight:'bold',textTransform:'none',borderRadius:10}} variant="outlined">Continue</Button>
      </div>
    </div>)
}


//////////////////////////////////////////////////////////////////////////////////////////////////

    const handleClose=()=>{
      setStatus(false)
      navigate('/home')
    }

  
      return(
        <div >
      <Dialog open={status} style={{background:'#3d3d3d'}}>
        <DialogContent style={{background:'#000'}}>
          {Loginform()}
        </DialogContent>
        <DialogActions style={{background:'#000'}}>
        <Button onClick={handleClose} style={{color:'#3d3d3d'}}>Close</Button>
        </DialogActions>
      </Dialog></div>)
    }

   

