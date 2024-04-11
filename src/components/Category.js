import { useState } from "react";
import { AvTimer, Height } from "@mui/icons-material";
import { Grid,Button,TextField, Avatar } from "@mui/material";
import categoryicon from '../../src/assets/category.png'
import Heading from "./projectComponent/Heading";
import { postData } from '../services/FetchNodeServices';
import Swal from "sweetalert2";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
  var useStyles=makeStyles({             
    root:{
        width:"100%",
        Height:"100%",
        display:"flex",
        justifyContent:"center"
    },
    box:{
        width:500,
        height:"auto",
        backgroundColor:"#ecf0f1",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        borderRadius:10,
        padding:10,
        margin:10
    },
    center:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
 })
export default function Category()
{
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    const useStyle=useStyles()
    const [CategoryName,setCategoryName]=useState('')
    const [image,setImage]=useState({bytes:'',filename:''})
    const [errors,setErrors]=useState({})
    const handleError=(error,label)=>{
      setErrors((prev)=>({...prev,[label]:error}))
    }
    
   const validation=()=>{
    var error=false
    if(CategoryName.length==0)
    {
      error=true
      handleError('pls input the category Name','categoryName')
    }
    if(image.filename.length==0)
    {
      error=true
      handleError('pls select the image','image')
    }
    return error
   }
   const handleReset=()=>{
    setCategoryName('')
    setImage({bytes:'',filename:''})
   }
    const handleSubmit=async()=>{
      var error=validation()
      if(error==false)
      {
     var formData= new FormData()
     formData.append('categoryname',CategoryName)
     formData.append('image',image.bytes)
     var response= await postData('category/submit_category',formData)
    if(response.status)
    {
      Swal.fire({
        icon: 'success',
        title: 'Category',
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
    const handleImage=(event)=>{
      setImage({bytes:event.target.files[0],filename:URL.createObjectURL(event.target.files[0])})
    }
    return(
    <div className={useStyle.root}>
        <div className={useStyle.box}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
               <Heading image={categoryicon} caption="New Category" link='/dashboard/displayallcategory'/>
              </Grid>
                <Grid item xs={12}>
                 <TextField label="Category name" error={errors.categoryName} helperText={errors.categoryName} 
                 onFocus={()=>handleError('','categoryName')} value={CategoryName} onChange={(event)=>setCategoryName(event.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={6}>
                 <Button component="label" fullWidth onFocus={()=>handleError('','image')} variant="contained">
                    <input hidden onChange={handleImage} type="file" accept="images/*" multiple/> 
                    Category Images
                 </Button>
                 <div style={{color:"#c0392b",fontSize:12,marginLeft:10,marginTop:6}}>{errors.image}</div>
                </Grid>
                <Grid item xs={6} className={useStyle.center}> 
                <Avatar src={image.filename} alt="Category" variant="rounded"/>
                </Grid> 
              <Grid item xs={6}>
                <Button fullWidth variant="contained" onClick={handleSubmit}>Submit</Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" onClick={handleReset}>Reset</Button>
              </Grid>
            </Grid>
        </div>
    </div>)}