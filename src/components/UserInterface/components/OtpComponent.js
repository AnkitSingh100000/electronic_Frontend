import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { postData } from "../../../services/FetchNodeServices";
import { useDispatch } from "react-redux";
export default function OtpComponent(props)
{   var navigate=useNavigate()
  var dispatch=useDispatch()
    var location=useLocation()
    var oldOtp=location.state.otp
    var mobileno=location.state.mobileno
  const [open,setOpen]=useState(true)
//////////////////////////////////////////////////////////////////////////////
var optArray=new Array(4)
 optArray.fill('')

const handleOtp1=()=>{
  if(document.getElementById('one').value.length==1)
  { optArray[0]=document.getElementById('one').value
    document.getElementById('two').focus()
  }
}

const handleOtp2=()=>{
  if(document.getElementById('two').value.length==1)
  {
    optArray[1]=document.getElementById('two').value
    document.getElementById('three').focus()
  }
}
const handleOtp3=()=>{
  if(document.getElementById('three').value.length==1)
  {
    optArray[2]=document.getElementById('three').value
    document.getElementById('four').focus()
  }
}
const handleOtp4=()=>{
  if(document.getElementById('four').value.length==1)
  {
    optArray[3]=document.getElementById('four').value
  }
}

const handleCheckOpt=async()=>{
   var otp=optArray.join('')
  if(otp==oldOtp)
  {
    var result=await postData('useraccount/check_account',{mobileno:mobileno})
    if(result.status)
    {
      dispatch({type:"ADD_USER",payload:[result.data[0].mobileno,result.data[0]]})
      localStorage.setItem("User",JSON.stringify(result.data[0]))
      navigate('/shopping',{state:{mobileno:mobileno,user:result.data,status:result.status}})
    }
    else
    {
      navigate('/shopping',{state:{mobileno:mobileno,status:result.status,user:[]}})
    }
}
  else
  {
    alert('invalid Opt')
  }
}
const Otpform=()=>{
    return(<div style={{width:500,height:300,}}>  
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"15%"}}>     
   <b style={{fontSize:16,color:'#fff'}}>VERIFY WITH OPT</b>
     </div>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"15%"}}>     
   <div style={{fontSize:16,color:'#fff'}}>sent to +91{mobileno}</div>
     </div>
     <div style={{marginTop:'4%',display:'flex',width:'50%',marginLeft:'26%',justifyContent:"space-between",alignItems:'center',height:"15%"}}>     
     <div>
        <TextField onKeyUp={handleOtp1} id="one" size="small" style={{background:'#9A9A9A',width:'5ch',borderRadius:'3%',borderColor:'#fff'}}/>
      </div>
      <div>
        <TextField onKeyUp={handleOtp2} id="two" size="small" style={{background:'#9A9A9A',width:'5ch',borderRadius:'3%',borderColor:'#fff'}}/>
      </div>  <div>
        <TextField onKeyUp={handleOtp3} id="three" size="small" style={{background:'#9A9A9A',width:'5ch',borderRadius:'3%',borderColor:'#fff'}}/>
      </div>  <div>
        <TextField onKeyUp={handleOtp4} id="four" size="small" style={{background:'#9A9A9A',width:'5ch',borderRadius:'3%',borderColor:'#fff'}}/>
      </div>
     </div>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"15%",marginTop:'4%'}}>     
     <span style={{color:'#fff',fontSize:14}}>Don't Recieve Your OTP?</span><span style={{color:'#12DAA8',fontSize:12}}>Resend OPT</span>
     </div>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
      <Button onClick={handleCheckOpt}  style={{borderColor:'#12DAA8',fontSize:12,height:40,width:"75%",marginLeft:'4%',background:"#12DAA8",color:'#000',fontWeight:'bold',textTransform:'none',borderRadius:7}} variant="outlined">Submit OTP</Button>
      </div>
    </div>)
}


//////////////////////////////////////////////////////////////////////////////////////////////////

    const handleClose=()=>{
      setOpen(false)
      navigate('/home')
    }

    const showOtpDialog=()=>{
      return(
        <div >
      <Dialog open={open} style={{background:'#3d3d3d'}}>
        <DialogContent style={{background:'#000'}}>
          {Otpform()}
        </DialogContent>
        <DialogActions style={{background:'#000'}}>
        <Button onClick={handleClose} style={{color:'#3d3d3d'}}>Close</Button>
        </DialogActions>
      </Dialog></div>)
    }

    return(<div>
      <div >
       {showOtpDialog()}
      </div>
    </div>)
}
