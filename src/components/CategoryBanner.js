import { Paper,FormControl,InputLabel,Select,MenuItem,Grid,TextField,Button, Avatar,FormLabel,RadioGroup,FormControlLabel, Radio, hslToRgb} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReactQuill from "react-quill";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import 'react-quill/dist/quill.snow.css'
import Heading from "./projectComponent/Heading";
import categoryicon from '../../src/assets/category.png'
import { getData,postData } from "../services/FetchNodeServices";
import { SevenK } from "@mui/icons-material";
import {DropzoneArea} from 'material-ui-dropzone'
var useStyles=makeStyles({
    root:{
        width:'100%',
        height:'100%',
        display:"flex",
        justifyContent:"center"
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

export default function CategoryBanner()
{
    var useStyle=useStyles()
    const [errors,setErrors]=useState({})
    const [Picture,setPicture]=useState({bytes:'',filename:''})
    const [files,setFiles]=useState([])
    const [categoryId,setCategoryId]=useState('')
    const [brandId,setBrandId]=useState('')
    const [categoryList,setcategoryList]=useState([])
    const [brandList,setBrandList]=useState([])
    
    const fetchAllCategory=async()=>{
        var result= await getData('category/display_all_category')
         setcategoryList(result.data)
    }

    useEffect(function(){

      fetchAllCategory()

    },[])

    const fillAllCategory=()=>{
      return categoryList.map((item)=>{
        return <MenuItem value={item.categoryid} >{item.categoryname}</MenuItem>
      })
    }
   
    const handlePicture=(event)=>{
      //  setPicture({bytes:event.target.files[0],filename:URL.createObjectURL(event.target.files[0])})
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
      if(files.length==0)
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
        files.map((file,index)=>{
        formData.append('picture'+index,file)
      })
        var response=await postData('categorybanner/submit_categorybanner',formData)
        if(response.status)
        {
          Swal.fire({
            icon:'success',
            title:'categorybanner',
            text:response.message,
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
        setPicture({bytes:'',filename:''})
       }

 const fillBrands=(   )=>  {
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
          <Paper elevation={3} className={useStyle.box}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
               <Heading image={categoryicon} caption="New CategoryBanners" link=''/>
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
<DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setFiles(files)}
  filesLimit={7}
  fullWidth
/>
</Grid>
<Grid item xs={6}>
              <Button component="label" onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
           </Grid>
           <Grid item xs={6}>
             <Button component="label"  onClick={handleReset} fullWidth variant="contained">Reset</Button>
           </Grid>    
        </Grid>
          </Paper>
    </div>)
}