import { AppBar,Box,Toolbar } from "@mui/material";
import Logo from "../../../assets/croma.svg"
import SearchComponent from "./SearchComponent";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import React,{ useState,useEffect } from "react";
import { getData,postData, serverURL } from "../../../services/FetchNodeServices";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
export default function Header()
{const theme = useTheme();
  var navigate=useNavigate()
  var userData=JSON.parse(localStorage.getItem("User"))
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  var cart=useSelector(state=>state.mycart)
  var productCart=Object.values(cart)
  const [categories,setCategories]=useState([])
  const [state, setState] = useState({
    left: false,  
  });

  const toggleDrawer =
  (anchor ,open) =>
  (event) => {
    if (
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <div style={{color:'#fff',width:'100%',marginLeft:'12%',marginBottom:'2%',padding:12}}><span style={{marginRight:'3%'}}><AssessmentIcon style={{marginBottom:'-2%'}}/></span><b>Category List</b></div>
        {categories.map((text, index) => (        
          <ListItem key={text.categoryid} disablePadding>
          <ListItemButton>           
              <ListItemIcon>               
             <img src={`${serverURL}/images/${text.image}`} style={{width:30}}></img>
              </ListItemIcon>
              <ListItemText primary={text.categoryname} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

 const FetchCategories=async()=>{
  var result= await getData("userinterface/display_all_category")
  setCategories(result.data)
}

const handleClick=()=>{
  navigate('/home')
}
useEffect(function(){ 
 FetchCategories()
},[])
const handleAccount=()=>{
  navigate('/myaccount')
}

const handleCart=()=>{
  navigate('/cart')
}

 return(
      <Box style={{position:"sticky",top:'0',zIndex:'5',flexGrow: 1,background:'#000'}}>
    <AppBar  position="static" style={{background:matches?'#000':'url(http://media.croma.com/image/upload/v1697816449/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Desktop_-_Navratri_opt.3_glsdyl.jpg)',height:"auto"}}>
        <Toolbar>
            <div onClick={handleClick} style={{width:300,display:'flex',justifyContent:'right',cursor:'pointer'}}>
          <img src={Logo}/>
          </div>
          {matches?<></>:
          <div style={{marginLeft:'10%',width:'48%'}}>
            <SearchComponent/>
          </div>}
       <div style={{marginLeft:matches?100:0,display:'flex',justifyContent:"space-between",width:180,marginTop:'1%'}}>
        <div style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <AccountCircle onClick={handleAccount}  style={{fontSize:30,cursor:'pointer'}}/> 
        <div style={{color:'#fff',fontSize:11}}>
         {userData?.username}
        </div>
        </div>    
        <Badge color="secondary"  badgeContent={productCart?.length} showZero>
        <ShoppingCart onClick={handleCart}  style={{fontSize:30,cursor:'pointer'}}/>
        </Badge>
       </div>
        </Toolbar>
        <div style={{display:'flex',justifyContent:'center',marginBottom:10}}>
   {matches?
   <> 
    <React.Fragment key={'left'}>
    <MenuIcon style={{marginRight:'10%',marginTop:'2%',color:'#fff'}}
       onClick={toggleDrawer('left', true)}
       />
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            sx={{'.css-4t3x6l-MuiPaper-root-MuiDrawer-paper':{
              backgroundColor: '#000',
              color: '#fff'}}}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
       
   <SearchComponent/></>:<></>}
 </div>
      </AppBar>
    </Box>
    )
}