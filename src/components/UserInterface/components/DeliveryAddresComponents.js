import { Check } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import React, { useState } from "react";

import { useSelector } from "react-redux";

export default function DeliveryAddresComponents(props) {
    var user =JSON.parse(localStorage.getItem('User'))
  
    // var user = props?.userData[0]
    console.log("USER:", user)
    const [refrace, setRefrace] = useState(false)

    return (<div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <div style={{ display: 'flex', width: '60%', flexDirection: 'column', marginTop: '2%',marginLeft:'3%' }}>
            <Paper>
                <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.2vW' }}>LOGIN</span>
                            <span ><Check fontSize="small" /></span>
                        </div>
                        <div>
                            +91{props.userData[0]?.mobileno}
                        </div>
                    </div>
                    <div >
                        <Button style={{ border: 'solid 1px #12Daa8' }}>change</Button>
                    </div>
                </div>
            </Paper>
            <Paper style={{ marginTop: '2%', }}>

                <div style={{ background: '#2874F0', padding: 15, fontWeight: '700' }}>
                    DELIVERY ADDRES
                </div>
                    <div style={{ fontSize: '1vw', fontWeight: '700', padding: '2% 2% 1% 2%' }}>
                        {props.userData[0]?.username}      +91 {props.userData[0]?.mobileno}
                    </div>
                    <div style={{ fontSize: '1vw', fontWeight: '400',marginLeft:'2%' }}>
                        <b>{props.userData[0]?.address}</b>
                    </div>
                    <div style={{ fontSize: '1vw', fontWeight:'400', marginLeft:'2%' }}>
                        {props.userData[0]?.pincode}
                    </div>
                   <div style={{display:'flex'}}>
                    <Button style={{marginLeft:'auto'}}>edit</Button>
                   </div>
                <div>
                </div>
            </Paper>
            
              
        </div>
    </div>)
}