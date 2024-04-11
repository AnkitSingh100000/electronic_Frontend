import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../services/FetchNodeServices";
export default function CircleComponent({categories})
{
    const theme = useTheme();
  const matches_md= useMediaQuery(theme.breakpoints.down('md'));
  const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    var settings = {
                    
    infinite: true,
    speed: 500,
    slidesToShow: matches_md?5:matches_sm?4:8,
    slidesToScroll: 1,
    arrows: matches_md ||matches_sm?false:true,
   };
  //var data=[{id:0,icon:'c0.png',categoryname:"What's New"},{id:1,icon:'c1.png',categoryname:"Mobiles"},{id:2,icon:'c2.png',categoryname:"Televission"},{id:3,icon:'c3.png',categoryname:"Laptops"},{id:4,icon:'c4.png',categoryname:"Headphones"},{id:5,icon:'c5.png',categoryname:"Referigerators"},{id:6,icon:'c6.png',categoryname:"Home Theaters"},{id:7,icon:'c7.png',categoryname:"Air Conditioners"},{id:8,icon:'c8.png',categoryname:"Speakers"},{id:9,icon:'c9.png',categoryname:"Washing machines"}]
  const AddSlider=()=>{
    return categories.map((item)=>{
    return(<div style={{width:'100%'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'100%'}}>
    <div style={{width:'90%',height:'90%',borderRadius:'45%'}}>
        <img src={`${serverURL}/images/${item.image}`}  style={{width:'98%',margin:'5px',marginRight:"6px"}}/>
    </div>
    {matches_md || matches_sm?<></>:
    <div style={{color:'#fff',fontSize:15}}>
        {item.categoryname}     
    </div>}
            </div>
            </div>)
    })
  }

  return(<div style={{width:'75%'}}>
  <Slider {...settings}>
    {AddSlider()}    
  </Slider>
  </div>)
}