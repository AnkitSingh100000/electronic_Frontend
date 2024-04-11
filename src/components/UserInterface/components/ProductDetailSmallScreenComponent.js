import { Grid,FormControl,InputLabel,Select,MenuItem, Divider,object} from "@mui/material";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { serverURL } from "../../../services/FetchNodeServices";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Favorite from '@mui/icons-material/Favorite';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import PlaceIcon from '@mui/icons-material/Place';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ProductDetailSmallScreenComponent()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  
    return(<div style={{marginLeft:'26%',position:'sticky',top:100}}>      
          <div style={{borderRight:'1px solid #9A9A9A',width:'80%',marginTop:'2%',marginLeft:'15%'}}>        
           <div style={{color:'#fff',marginTop:'8%'}}>
        <b style={{fontSize:13}}>Best deals on ACs</b>
           </div>
           <div  style={{color:'#fff',fontSize:14,marginTop:'10%'}}>
           <b> SORT BY </b>
           </div>
           <div style={{marginTop:"2%"}}>
      <Accordion style={{color:'#fff',border:'1px solid white',background:'#191919',borderRadius:10,width:'83%'}}>
        <AccordionSummary     
          expandIcon={<ExpandMoreIcon  style={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"         
        >
          <Typography >FEATURED</Typography>
        </AccordionSummary>
        <AccordionDetails >
       <MenuItem>Price(Hightest first)</MenuItem>
       <MenuItem>Price(Lowest first)</MenuItem>
       <MenuItem>Top Rate</MenuItem>
       <MenuItem>featured</MenuItem>
       <MenuItem>Discount</MenuItem>
       <MenuItem>Latest Arrival</MenuItem>
        </AccordionDetails>
      </Accordion>
           </div>
           <div  style={{color:'#fff',fontSize:14,marginTop:'10%'}}>
           <b> FILTER BY</b>
           </div>
           <div style={{marginTop:'10%'}}>
           <Divider style={{backgroundColor:'#9A9A9A',width:'90%'}}/>
           </div>

           <div style={{marginTop:"10%"}}>
      <Accordion style={{color:'#fff',border:'1px solid #191919',background:'#191919',borderRadius:10,width:'85%'}}>
        <AccordionSummary     
          expandIcon={<ExpandMoreIcon  style={{color:'white',fontSize:30}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"         
        >
          <Typography> <b>CATEGORIES</b></Typography>
        </AccordionSummary>
        <AccordionDetails >
        <FormControlLabel  control={<Checkbox  style={{color:'white'}}/>} label="Invester ACs(57)"/>
      <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="Split ACs(56)" />
      <FormControlLabel  control={<Checkbox style={{color:'white'}}/>} label="3 Star ACs(36)" />
      <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="5 Star Acs(21)" />
      <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="Window Acs(4)" />
        </AccordionDetails>
      </Accordion>
           </div>

           <div style={{marginTop:"12%"}}>
      <Accordion style={{color:'#fff',border:'1px solid #191919',background:'#191919',borderRadius:10,width:'85%'}}>
        <AccordionSummary     
          expandIcon={<ExpandMoreIcon  style={{color:'white',fontSize:30}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"         
        >
          <Typography> <b>PRICE</b></Typography>
        </AccordionSummary>
        <AccordionDetails >
        <FormControlLabel  control={<Checkbox  style={{color:'white', borderWidth:10}}/>} label="30,000-40,000(89)"/>
      <FormControlLabel   control={<Checkbox style={{color:'white'}} />} label="40,000-40,000(79)" />
      <FormControlLabel  control={<Checkbox style={{color:'white'}}/>} label="20,000-30,000(85)"/>
      <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="10,000-20,000(86)" />
        </AccordionDetails>
      </Accordion>
           </div>
 
           <div style={{marginTop:"12%"}}>
      <Accordion style={{color:'#fff',border:'1px solid #191919',background:'#191919',borderRadius:10,width:'85%'}}>
        <AccordionSummary     
          expandIcon={<ExpandMoreIcon  style={{color:'white',fontSize:30}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"         
        >
          <Typography> <b>BRAND</b></Typography>
        </AccordionSummary>
        <AccordionDetails >
        <FormControlLabel  control={<Checkbox  style={{color:'white'}}/>} label="blue star(2)"/>
      <FormControlLabel   control={<Checkbox style={{color:'white'}} />} label="Croma Star(9)" />
      <FormControlLabel  control={<Checkbox style={{color:'white'}}/>} label="VOLTAS(8)"/>
      <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="O GENERAL(3)" />
      <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="DAIKIN(5)" />
        </AccordionDetails>
      </Accordion>
           </div>
          <div style={{marginTop:"12%"}}>
      <Accordion style={{color:'#fff',border:'1px solid #191919',background:'#191919',borderRadius:10,width:'85%'}}>
        <AccordionSummary     
          expandIcon={<ExpandMoreIcon  style={{color:'white',fontSize:30}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"         
        >
          <Typography> <b>DELIVERY</b></Typography>
        </AccordionSummary>
        <AccordionDetails >
        <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="Express delivery" />
      <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="Home Delivery" />
        </AccordionDetails>
      </Accordion>
           </div>
           <div style={{marginTop:"12%"}}>
      <Accordion style={{color:'#fff',border:'1px solid #191919',background:'#191919',borderRadius:10,width:'85%'}}>
        <AccordionSummary     
          expandIcon={<ExpandMoreIcon  style={{color:'white',fontSize:30}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"         
        >
          <Typography> <b>COLOR</b></Typography>
        </AccordionSummary>
        <AccordionDetails >
        <FormControlLabel  control={<Checkbox style={{color:'white'}} />} label="White(4)" />
        </AccordionDetails>
      </Accordion>
           </div>
          </div>      
    </div>)
}