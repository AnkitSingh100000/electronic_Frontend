import { FormControl,InputLabel,Select,MenuItem,Grid,TextField,Button, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import Heading from "./projectComponent/Heading";
import categoryicon from '../../src/assets/category.png'
import { getData,postData } from "../services/FetchNodeServices";
import { SevenK } from "@mui/icons-material";
var useStyles=makeStyles({
    root:{
        width:'100%',
        height:'100%',
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    },
    box:{
        width:500,
        height:"auto",
        padding:10,
        margin:10,
        backgroundColor:"#f2f2f2"
    },
    center:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    }
})
export default function Products()
{
    var useStyle=useStyles()
    const [Productname,setProductName]=useState('')
    const [categoryId,setCategoryId]=useState('')
    const [brandId,setBrandId]=useState('')
    const [categoryList,setcategoryList]=useState([])
    const [brandList,setBrandList]=useState([])
    const [errors,setErrors]=useState({})
    const [Picture,setPicture]=useState({bytes:'',filename:''})
   
    
    const fetchAllCategory=async()=>{
        var result= await getData('category/display_all_category')
         setcategoryList(result.data)
    }

    useEffect(function(){

      fetchAllCategory()

    },[])

    const fillAllCategory=()=>{
      return categoryList.map((item)=>{
        return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
      })
    }
    const handlePicture=(event)=>{
        setPicture({bytes:event.target.files[0],filename:URL.createObjectURL(event.target.files[0])})
    }
    
    const handleError=(error,label)=>{
        setErrors((prev)=>({...prev,[label]:error}))
      }
      const validation=()=>{
      var error=false
      if(categoryId.length==0)
      {
        error=true
        handleError('pls input the category Id','categoryId')
      }
      if(brandId.length==0)
      {
        error=true
        handleError('pls input the brand Id','brandId')
      }
      if(Productname.length==0)
      {
        error=true
        handleError('pls input the product Name','Productname')
      }
      if(Picture.filename.length==0)
      {
        error=true
        handleError('pls select the picture','Picture')
      }
      return error
     }

    const handleSubmit= async()=>{
        var error=validation()
        if(error==false)
        {
        var formData= new FormData()
        formData.append('categoryid',categoryId)
        formData.append('brandid',brandId)
        formData.append('productname',Productname)
        formData.append('picture',Picture.bytes)
        var response=await postData('product/submit_product',formData)
        if(response.status)
        {
          Swal.fire({
            icon: 'success',
            title: 'product',
            text: response.message,
            toast:true
          })
        }
        else
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            toast:true
          })
        }
          }
    }

    const handleReset=()=>{
        setCategoryId('')
        setBrandId('')
        setProductName('')
        setPicture({bytes:'',filename:''})
       }

 const fillBrands=()=>{
    return brandList.map((item)=>{
      return <MenuItem value={item.brandid}>{item.brandname}</MenuItem>
    })
 }     

const fetchBrandsByCategory=async(cid)=>{
  var result =await postData('brand/display_all_brand_by_category',{categoryid:cid})
  setBrandList(result.data)
}

const handleCategoryChange=(event)=>{
   setCategoryId(event.target.value)
   fetchBrandsByCategory(event.target.value)
}

  return(<div className={useStyle.root}>
        <div className={useStyle.box}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
               <Heading image={categoryicon} caption="New Products" link='/dashboard/displayallproducts'/>
              </Grid>
        <Grid item xs={6}>

        <FormControl fullWidth>
        <InputLabel>CategoryId</InputLabel>
        <Select 
          value={categoryId}
          label="categoryId"
          onChange={handleCategoryChange}
        >
        {fillAllCategory()}
        </Select>
        </FormControl>
           </Grid>
           <Grid item xs={6}>

        <FormControl fullWidth>
        <InputLabel>BrandId</InputLabel>
        <Select
          value={brandId}
          label="barndId"
          onChange={(event)=>setBrandId(event.target.value)}
        >
       {fillBrands()}
       </Select>
       </FormControl>
           </Grid>
           <Grid item xs={12}>
              <TextField  value={Productname} error={errors.Productname} helperText={errors.Productname}  onFocus={()=>handleError('','Productname')} onChange={(event)=>setProductName(event.target.value)} fullWidth variant="outlined" label="Products Name" />
           </Grid>
           <Grid item xs={6}>
            <Button  onFocus={()=>handleError('','Picture')} component="label" fullWidth variant="contained">
                <input onChange={handlePicture}  type="file" hidden accept="images/*" multiple/>
                Products picture
            </Button>
            <div style={{color:"#c0392b",fontSize:12,marginLeft:10,marginTop:6}}>{errors.Picture}</div>
           </Grid>
           <Grid item xs={6} className={useStyle.center} >
             <Avatar src={Picture.filename} alt="Products" variant="circular" style={{width:60,height:60}} />
           </Grid>
           <Grid item xs={6}>
              <Button component="label" onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
           </Grid>
           <Grid item xs={6}>
             <Button component="label"  onClick={handleReset} fullWidth variant="contained">Reset</Button>
           </Grid>
        </Grid>
        </div>
    </div>)
}