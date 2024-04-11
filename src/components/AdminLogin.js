import { useState } from "react";
import { AvTimer, Height, Password } from "@mui/icons-material";
import { Grid,Button,TextField,Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import login1 from '../../src/assets/login1.png'
import Heading from "./projectComponent/Heading";
import { postData } from '../services/FetchNodeServices';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
  var useStyles=makeStyles({             
    root:{
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    },
    box:{
        width:500,
        height:"auto",
        backgroundColor:"#ecf0f1",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        borderRadius:10,
        padding:10,
        margin:10
    },
    center:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
 })
export default function AdminLogin()
{

  localStorage.clear()

    const useStyle=useStyles()
    var navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errors,setErrors]=useState({})
    const handleError=(error,label)=>{
      setErrors((prev)=>({...prev,[label]:error}))
    }

   const validation=()=>{
    var error=false
    if(email.length==0)
    {
      error=true
      handleError('pls input the email','email')
    }
    if(password.length==0)
    {
      error=true
      handleError('pls input password','password')
    }
    return error
   }
   const handleReset=()=>{
    setEmail('')
    setPassword('')
   }
    const handleSubmit=async()=>{
      var error=validation()
      if(error==false)
      {
      var body={email:email,password:password}
     var response= await postData('login/submit_login',body)
    if(response.status)
    {
      localStorage.setItem('ADMIN',JSON.stringify(response.data))
      navigate('/dashboard')
    }
    else
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        toast:true
      })
    }
      }
    }
    
    return(
    <div className={useStyle.root}>
        <div className={useStyle.box}>
            <Grid container spacing={3}>
            <Grid item xs={12} className={useStyle.center}>
              <div><img src="login.png" width={50}></img></div>
              </Grid>
              <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:10}}>
              <b>SIGN IN</b>
              </Grid>
                <Grid item xs={12}>
                 <TextField label="Email Address" error={errors.email} helperText={errors.email} 
                 onFocus={()=>handleError('','email')} value={email} onChange={(event)=>setEmail(event.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                  <TextField required label="Password" error={errors.password} helperText={errors.password} 
                 onFocus={()=>handleError('','password')} value={password} onChange={(event)=>setPassword(event.target.value)} fullWidth/>
                </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={handleSubmit}>SIGN IN</Button>
              </Grid>
            
            </Grid>
        </div>
    </div>)}