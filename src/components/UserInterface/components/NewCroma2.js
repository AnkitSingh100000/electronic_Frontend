import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../services/FetchNodeServices";

export default function NewCroma2()
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

    var data=["nn1.webp","nn2.webp","nn3.webp","nn4.webp"]
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