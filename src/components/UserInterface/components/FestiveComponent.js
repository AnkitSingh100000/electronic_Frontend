import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../../services/FetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function FestiveComponent()
{
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    var settings = {
                    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows:matches?false:true
   };
  
   var data=["f1.webp","f2.webp","f3.webp","f4.webp","f5.webp","f6.webp"]
   const showSlider=()=>{
     return data.map((item)=>{
     return(<div style={{width:'100%'}}>
         <img src={`${serverURL}/images/${item}`} style={{width:'95%',height:'100%',marginLeft:"6px"}}/>
     </div>)
     })
   }
   return(<div style={{width:'75%'}}>
    <div style={{color:'white',fontSize:matches?14:27,padding:12}}>
        Festive Fiesta Deals
    </div>
   <Slider {...settings}>
     {showSlider()}    
   </Slider>
   </div>)
 }