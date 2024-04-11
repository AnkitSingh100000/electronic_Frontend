import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../services/FetchNodeServices";

export default function HighlightComponent()
{
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: matches?false:true,
      };

    var data=["h1.webp","h2.webp","h3.webp","h4.webp","h5.webp"]
    const showSlider=()=>{
        return data.map((item)=>{
            return(<div>
                <img src={`${serverURL}/images/${item}`} style={{width:"97%",borderRadius:10}}/>
            </div>)
        })
    }
    return(<div style={{width:'75%'}}>
        <div style={{fontSize:27,padding:12,color:'white',marginBottom:'1%'}}>
            Highlights
        </div>
        <Slider {...settings}>
          {showSlider()}
        </Slider>
    </div>)
}