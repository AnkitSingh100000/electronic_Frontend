import CartComponent from "../CartComponent";
import CheckoutComponent from "../CheckoutComponent";
import Header from "../Header";
import { useStyles } from "./ProjectCss";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SmallScreenCartComponent from "../SmallScreenCartComponent";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Cart()
{
    const[cartRefresh,setCartRefresh]=useState(false)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    var cart=useSelector(state=>state.mycart)
    var productCart=Object.values(cart)

    var classes=useStyles()   
    return(<div className={classes.Box}>
       <div>
        <Header/>
       </div>
       <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
       <div style={{width:matches?'98%':'70%'}}>
        <CartComponent cartRefresh={cartRefresh} setCartRefresh={setCartRefresh} productCart={productCart} />
       </div>  
       {matches?<></>:<div style={{width:'30%'}}>
        <SmallScreenCartComponent  productCart={productCart}/>
       </div>}
       </div>
       {matches?<div  style={{position:'sticky',bottom:'0',zIndex:'3'}} >
        <CheckoutComponent productCart={productCart}/>
       </div> :<></> }
    </div>)
}