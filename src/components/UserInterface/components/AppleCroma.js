import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../services/FetchNodeServices";

export default function AppleCroma()
{
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: matches?false:true,
      };

    var data=["ap1.webp","ap2.webp"]
    const showSlider=()=>{
        return data.map((item)=>{
            return(<div>
                <img src={`${serverURL}/images/${item}`} style={{width:"98%",borderRadius:10}}/>
            </div>)
        })
    }
    return(<div style={{width:'75%'}}>
        <div style={{fontSize:27,padding:12,color:'white',marginBottom:'1%'}}>
            Apple At Croma
        </div>
        <Slider {...settings}>
          {showSlider()}
        </Slider>
    </div>)
}