import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import {   FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TextField,
  Avatar, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Swal from "sweetalert2";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { postData } from "../services/FetchNodeServices";
import categoryimg from "../../src/assets/category.png"
import { getData, serverURL } from "../services/FetchNodeServices";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

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


export default function DisplayAllBrand()
{
    var classes=useStyles()
    var navigate=useNavigate()
    const [brand,setBand]=useState([])
    const [open,setOpen]=useState(false)
    ///////////////////////////Brand Edit////////////////////////////////////////////////////////

    const [categoryId,setCategoryId]=useState('')
    const [statuscamera,setStatuscamera]=useState(false)
    const [statusbtn,setStatusBtn]=useState(false)
    const [tempicture,setTemPicture]=useState('')
    const [brandName,setBrandName]=useState('')
    const [brandId,setBrandId]=useState('')
    const [image,setImage]=useState({bytes:'',filename:''})
    const [errors,setErrors]=useState({})
    const [categoryList, setcategoryList] = useState([]);

  const fetchAllCategory = async () => {
    var result = await getData("category/display_all_category");
    setcategoryList(result.data);
  };

  useEffect(function () {
    fetchAllCategory();
  }, []);

  const fillAllCategory = () => {
    return categoryList.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>;
    });
  };

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
    if(brandName.length==0)
    {
      error=true
      handleError('pls input the brand Name','brandName')
    }
    if(image.filename.length==0)
    {
      error=true
      handleError('pls select the image','image')
    }
    return error
   }


   const handleSubmit=async()=>{
    var error=validation()
    if(error==false)
    {
    var body={brandid:brandId,categoryid:categoryId,brandname:brandName}
    var response=await postData('brand/edit_brand_data',body)
    if(response.status)
  {
    Swal.fire({
      icon: 'success',
      title: 'Category',
      text: response.message,
      toast:true
    })
    fetchAllBrand()
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
      var formData=new FormData()
      formData.append('brandid',brandId)
      formData.append('image',image.bytes)
      var response=await postData('brand/edit_brand_picture',formData)
      if(response.status)
    {
      Swal.fire({
        icon: 'success',
        title: 'Category',
        text: response.message,
        toast:true
      })
      fetchAllBrand()
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
      setStatusBtn(true)
     setImage({bytes:event.target.files[0],filename:URL.createObjectURL(event.target.files[0])})
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

    const brandForm=()=>{
      return(
      <div className={classes.box}>
         <Grid container spacing={3}>
         <Grid item xs={12} className={classes.right}>
         {statusbtn?<SaveCancelBtn/>:<></>}
         <Button onMouseLeave={()=>setStatuscamera(false)} onMouseEnter={()=>setStatuscamera(true)} component="label" style={{position:'relative'}} onFocus={()=>handleError('','image')} >
        {statuscamera?<div style={{position:'absolute',zIndex:2,backgroundColor:"#f2f2f2",right:10,bottom:10,padding:2,width:26,height:26,borderRadius:13,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <CameraAltIcon style={{color:'#000'}}/>
          </div>:<></>}
              <input onChange={handleImage} type="file" hidden accept="images/*" multiple/>
              <Avatar src={image.filename} style={{width:90,height:90}} alt="Brand" variant="rounded" />
         </Button>
        
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>CategoryId</InputLabel>
              <Select
                value={categoryId}
                label="categoryId"
                onChange={(event) => setCategoryId(event.target.value)}
              >
                {fillAllCategory()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth value={brandName} error={errors.brandName} helperText={errors.brandName}  onFocus={()=>handleError('','brandName')} onChange={(event)=>setBrandName(event.target.value)} label="Brand Name"/>
          </Grid>
         </Grid>
      </div>)}

 /////////////////////////////////////////////////////////////////////////////////////////////////////////

    const fetchAllBrand=async()=>{
   
        var response=await getData('brand/display_all_brand')
        setBand(response.data)
     
       }
         useEffect(function(){
             
         fetchAllBrand()
     
         },[])
    const handleOpen=(rowData)=>{
      setBrandId(rowData.brandid)
      setCategoryId(rowData.categoryid)
      setBrandName(rowData.brandname)
      setImage({filename:`${serverURL}/images/${rowData.image}`,bytes:''})
      setTemPicture(`${serverURL}/images/${rowData.image}`)
       setOpen(true)
     }  
     const handleClose=()=>{
      setOpen(false)
     }    

     const handleDelete=(rowData)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
         var result=await postData('brand/delete_brand',{brandid:rowData.brandid})
         if(result.status)
         {
          Swal.fire(
            'Deleted!',
            'Delete brand has deleted successfyllu',
            'success'
          )
         }
         fetchAllBrand()
        }
      })
     }
  
     
  const showBrandDialog=()=>{
    return(
      <Dialog open={open}>
        <DialogTitle>
          Update Brand
        </DialogTitle>
        <DialogContent>
          {brandForm()}
        </DialogContent>
        <DialogActions>
        <Button onClick={handleSubmit}>Edit Data</Button>
        <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    )
  }

  function displaybrand()
  {
  return (
    <MaterialTable
      title={<div style={{display:"flex",flexDirection:"row"}}>
      <div>
       <img src={categoryimg} width="25"/>
      </div>
      <div style={{fontFamily:'dosis',fontSize:18,fontWeight:'bold',paddingLeft:5}}>
         Brand List
      </div>
      </div>}
      columns={[
        { title: 'categoryid', render:(rowData)=> <div>{rowData.categoryid}/{rowData.categoryname}</div>},
        { title: 'brandid', field: 'brandid' },
        { title: 'brandname', field: 'brandname' },
        { title: 'image',  render:(rowData)=><img src={`${serverURL}/images/${rowData.image}`} width={50}/> },
      ]}
      data={brand}       
      actions={[
        {
          icon: 'edit',
          tooltip: 'edit Brand',
          onClick: (event, rowData) => handleOpen(rowData)
        },
        {
            icon: 'delete',
            tooltip: 'dlete Brand',
            onClick: (event, rowData) => handleDelete(rowData)
          },
          {
            icon: 'add',
            tooltip: 'Add Brand',
            isFreeAction: true,
            onClick: (event) => navigate('/dashboard/brand')
          }

      ]}
    />
  )
}
return(<div className={classes.Reportroot}>
    <div className={classes.Reportbox}>
    {displaybrand()}
    {showBrandDialog()}
    </div>
</div>)
}