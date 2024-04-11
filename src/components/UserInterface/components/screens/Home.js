import Header from "../Header";
import MainSlider from "../MainSlider";
import AddComponent from "../AddComponent";
import { useStyles } from "./ProjectCss";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CircleComponent from "../CircleComponent";
import FestiveComponent from "../FestiveComponent";
import ProductComponent from "../ProductComponent";
import HighlightComponent from "../HighlightComponent";
import HighlightComponent2 from "../HighlightComponent2";
import { postData,getData } from "../../../../services/FetchNodeServices";
import { useState,useEffect } from "react";
import MenuComponent from "../MenuComponent";
import TopBrand from "../TopBrand";
import Footer from "../Footer";
import AppleCroma from "../AppleCroma";
import AppleCroma2 from "../AppleCroma2";
import NewCroma from "../NewCroma";
import NewCroma2 from "../NewCroma2";
import FeaturedBrand from "../FeaturedBrand";
import SimpleComponent from "../SimpleComponent";
export default function Home()
{
    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);
      
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [banner,setBanner]=useState([])
    const [product,setProduct]=useState([])
    const [categories,setCategories]=useState([])
    const FetchCategories=async()=>{
        var result= await getData("userinterface/display_all_category")
        setCategories(result.data)
    }

    const FetchDeals=async()=>{
        var result= await postData("userinterface/display_all_productdetail_status",{radio:"Deal of the Day"})
        setProduct(result.data)
    }
    const FetchBanner=async()=>{
        var result= await getData("userinterface/fetch_all_banner")
        setBanner(result.data[0].picture.split(","))
    }
    useEffect(function(){
        FetchBanner()
       FetchCategories()
       FetchDeals()
    },[])
    const classes = useStyles();
    return(<div className={classes.root} >
        <div style={{position:"sticky",top:'0',zIndex:'5'}}>
        <Header/>
        </div>
        <div>
        {matches?<></>:<MenuComponent />}
       </div>
       <div style={{display:'flex',justifyContent:'center'}}>
        <MainSlider banner={banner}/>
       </div>       
       <div style={{display:'flex',justifyContent:'center',marginTop:13}}>
        <AddComponent/>
       </div>
       <div style={{display:'flex',justifyContent:'center',marginTop:10}}>
        <CircleComponent categories={categories} />
       </div>
       <div style={{display:'flex',justifyContent:'center',marginTop:"4%"}}>
       <TopBrand/>
       </div>
       <div style={{display:'flex',justifyContent:'center',marginTop:'4%'}}>
        <FestiveComponent/>
       </div>
       <div style={{display:'flex',justifyContent:'center',marginTop:'4%'}}>
        <ProductComponent data={product} title={"Deal of the Day"}/>
       </div>
       <div style={{display:'flex',justifyContent:'center',marginTop:'4%'}}>
        <HighlightComponent/>
       </div>   
       <div style={{display:'flex',justifyContent:'center',marginTop:'1%'}}>
        <HighlightComponent2/>
       </div> 
       <div style={{display:'flex',justifyContent:'center',marginTop:'5%'}}>
        <AppleCroma/>
       </div> 
       <div style={{display:'flex',justifyContent:'center',marginTop:'1%'}}>
        <AppleCroma2/>
       </div>
       <div style={{display:'flex',justifyContent:'center',marginTop:'5%'}}>
       <NewCroma/>
       </div> 
       <div style={{display:'flex',justifyContent:'center',marginTop:'1%'}}>
       <NewCroma2/>
       </div>
       <div style={{display:'flex',justifyContent:'center',marginTop:'2%'}}>
       <SimpleComponent/>
       </div>
       <div style={{display:'flex',justifyContent:'center',marginTop:'4%'}}>
      <FeaturedBrand/>
       </div>
       <div style={{width:'100%',marginTop:'6%'}}>
      <Footer/>
       </div> 
    
    </div>)
}