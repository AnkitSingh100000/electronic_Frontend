import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../services/FetchNodeServices";

export default function TopBrand()
{
    const theme = useTheme();
  const matches_md= useMediaQuery(theme.breakpoints.down('md'));
  const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));

  var settings = {
                    
    infinite: true,
    speed: 500,
    slidesToShow: matches_md?5:matches_sm?4:8,
    slidesToScroll: 2,
    arrows: matches_md || matches_sm?false:true,
   };

   var data=["bd1.webp","bd2.webp","bd3.webp","bd4.webp","bd5.webp","bd6.webp","bd7.webp","bd8.webp","bd9.webp","bd10.webp",]
   const AddBrand=()=>{
    return data.map((item)=>{
        return(<div style={{width:'100%'}}>
          <div style={{width:'90%',height:'90%',borderRadius:'45%',display:'flex',justifyContent:'center',flexDirection:'row'}}>
          <img src={`${serverURL}/images/${item}`} style={{width:'98%',margin:4,marginRight:'3%'}}></img>
          </div>
        </div>)
    })
   }

    return(<div style={{width:'75%'}}>
        <div style={{color:'white',fontSize:27,padding:12}}>
       Top Brands
    </div>
   <Slider {...settings}>
    {AddBrand()}    
  </Slider>
    </div>)
}