import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import { Grid,TextField, Avatar } from "@mui/material";
import { postData } from '../services/FetchNodeServices';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import categoryimg from "../../src/assets/category.png"
import { getData, serverURL } from "../services/FetchNodeServices";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { makeStyles } from "@mui/styles";
var useStyles=makeStyles({
  Reportroot:{
      width:"100%",
      Height:"100%",
      display:"flex",
      justifyContent:"center"
  },
  Reportbox:{
      width:800,
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
  },

  right:{
    display:"flex",
    justifyContent:"right",
    alignItems:"center"
},
  box:{
    width:500,
    height:"auto",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    borderRadius:10,
    padding:10,
    margin:10
},
})

export default function DisplayAllCategory()
{   
  var classes=useStyles()
  var navigate=useNavigate()
  const [category,setCategory]=useState([])
  const [open,setOpen]=useState(false)
  ///////////////////////////Category  edit Action///////////////////////////////////////////////////
  const [CategoryName,setCategoryName]=useState('')
  const [image,setImage]=useState({bytes:'',filename:''})
  const [statuscamera,setStatuscamera]=useState(false)
  const [categoryId,setCategoryId]=useState('')
  const [statusbtn,setStatusBtn]=useState(false)
  const [tempicture,setTemPicture]=useState('')
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

 const handleDelete=(rowData)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async(result) => {
    if (result.isConfirmed) {
  var result=await postData("category/delete_category",{categoryid:rowData.categoryid})
    if(result.status)
    {
      Swal.fire(
        'Deleted!',
        'category has been deleted.',
        'success'
      )
      fetchAllCategory()
    }
    else
    {
      Swal.fire(
        'Deleted!',
        'category does not deleted',
        'error'
      )
    }
  }
  })
 }

 const handleSubmit=async()=>{
  var error=validation()
  if(error==false)
  {
 var body={categoryid:categoryId,categoryname:CategoryName}
 var response= await postData('category/Edit_category_data',body)
if(response.status)
{
  Swal.fire({
    icon: 'success',
    title: 'Category',
    text: response.message,
    toast:true
  })
  fetchAllCategory()
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
  const handleEditPicture=async()=>{
    setStatusBtn(false)
    var error=validation()
    if(error==false)
    {
   var formData= new FormData()
   formData.append('categoryid',categoryId)
   formData.append('image',image.bytes)
   var response= await postData('category/Edit_category_picture',formData)
  if(response.status)
  {
    Swal.fire({
      icon: 'success',
      title: 'Category',
      text: response.message,
      toast:true
    })
    fetchAllCategory()
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
    setStatusBtn(true)
  }

 const handleCancel=()=>{
    setStatusBtn(false)
    setImage({filename:tempicture,bytes:''})
 }

 const SaveCancelBtn=()=>{
  return(<div>
    <Button onClick={handleEditPicture}>Save</Button>
    <Button onClick={handleCancel}>Cancel</Button>
  </div>)
 }

  const categoryForm=()=>{
    return(
          <div className={classes.box}>
              <Grid container spacing={3}>
              <Grid item xs={12} className={classes.right}> 
            {statusbtn?<SaveCancelBtn/>:<></>}
              <Button onMouseLeave={()=>setStatuscamera(false)} onMouseEnter={()=>setStatuscamera(true)} style={{position:"relative"}} component="label"  onFocus={()=>handleError('','image')}>
               {statuscamera?<div style={{position:'absolute',zIndex:2,backgroundColor:"#f2f2f2",right:10,bottom:10,padding:2,width:26,height:26,borderRadius:13,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <CameraAltIcon style={{color:'#000'}}/>
                </div>:<></>}
                      <input hidden onChange={handleImage} type="file" accept="images/*" multiple/>
                      <Avatar src={image.filename} style={{width:100,height:100}} alt="Category" variant="rounded"/>
                   </Button>
                   <div style={{color:"#c0392b",fontSize:12,marginLeft:10,marginTop:6}}>{errors.image}</div>
                  </Grid> 
                  <Grid item xs={12}>
                   <TextField label="Category name" error={errors.categoryName} helperText={errors.categoryName} 
                   onFocus={()=>handleError('','categoryName')} value={CategoryName} onChange={(event)=>setCategoryName(event.target.value)} fullWidth/>
                  </Grid>
                  
              </Grid>
       
      </div>)}
  
  //////////////////////////////////////////////////////////////////////////////////////////////////
  const fetchAllCategory=async()=>{
   
   var response=await getData('category/display_all_category')
   setCategory(response.data)

  }
    useEffect(function(){
        
    fetchAllCategory()

    },[])

  
    const handleOpen=(rowData)=>{
      setCategoryId(rowData.categoryid)
      setCategoryName(rowData.categoryname)
      setImage({filename:`${serverURL}/images/${rowData.image}`,bytes:''})
      setTemPicture(`${serverURL}/images/${rowData.image}`)
      setOpen(true)
    }
    const handleClose=()=>{
      setOpen(false)
    }

    const showCategoryDialog=()=>{
      return(
      <Dialog open={open}>
        <DialogTitle>
          Update category
        </DialogTitle>
        <DialogContent>
          {categoryForm()}
        </DialogContent>
        <DialogActions>
        <Button onClick={handleSubmit}>Edit Data</Button>
        <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>)
    }
    function displaycategory() { 
        return (
          <MaterialTable
            title={<div style={{display:"flex",flexDirection:"row"}}>
            <div>
             <img src={categoryimg} width="25"/>
            </div>
            <div style={{fontFamily:'dosis',fontSize:18,fontWeight:'bold',paddingLeft:5}}>
               Category List
            </div>
            </div>}
            columns={[
              { title: 'Categoryid', field: 'categoryid' },
              { title: 'Categoryname', field: 'categoryname' },
              { title: 'image', render:(rowData)=><img src={`${serverURL}/images/${rowData.image}`} width={50}/>}          
            ]}
            data={category}
            actions={[
              {
                icon: 'edit',
                tooltip: 'edit Category',
                onClick: (event, rowData) => handleOpen(rowData)
              },
              {
              icon: 'delete',
                tooltip: 'delete Category',
                onClick: (event, rowData) => handleDelete(rowData)
              },
              {
                icon: 'add',
                tooltip: 'Add Category',
                isFreeAction: true,
                onClick: (event) =>  navigate('/dashboard/category')
              }
            ]}
          />
        )
      }

    return(<div className={classes.Reportroot}>
      <div className={classes.Reportbox}>
       {displaycategory()}
       {showCategoryDialog()}
      </div>
    </div>)
}
