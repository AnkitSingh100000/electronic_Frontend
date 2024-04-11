import Header from "../Header";
import { useStyles } from "./ProjectCss";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ShoppingComponent from "../ShoppingComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Payment from "../Payment";
import { useLocation } from "react-router-dom";
import DeliveryAddresComponents from "../DeliveryAddresComponents";
export default function Cart()
{
    var location=useLocation()
    var mobileno=location?.state?.mobileno
    var status=location?.state?.status
    var userData=location?.state?.user
    var navigate=useNavigate()
    var cart=useSelector(state=>state.mycart)
    var productCart=Object.values(cart)

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md')); 

    const showAddress=()=>{
        return(<div>
            {userData[0]?.username}
        </div>)
    }
    const handleShop=()=>{
     navigate('/cart')
    }
    return(<div>
       <div>
        <Header/>
       </div>
       <div style={{width:'100%',background:'#f1f2f6',display:'flex',flexDirection:'row'}}>
       <div style={{width:'68%'}}>
       {status?<><DeliveryAddresComponents userData={userData} /></>:
       <ShoppingComponent mobileno={mobileno} />}
       </div>
       <div style={{width:'32%',marginTop:'2%'}}>
       <Payment productCart={productCart}/>
       </div>
       </div>
     
    </div>)
}