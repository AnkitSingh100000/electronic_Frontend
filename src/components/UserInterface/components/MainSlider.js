import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../../services/FetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
 
const useStyles = makeStyles({
  
    dots:{
      '& .slick-dots li.slick-active button::before': {
        color:'#fffff',
        opacity:1
      },
      '& .slick-dots li button::before': {
        color:'#fff',
        fontSize:'9px',
        opacity:0.4,
      },
      '& .slick-dots li ':{

        margin:'20px -1px',
      },
      marginBottom:10,
  },
});

export default function MainSlider({banner})
{
    const theme = useTheme();
    var useStyle=useStyles()
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    var settings = {
       
    infinite: true,
    speed: 500,
    dots:matches?false:true,
    slidesToShow: 1,
    autoplay:'true',
    autospeed:1,
    slidesToScroll: 1,
    arrows:false
  }

 // var data=["b1.webp","b2.webp","b3.webp","b4.webp","b5.gif","b6.webp"]
  const showSlider=()=>{
    return banner.map((item)=>{
    return(<div>
        <img src={`${serverURL}/images/${item}`} style={{width:'100%'}}/>
    </div>)
    })
  }
  return(<div style={{width:'100%'}}>
  <Slider {...settings} className={useStyle.dots}>
    {showSlider()}    
  </Slider>
  </div>)
}