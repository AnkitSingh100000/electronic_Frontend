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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: matches?false:true,
      };

    var data=["app1.webp","app2.webp","app3.webp","app4.webp","app2.webp"]
    const showSlider=()=>{
        return data.map((item)=>{
            return(<div>
                <img src={`${serverURL}/images/${item}`} style={{width:"97%",borderRadius:10}}/>
            </div>)
        })
    }
    return(<div style={{width:'75%'}}>
        <Slider {...settings}>
          {showSlider()}
        </Slider>
    </div>)
}