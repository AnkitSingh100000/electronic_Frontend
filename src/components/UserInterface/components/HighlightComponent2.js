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

    var data=["h11.webp","h22.webp","h33.webp","h44.webp","h55.webp"]
    const addSlider=()=>{
        return data.map((item)=>{
            return(<div>
                <img src={`${serverURL}/images/${item}`} style={{width:"97%",borderRadius:10}}/>
            </div>)
        })
    }
    return(<div style={{width:'75%'}}>
        <Slider {...settings}>
          {addSlider()}
        </Slider>
    </div>)
}