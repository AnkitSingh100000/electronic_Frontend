import { Grid,Avatar,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ListSubheader from '@mui/material/ListSubheader';
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


var useStyles = makeStyles({
    root:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        //justifyContent:'center'
    },
    box1:{
        width:500,
        height:669,
        background:'#FAEBD7',
        padding:10,
        margin:10,
        display:'flex',
        flexDirection:"column",
        justifyContent:'center'
    },
    box2:{
        background:'#f1f2f6',
        height:669
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
       marginTop:30
    },
    insideBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
       
    },
    button:{
        display:'flex',
        justifyContent:'center',
        borderRadius:5
    }

})



export default  function Dashboard(){
    var useStyle = useStyles()
    return (
        <div>
            <Grid container className={useStyle.root}>
                <Grid item xs={12} className={useStyle.heading}>
                    <DashboardCustomizeIcon style={{paddingLeft:5}}/>
                    <h1 style={{marginLeft:5}}>Electronics Hub</h1>
                    <Avatar style={{marginLeft:'auto'}}/>
                </Grid>


                <Grid container style={{display:'flex'}}>

                <Grid style={{flexDirection:"column"}} item xs={3} className={useStyle.box1}>

                    <Grid className={useStyle.sideBox1}>
                        <Avatar style={{height:60,width:60,marginLeft:10}}/>
                        <h3 style={{marginLeft:30}}>Hello Electro</h3>      
                    </Grid>
                   
                    <Grid className={useStyle.sideBox2}>
                       <List>
                            <ListSubheader sx={{borderRadius:5,justifyContent:'center',display:'flex'}}>
                                List Of Electronics
                            </ListSubheader>
                            
                            <ListItemButton>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <CategoryIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >Category</ListItemText>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <BrandIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >Brands</ListItemText>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <ProductIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >Products</ListItemText>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <ProductDetailIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >ProductDetails</ListItemText>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <BannerIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >Banners</ListItemText>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon sx={{marginLeft:2}}>
                                <CategoryBannerIcon />
                            </ListItemIcon>
                                <ListItemText className={useStyle.insideBox} sx={{justifyContent:'start',display:'flex'}} >CategoryBanners</ListItemText>
                            </ListItemButton>
                        </List>
                    </Grid>
             
                    <Grid className={useStyle.button}>
                        <Button sx={{marginBottom:8,width:100}}  variant="contained">Logout</Button>
                    </Grid>
                    

                </Grid>
                


                <Grid item xs={9} className={useStyle.box2}>

                </Grid>

                </Grid>

            </Grid>
        </div>
    )
}