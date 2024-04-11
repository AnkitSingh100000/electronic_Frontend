import { AppBar,Box,Toolbar,Menu,MenuItem,Button} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../services/FetchNodeServices";

export default function AddToCard2Component()
{
 return(
  <div>
      <Box sx={{ flexGrow: 1  }}>
    <AppBar position="static" style={{backgroundColor:'#353535',height:60,display:'flex',alignItems:"start",justifyContent:"start"}}>
        <Toolbar style={{width:'201.5vh'}}>
            <div style={{width:'36vh'}}>
        <img src={`${serverURL}/images/i1.webp`} style={{marginLeft:'80%',width:30,height:25}} ></img>
            </div>
            <div style={{width:'100vh'}}>
            <div>
            IFB 23BC4 23L Convection Microwave Oven with 71 Autocook Menus (Black Floral)
            </div>
            <div>
            12,169.00
            </div>
            </div>
            <div style={{width:'80vh',display:'flex',flexDirection:'row',alignItems:'center'}}>
    <div style={{width:'20vh',border:'1px solid #12DAA8',background:'#12DAA8',height:30,borderRadius:10,padding:6,display:'flex',justifyContent:'center',fontSize:14}}>
    <div style={{display:'flex',flexDirection:'row'}}>
    <div style={{padding:4,color:'#000'}}>
        <b>Buy Now</b>
    </div>
    </div>
    </div>
    <div style={{width:'20vh',border:'1px solid #191919',marginLeft:'2vh',background:'#191919',height:30,borderRadius:10,padding:6,display:'flex',justifyContent:'center',fontSize:14}}>
    <div style={{display:'flex',flexDirection:'row'}}>
    <div style={{padding:4,color:'#fff'}}>
        <b>Add To Card</b>
    </div>
    </div>
    </div>
    </div>
        </Toolbar>
      </AppBar>
    </Box>
  </div>  )
}