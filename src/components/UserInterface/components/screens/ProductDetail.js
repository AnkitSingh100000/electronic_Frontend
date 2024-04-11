import Header from "../Header"
import ProductDetailComponent from "../ProductDetailComponent";
import ProductDetailSmallScreenComponent from "../ProductDetailSmallScreenComponent";
import { useStyles } from "./ProjectCss";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SortFilterComponent from "../SortFilterComponent";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
export default function ProductDetail()
{
   var location=useLocation()
   var data=location?.state?.result
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));
    var classes=useStyles()   

    const showproducts=()=>{
      return data.map((item)=>{
         return <ProductDetailComponent item={item}/>
      })
    }
    return(<div className={classes.root}>
       <div style={{position:"sticky",top:'0',zIndex:'2'}}>
        <Header/>
       </div>
       <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
      {matches?<></>:<div style={{width:'35%'}}>
       <ProductDetailSmallScreenComponent />
       </div>}
       <div style={{width:matches?'98%':'65%',padding:matches?5:0}}>
        {showproducts()} 
       </div> 
       </div> 
       <div style={{width:'100%',marginTop:'8%'}}>
      <Footer/>
       </div> 
      {matches?<div style={{position:'sticky',bottom:'0',zIndex:'3'}}>
         <SortFilterComponent/>
       </div>:<></>}
   
    </div>)
}