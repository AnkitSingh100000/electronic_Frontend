import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import {FormControl,InputLabel,Select,MenuItem,Grid,TextField,Avatar,FormLabel,RadioGroup,FormControlLabel, Radio, hslToRgb } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import {DropzoneArea} from 'material-ui-dropzone'
import Heading from "./projectComponent/Heading";
import categoryicon from '../../src/assets/category.png'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { postData } from "../services/FetchNodeServices";
import categoryimg from "../../src/assets/category.png"
import { getData, serverURL } from "../services/FetchNodeServices";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import {Parser} from "html-to-react"
var useStyles=makeStyles({
    Reportroot:{
        width:"100%",
        Height:"90%",
        display:"flex",
        justifyContent:"center"
    },
    Reportbox:{
        width:'100%',
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
      width:'100%',
      height:"auto",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      borderRadius:10,
      padding:10,
      margin:10
  },
  })
  
export default function DisplayAllProductdetails()
{
    var classes=useStyles()
    var navigate=useNavigate()
    const [Productdetail,setProductdetail]=useState([])
    const [open,setOpen]=useState(false)
    const [openPicture,setOpenPicture]=useState(false)
///////////////////////////ProductDetail//////////////////////////////////////////////
const [productId,setProductId]=useState('')
const [categoryId,setCategoryId]=useState('')
const [brandId,setBrandId]=useState('')
const [modelNo,setModelNo]=useState('')
const [color,setColor]=useState('')
const [stock,setStock]=useState('')
const [HSN,setHSN]=useState('')
const [radio,setRadio]=useState('')
const [discription,setDiscription]=useState('')
const [price,setPrice]=useState('')
const [offerPrice,setOfferPrice]=useState('')
const [errors,setErrors]=useState({})
const [Picture,setPicture]=useState({bytes:'',filename:''})
const [categoryList,setcategoryList]=useState([])
const [brandList,setBrandList]=useState([])
const [productList,setProductList]=useState([])
const [files,setFiles]=useState([])
const [statuscamera,setStatuscamera]=useState(false)
const [tempicture,setTemPicture]=useState('')
const [productdetailId,setProductdetailId]=useState('')



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
  if(productId.length==0)
  {
    error=true
    handleError('pls input the product Id','productId')
  }
  if(modelNo.length==0)
  {
    error=true
    handleError('pls input the model no.','modelNo')
  }
  if(discription.length==0)
  {
    error=true
    handleError('pls input the discription','discription')
  }
  if(color.length==0)
  {
    error=true
    handleError('pls input the color','color')
  }
  if(price.length==0)
  {
    error=true
    handleError('pls input the price','price')
  }
  if(offerPrice.length==0)
  {
    error=true
    handleError('pls input the offerprice','offerprice')
  }
  if(stock.length==0)
  {
    error=true
    handleError('pls input the stock','stock')
  }
  if(HSN.length==0)
  {
    error=true
    handleError('pls input the hsn','HSN')
  }
  if(radio.length==0)
  {
    error=true
    handleError('pls input the radio','radio')
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
  var body={
    'productdetailid':productdetailId,
  'categoryid':categoryId,
  'brandid':brandId,
  'productid':productId,
  'modelno':modelNo,
  'discription':discription,
  'color':color,
  'price':price,
  'offerprice':offerPrice,
  'stock':stock,
  'hsn':HSN,
  'radio':radio
  }
  var response=await postData('productdetail/edit_productdetail_data',body)
  if(response.status)
  {
    Swal.fire({
      icon: 'success',
      title: 'productdetail',
      text: response.message,
      toast:true
    })
    fetchAllProductdetail()
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


const handleEditPicture= async()=>{
 
    var error=validation()
    if(error==false)
    {
    var formData= new FormData()
    formData.append('productdetailid',productdetailId)
    formData.append('picture',Picture.bytes)
    var response=await postData('productdetail/edit_productdetail_picture',formData)
    if(response.status)
    {
      Swal.fire({
        icon: 'success',
        title: 'productdetail',
        text: response.message,
        toast:true
      })
      fetchAllProductdetail()
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
    setProductId('')
    setModelNo('')
    setDiscription('')
    setColor('')
    setPrice('')
    setOfferPrice('')
    setStock('')
    setHSN('')
    setRadio('')
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

const fetchProductByBrand=async(cid,bid)=>{
var result=await postData('product/display_all_product_by_brand',{brandid:bid,categoryid:cid})
setProductList(result.data)
}

const handleBrandChange=(event)=>{
setBrandId(event.target.value)
fetchProductByBrand(event.target.value)
}

const fillProduct=()=>{
return productList.map((item)=>{
return <MenuItem value={item.productid}>{item.productname}</MenuItem>
})
}

const handleCancel=()=>{
 
  setPicture({filename:tempicture,bytes:''})
}

const SaveCancelBtn=()=>{
  return(<div>
   <Button onClick={handleEditPicture}>Save</Button>
   <Button onClick={handleCancel}>Cancel</Button>
  </div>)
}  

    const productdetailForm=()=>{
 
        return(<div className={classes.box}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
               <Heading image={categoryicon} caption="Edit Productdetails" link=''/>
              </Grid>
           <Grid item xs={4}>
           <FormControl fullWidth>
        <InputLabel>Category Id</InputLabel>
        <Select
          value={categoryId}
          label="categoryId"
          onChange={handleCategoryChange}
        >
       {fillAllCategory()}
        </Select>
      </FormControl>
           </Grid>
           <Grid item xs={4}>

           <FormControl fullWidth>
        <InputLabel>Brand Id</InputLabel>
        <Select
          value={brandId}
          label="barndId"
          onChange={handleBrandChange}
        >
         
       {fillBrands()}
        </Select>
      </FormControl>
           </Grid>
           <Grid item xs={4}>
<FormControl fullWidth>
<InputLabel>Product Id</InputLabel>
<Select
value={productId}
label="ProductId"
onChange={(event)=>setProductId(event.target.value)}
>
 
{fillProduct()}
</Select>
</FormControl>
</Grid>
           <Grid item xs={12}>
              <TextField  value={modelNo} error={errors.modelNo} helperText={errors.modelNo}  onFocus={()=>handleError('','modelNo')} onChange={(event)=>setModelNo(event.target.value)} fullWidth variant="outlined" label="Model no." />
           </Grid>
           <Grid item xs={12}>
              <ReactQuill  error={errors.discription} helperText={errors.discription}  onFocus={()=>handleError('','discription')}  theme="snow" value={discription} onChange={setDiscription} />
           </Grid>
           <Grid item xs={6}>
              <TextField  value={color} error={errors.color} helperText={errors.color}  onFocus={()=>handleError('','color')} onChange={(event)=>setColor(event.target.value)} fullWidth variant="outlined" label="Color" />
           </Grid>
           <Grid item xs={6}>
              <TextField  value={price} error={errors.price} helperText={errors.price}  onFocus={()=>handleError('','price')} onChange={(event)=>setPrice(event.target.value)} fullWidth variant="outlined" label="Price" />
           </Grid>
           <Grid item xs={6}>
              <TextField  value={offerPrice} error={errors.offerPrice} helperText={errors.offerPrice}  onFocus={()=>handleError('','offerPrice')} onChange={(event)=>setOfferPrice(event.target.value)} fullWidth variant="outlined" label="Offer Price" />
           </Grid>
           <Grid item xs={6}>
              <TextField  value={stock} error={errors.stock} helperText={errors.stock}  onFocus={()=>handleError('','stock')} onChange={(event)=>setStock(event.target.value)} fullWidth variant="outlined" label="Stock" />
           </Grid>
           <Grid item xs={6}>
              <TextField  value={HSN} error={errors.HSN} helperText={errors.HSN}  onFocus={()=>handleError('','HSN')} onChange={(event)=>setHSN(event.target.value)} fullWidth variant="outlined" label="HSN code" />
           </Grid>
           <Grid item xs={6}>
          <FormControl error={errors.radio} helperText={errors.radio}  onFocus={()=>handleError('','radio')}>
            <FormLabel>
                Discount
            </FormLabel>
            <RadioGroup row  value={radio}  onChange={(event)=>setRadio(event.target.value)}>
             <FormControlLabel value="Continue" control={<Radio/>} label="continue"/>
             <FormControlLabel value="Discontinue" control={<Radio/>} label="Discontinue"/>
            </RadioGroup>
          </FormControl>
             </Grid>
           
           
        </Grid>
          </div>)
    
}
    
    ///////////////////////////////////////////////////////////////////////////////
    const fetchAllProductdetail=async()=>{
      var response=await getData('productdetail/display_all_productdetail')
      setProductdetail(response.data)
    }

    useEffect(function(){
      fetchAllProductdetail()
    },[])

    const handleOpen=(rowData)=>{
      fetchBrandsByCategory(rowData.categoryid)
      fetchProductByBrand(rowData.categoryid,rowData.brandid)
      setProductdetailId(rowData.productdetailid)
      setCategoryId(rowData.categoryid)
      setBrandId(rowData.brandid)
      setProductId(rowData.productid)
      setModelNo(rowData.modelno)
      setDiscription(rowData.discription)
      setColor(rowData.color)
      setPrice(rowData.price)
      setOfferPrice(rowData.offerprice)
      setStock(rowData.stock)
      setHSN(rowData.hsn)
      setRadio(rowData.radio)

      setOpen(true)
    }


    const handleOpenPicture=(rowData)=>{
      setProductdetailId(rowData.productdetailid)
       var pictures=rowData.picture.split(",").map((item)=>{

        return `${serverURL}/images/${item}`

       })
      setFiles(pictures)
      setOpenPicture(true)
    }
    const handleClose=()=>{
      setOpen(false)
    }

    const handleClosePicture=()=>{
      setOpenPicture(false)
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
         var result=await postData('productdetail/delete_productdetail',{productdetailid:rowData.productdetailid})
         if(result.status)
         {
          Swal.fire(
            'Deleted!',
            'Delete productdetail has deleted successfyllu',
            'success'
          )
         }
         fetchAllProductdetail()
         }
       }) 
     }
  
     const showPictureDialog=()=>{
      return(
        <Dialog open={openPicture} maxWidth={'lg'}> 
          <DialogTitle>
            Edit Picture
          </DialogTitle>
          <DialogContent>
        <DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setFiles(files)}
  filesLimit={7}
  initialFiles={files}
  fullWidth/>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleSubmit}>Edit Picture</Button>
            <Button onClick={handleClosePicture}>Close</Button>
          </DialogActions>
        </Dialog>
      )
    }

    const showProductdetailDialog=()=>{
      return(
        <Dialog open={open} maxWidth={'lg'}> 
          <DialogTitle>
          </DialogTitle>
          <DialogContent>
            {productdetailForm()}
          </DialogContent>
          <DialogActions>
          <Button onClick={handleSubmit}>Edit data</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )
    }
    
  function displayproductdetail()
  {
  return (
    <MaterialTable
      title={<div style={{display:"flex",flexDirection:"row"}}>
      <div>
       <img src={categoryimg} width="25"/>
      </div>
      <div style={{fontFamily:'dosis',fontSize:18,fontWeight:'bold',paddingLeft:5}}>
         Productdetails List
      </div>
      </div>}
      columns={[
        { title: 'categoryid',  render:(rowData)=> <div>{rowData.categoryid}/{rowData.categoryname}</div>},
        { title: 'brandid', render:(rowData)=> <div>{rowData.brandid}/{rowData.brandname}</div>},
        { title: 'productid', render:(rowData)=> <div>{rowData.productid}/{rowData.productname}</div>},
        { title: 'modelno', field: 'modelno'},
        { title: 'discription', render:(rowData)=> <div>{Parser().parse(rowData.discription)}</div>},
        { title: 'color', field: 'color'},
        { title: 'price', render:(rowData)=> <s>{rowData.price}</s>},
        { title: 'offerprice', field: 'offerprice'},
        { title: 'stock', field: 'stock'},
        { title: 'hsn', render:(rowData)=> <div>{rowData.hsn}%</div>},
        { title: 'radio', field: 'radio'},
      ]}
      data={Productdetail}      
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
            icon: 'photooutlined',
            tooltip: 'edit picture',  
            onClick: (event, rowData) => handleOpenPicture(rowData)
          },
          {
            icon: 'add',
            tooltip: 'Add Brand',
            isFreeAction: true,
            onClick: (event) => navigate('/dashboard/productdetails')
          }

      ]}
    />
  )
}
return(<div className={classes.Reportroot}>
    <div className={classes.Reportbox}>
    {displayproductdetail()}
    {showProductdetailDialog()}
    {showPictureDialog()}
    </div>
</div>)

}