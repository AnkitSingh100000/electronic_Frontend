import { AppBar,Box,Toolbar,Menu,MenuItem,Button} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState,useEffect} from "react";
import { getData,postData } from "../../../services/FetchNodeServices";

                                      

export default function MenuComponent()
{
  const [anchorEl, setAnchorEl] = useState(null)
  const [categories,setCategories]=useState([])
  const [products,setProducts]=useState([])
  const open = Boolean(anchorEl);
  const handleClick = (categoryid,event) => {
    setAnchorEl(event.currentTarget);
    FetchAllProducts(categoryid)
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down('md'));
 
 
const FetchAllProducts=async(categoryid)=>{
  var result= await postData("userinterface/display_all_product_for_menu",{categoryid:categoryid})
  setProducts(result.data)
}
 const FetchCategories=async()=>{
  var result= await getData("userinterface/display_all_category")
  setCategories(result.data)
}


useEffect(function(){ 
 FetchCategories()
},[])

const showMenu=()=>{
  return categories.map((item)=>{
    return  <Button
    onClick={(event)=>handleClick(item.categoryid,event)}
    style={{color:'#fff',fontWeight:'bold'}}
  >
  {item.categoryname}
  </Button>
  })
}
const showMenuItem=()=>{
  return products.map((item)=>{
    return<MenuItem onClick={handleClose}>{item.productname}</MenuItem>
  }) 
}
 return(
  <div>
      <Box sx={{ flexGrow: 1  }}>
    <AppBar position="static" style={{backgroundColor:'#2f3640',height:40,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Toolbar >
     {showMenu()}
      <Menu
      
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{'.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root':{
          backgroundColor: '#000',
          color: '#fff'},
        '.css-6hp17o-MuiList-root-MuiMenu-list':{
          backgroundColor: '#000',
        }}}
        
      >
       
       {showMenuItem() }
      </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  </div>  )
}