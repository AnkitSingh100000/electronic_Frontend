import { Grid,FormControl,InputLabel,Select,MenuItem, Divider,object} from "@mui/material";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { serverURL } from "../../../services/FetchNodeServices";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Favorite from '@mui/icons-material/Favorite';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import { useEffect } from "react";
import PlaceIcon from '@mui/icons-material/Place';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ProductDetailComponent(props)
{ 
  var item=props.item
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] =  React.useState(2);


  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

    return(<div>
            <div style={{width:'100%',marginTop:'3%'}}>
          <div style={{display:'flex',flexDirection:'row',width:matches?'100%':'100%'}}>
            <img src={`${serverURL}/images/${item.mainpicture}`} style={{width:"25%",height:"25%",margin:15,padding:15}}></img>
            <div style={{color:'white',fontSize:matches?"2vw":'1.4vw',marginTop:'6%',width:'35%'}}>
          {item.brandname}  {item.productname} {item.modelno}
          <div style={{display:'flex',flexDirection:'row',marginTop:'4%'}}>  
          <span style={{border:'.5px solid #ff02B9', color:" #ff02B9",width:'30%',borderRadius:4,height:'15%',fontSize:'.6vw',display:'flex',justifyContent:'center'}}><b style={{padding:6}}>Dream Price Live</b></span> <span style={{border:'.5px solid #ff02B9', marginLeft:'2%',color:" #ff02B9",width:'30%',borderRadius:4,height:'10%',fontSize:'.6vw',display:'flex',justifyContent:'center'}}><b style={{padding:6}}>Dream Price Live</b></span>
           </div>
            <div style={{fontSize:matches?22:22,fontWeight:500,marginTop:'2%'}}>₹{item.offerprice}</div><div style={{fontSize:12}}>(Incl. all taxes)</div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <span style={{fontSize:15,color:'grey',marginTop:'1%'}}><s>₹{item.price}</s></span>
            <span style={{border:'.5px solid grey',marginLeft:'15%', color:"white",width:'25%',borderRadius:4,height:'10%',fontSize:'.8vw',display:'flex',justifyContent:'center'}}><b style={{padding:8}}>50% Off</b></span>
            </div>
            <div style={{marginTop:'2%',display:'flex',flexDirection:'row'}}>
             <span><PlaceIcon fontSize={matches?"small":"medium"}/></span><span style={{fontSize:'.8vw'}}>Delivery at:<span style={{color:'#12DAA8',borderBottom:'.5px solid #12DAA8'}}>Mumbai,400076</span><div>Standard Delivery by Tomorrow</div></span>
            </div>
            </div>
           <div style={{color:"#fff", marginLeft:"50px" ,marginTop:"35px"}}>  <Checkbox {...label} style={{color:'#fff'}} icon={<FavoriteBorder fontSize={matches?"small":"medium"} />} checkedIcon={<Favorite />} /></div>
          </div> 
          <div style={{width:'9%',marginLeft:'10%'}}>
          <FormGroup style={{color:'#fff'}}>    
      <FormControlLabel  control={<Checkbox  style={{color:'white'}}/>} label="Compare"/>
      </FormGroup>
          </div>
          <div style={{marginTop:'2%'}}>
           <Divider style={{backgroundColor:'#9A9A9A',width:matches?'98%':'75%'}}/>
           </div>
          </div>   
    </div>)
  

   
   
            
 

}