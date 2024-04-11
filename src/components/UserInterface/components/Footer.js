import { Divider, Input, TextField, colors } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { VerticalAlignBottom } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styled from "@emotion/styled";
export default function Footer()
{
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    return(<div style={{display:'flex',flexDirection:'row'}}>
        <div style={{width:'32%',borderRight:'1px solid #9A9A9A'}}>
            <div style={{marginLeft:matches?'20%':'28%'}}>
            <div style={{color:'#fff',fontSize:matches?8:14}}><b>CONNECT WITH US</b></div>
            {matches?<></>:<div style={{marginTop:'1%'}}>
             <TextField size="small" placeholder="Enter Email ID" style={{background:'#fff',width:'30ch',borderRadius:'3%'}}/>
            </div>}
            <div style={{marginTop:'5%'}}>
             <span><YouTubeIcon fontSize={matches?"":"large"} style={{color:'#fff'}}/></span><span style={{marginLeft:'6%'}}><FacebookIcon  fontSize={matches?"":"large"} style={{color:'#fff'}}/></span><span  style={{marginLeft:'6%'}}><InstagramIcon  fontSize={matches?"":"large"} style={{color:'#fff'}}/></span><span  style={{marginLeft:'6%'}}><TwitterIcon  fontSize={matches?"":"large"} style={{color:'#fff'}}/></span><span  style={{marginLeft:'6%'}}>< LinkedInIcon  fontSize={matches?"":"large"} style={{color:'#fff'}}/></span>
            </div> 
             <div style={{marginTop:'10%',color:'#fff',fontSize:matches?7:14,width:'60%'}}>
             CopyRight 2023 Croma .All right reserved
            </div>
            <div style={{color:'#000',marginTop:"15%"}}>
                .
            </div>
            </div>
        </div>


        <div style={{width:'33%',borderRight:'1px solid #9A9A9A'}}>
            <div style={{marginLeft:'14%'}}>
            <div style={{color:'#fff',fontSize:matches?8:14}}><b>USEFUL LINKS</b></div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>About Croma</b></div><div><b>Franchise </b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Help and Support</b></div><div><b>Site Map</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>FAQs</b></div><div><b>Career Croma</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Buying Gulde</b></div><div><b>Tern of USe</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Return Policy</b></div><div><b>Franchise </b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>b2b Order</b></div><div><b>Unboxed</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Croma</b></div><div><b>Ranchise Link</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>E-Waste</b></div><div><b>Gift Card</b></div>
            </div>
            </div>
        </div>
        
        
        <div style={{width:'33%'}}>
            <div style={{marginLeft:'14%'}}>
            <div style={{color:'#fff',fontSize:matches?8:14}}><b>PRODUCTS</b></div>
           <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Televission & Access</b></div><div><b>Grooming</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Home Appliances </b></div><div><b>  Camera's </b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Phone and Wearables</b></div><div><b>Smart Devices</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Computer & Tablets</b></div><div><b>Gaming</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Kitchen Appliances</b></div><div><b>Accessories </b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Audio & Vedio</b></div><div><b>Top Brands</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Health & Fitness</b></div><div><b>Link</b></div>
            </div>
            <div style={{fontSize:matches?7:12,color:'#fff',padding:2,width:'100%',marginTop:'2%',display:'flex',flexDirection:'row'}}>
            <div style={{width:'52%'}}><b>Fitness Work</b></div><div><b></b></div>
            </div>
            </div>
        </div>
    </div>)
}