import { Grid,Avatar,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import CategoryIcon from '@mui/icons-material/Category';
import ProductIcon from '@mui/icons-material/ProductionQuantityLimits';
import BannerIcon from '@mui/icons-material/Collections';
import CategoryBannerIcon from '@mui/icons-material/Wallpaper';
import ProductDetailIcon from '@mui/icons-material/Details';
import BrandIcon from '@mui/icons-material/BrandingWatermark';
import { serverURL } from "../services/FetchNodeServices";
import { Login } from "@mui/icons-material";
import { Link, Route,Routes } from "react-router-dom";
import Brand from "../components/Brands";
import Category from "../components/Category";
import DisplayAllCategory from "../components/DisplayAllCategory";
import DisplayAllBrand from "../components/DisplayAllBrand";
import Products from "../components/Products";
import DisplayAllProducts from "../components/DisplayAllProducts";
import ProductDetails from "../components/ProductDetails";
import DisplayAllProductdetails from "../components/DisplayAllProductdetails";
import Banner from "../components/Banner";
import CategoryBanner from "../components/CategoryBanner";
import { useNavigate } from "react-router-dom";


var useStyles = makeStyles({
    root:{
        width:'99%',
        height:'100vh',
        display:'flex',
        //justifyContent:'center'
    },
    box1:{
      
        height:699,
        background:'#f2f2f2',
        padding:10,
        margin:10,
        display:'flex',
        flexDirection:"column",
        justifyContent:'center'
    },
    box2:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        height:70,
        padding:5,
        background:'black',
        color:'white',
        display:'flex',
        alignItems:'center'

    },
    sideBox1:{
        height:80,
        width:350,
        background:'#BDC581',
        marginTop:50,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        borderSpacing:10,
        
    },
    sideBox2:{
        height:600,
        width:350,       
       
    },
    insideBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
       
    },
    button:{
       marginLeft:'15%'
    }
})

export default  function Dashboard(){
    var useStyle = useStyles()
    var navigate=useNavigate()
    var admin = JSON.parse(localStorage.getItem('ADMIN'))
    
    const handleClick=()=>{
        navigate('/adminlogin')
    }
    if(admin)
    {
        
    return (
        <div className={useStyle.root} >
            <Grid container spacing={3} >
                <Grid item xs={12} className={useStyle.heading}>
                  <DashboardCustomizeIcon style={{paddingLeft:5}}/>
                  <h1 style={{marginLeft:5}}>Electronics Hub</h1>
                  <Avatar src={`${serverURL}/images/${admin?.picture}`} style={{marginLeft:'auto'}}/>
                </Grid>
            
                <Grid style={{flexDirection:"column"}} item xs={3} className={useStyle.box1}>
                    <Grid style={{display:"flex",flexDirection:'column',alignItems:'center',margin:10,padding:10,}}>
                    <Avatar src={`${serverURL}/images/${admin?.picture}`} variant="circular" style={{width:100,height:100,padding:4,margin:4,marginBottom:-20}}></Avatar>
                        <h4 style={{marginBottom:1}}>{admin?.username}</h4>
                        <h4 style={{marginTop:1}}>+91 {admin?.mobileno}</h4>
                    </Grid>
                   
                    <Grid className={useStyle.sideBox2}>
                       <List>
                       <ListItemButton onClick={()=>navigate('/dashboard/dashboard')}>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <ProductIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}}>Dashboard</ListItemText>
                            </ListItemButton>

                            <ListItemButton onClick={()=>navigate('/dashboard/displayallcategory')}>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <CategoryIcon/>                               
                            </ListItemIcon>
                                <ListItemText  className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >Category</ListItemText>
                                
                            </ListItemButton>
                            <ListItemButton onClick={()=>navigate('/dashboard/displayallbrand')}>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <BrandIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >Brands</ListItemText>
                            </ListItemButton>

                            <ListItemButton onClick={()=>navigate('/dashboard/displayallproducts')}>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <ProductIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >Products</ListItemText>
                            </ListItemButton>

                            <ListItemButton onClick={()=>navigate('/dashboard/displayallproductdetails')}>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <ProductDetailIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >ProductDetails</ListItemText>
                            </ListItemButton>

                            <ListItemButton onClick={()=>navigate('/dashboard/banner')}>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <BannerIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >Banners</ListItemText>
                            </ListItemButton>

                            <ListItemButton onClick={()=>navigate('/dashboard/categorybanner')}>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <CategoryBannerIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >CategoryBanners</ListItemText>
                            </ListItemButton>
                        </List>
                    </Grid>
             
                    <Grid className={useStyle.button}>
                        <Button onClick={handleClick} sx={{marginBottom:8,width:100}}  variant="contained">Logout</Button>
                    </Grid>
                    
                </Grid>
                
                <Grid item xs={9} className={useStyle.box2}>
                    <Routes>
                <Route element={<Category/>} path="/category"/>
          <Route element={<DisplayAllCategory/>} path="/displayallcategory"/>
          <Route element={<Brand/>} path="/brand"/>
          <Route element={<DisplayAllBrand/>} path="/displayallbrand"/>
          <Route element={<Products/>} path="/products"/>
          <Route element={<DisplayAllProducts/>} path="/displayallproducts"/>
          <Route element={<ProductDetails/>} path="/productdetails"/>
          <Route element={<DisplayAllProductdetails/>} path="/displayallproductdetails"/>
          <Route element={<Banner/>} path="/banner"/>
          <Route element={<CategoryBanner/>} path="/categorybanner"/>
          </Routes>
                </Grid>

                </Grid>

          
        </div>
    )}
    else
    {
        navigate('/adminlogin')
    }
}