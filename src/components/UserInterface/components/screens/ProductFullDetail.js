import Header from "../Header";
import { useStyles } from "./ProjectCss";
import ProductFullDetailVerticalComponent from "../ProductFullDetailVerticalComponent";
import ProductFullDetailDescriptionComponent from "../ProductFullDetailDescriptionComponent";
import AddToCard from "../AddToCardComponent";
import AddToCardComponent from "../AddToCardComponent";
import matchers from "@testing-library/jest-dom/matchers";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddToCard2Component from "../AddToCard2Component";
import Footer from "../Footer";
import { useEffect,useState } from "react";
import SpecificationComponent from "../SpecificationComponent";
import { useLocation } from "react-router-dom";
export default function ProductFullDetail(props)
{
    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);   
    var location=useLocation()
    var p=location.state.product
    // console.log('ankit',p)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    var classes=useStyles()   
    const[product,setProduct]=useState(p)
    const [refresh,setRefresh]=useState(false)
    return(<div className={classes.root}>
       <div style={{position:"sticky",top:0,zIndex:'5'}}>
        <Header/>
       </div>
       <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
       <div style={{width:matches?'96%':'55%'}}>
      <div style={{position:matches?'':'sticky',zIndex:'2',top:100}}>
        <ProductFullDetailVerticalComponent product={product}/>
        </div>
        <div style={{marginTop:matches?'5%':'0%'}}>
        {matches?<ProductFullDetailDescriptionComponent  product={product}/>:<></>}
       </div>
       </div>
       {matches?<></>:<div style={{width:'45%'}}>
      <ProductFullDetailDescriptionComponent setRefresh={setRefresh} refresh={refresh} setProduct={setProduct}  product={product}/>
       </div>}
       </div>
       <div style={{marginTop:'4%'}}>
        <SpecificationComponent/>
       </div>
       <div style={{width:'100%',marginTop:'8%'}}>
      <Footer/>
       </div> 
      {matches?<div style={{position:'sticky',bottom:'0',zIndex:'3'}}>
        <AddToCardComponent/>
       </div>:<></>}
       {matches?<></>:<div style={{position:'sticky',bottom:'0',zIndex:'3'}}>
        <AddToCard2Component/>
    </div>}
    </div>)
}