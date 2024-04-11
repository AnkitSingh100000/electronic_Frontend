import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../../services/FetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
export default function ProductComponent({data,title})
{ 
    var navigate=useNavigate()
    const theme = useTheme();
  const [value, setValue] =  React.useState(2);

  const matches = useMediaQuery(theme.breakpoints.down('md'));
    var settings = {
                    
    infinite: true,
    speed: 500,
    slidesToShow: matches?3:4,
    slidesToScroll: 2,
    arrows:matches?false:true
   }; 
  /* var data=[{id:0,picture:'p1.webp',brandname:'LG 20L',productname:'Solo Microwave',modelno:'GH67',productdetail:'44 Autocook',price:20000,offerprice:10000,rating:5},
   {id:0,picture:'p2.webp',brandname:'Dell 14',productname:'Vostro',modelno:'FCF5',productdetail:'3405 AMD Ryzen 3',price:33000,offerprice:22000,rating:4},
   {id:0,picture:'p3.webp',brandname:'Croma',productname:'type C',modelno:'454DX',productdetail:'3.5mm Aux 0.39 feet',price:220,offerprice:100,rating:5},
   {id:0,picture:'p4.webp',brandname:'Zunpulse',productname:'Zunvolt',modelno:'ASD76',productdetail:'1000 Watts',price:10000,offerprice:5000,rating:4},
   {id:0,picture:'p5.webp',brandname:'Xaiomi',productname:'A series',modelno:'H3GET',productdetail:'32 inch',price:5300,offerprice:4100,rating:4},
   {id:0,picture:'p6.webp',brandname:'Realme',productname:'11 pro',modelno:'JNJ76',productdetail:'Storage 256',price:30000,offerprice:20000,rating:5},]*/
  const handleClick=(item)=>{
     navigate('/ProductFullDetail',{state:{product:item}})
  }

     const showSlider=()=>{
     return data.map((item)=>{
     return(<div style={{width:'100%'}}>
      <div onClick={()=>handleClick(item)}  style={{width:'16.7vw',cursor:'pointer',background:'#121212',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:10,marginLeft:"2px",margin:5,padding:matches?14:10,height:matches?150:450}}>
      {matches?<></>:  <div style={{color:'#fff',marginLeft:'auto',marginBottom:"-30px"}}><FavoriteBorderIcon/></div>}
         <div>
         <img src={`${serverURL}/images/${item.productpicture}`} style={{width:'95%',height:'auto'}}/>
       </div>
         <div style={{color:'#fff',fontSize:matches?"10px":'1.3vw'}}>{item.brandname} {item.productname} {item.modelno}
        </div>
        <div style={{color:'#fff',marginTop:'2%',width:'100%',fontSize:matches?10:16}}>
         ₹ {item.offerprice} <s style={{color:'grey',fontSize:'1vw'}}>₹{item.price}</s>
        </div>
      <div style={{marginTop:'3%',marginRight:'2%',width:'100%'}}>
      <Rating
      size="small"
      style={{fontSize:17}}
      color="green"
        name="simple-controlled"
        value={4}
      />
         </div>
         </div>
     </div>)
     })
   }
   return(<div style={{width:'75%'}}>
    <div style={{color:'white',fontSize:"1.8vw",padding:12}}>
       {title}
    </div>
   <Slider {...settings}>
     {showSlider()}    
   </Slider>
   </div>)
 }