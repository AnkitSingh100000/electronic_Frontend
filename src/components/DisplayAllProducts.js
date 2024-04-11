import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import { FormControl,InputLabel,Select,MenuItem,Grid,TextField, Avatar } from "@mui/material";
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
  }
   )

export default function DisplayAllProducts()
{
    var classes=useStyles()
    var navigate=useNavigate()
    const [Product,setProduct]=useState([])
    const [open,setOpen]=useState(false)    
    ///////////////////////////Product//////////////////////////////////////////////
    const [Productname,setProductName]=useState('')
    const [categoryId,setCategoryId]=useState('')
    const [brandId,setBrandId]=useState('')
    const [statuscamera,setStatuscamera]=useState(false)
    const [statusbtn,setStatusBtn]=useState(false)
    const [productId,setProductId]=useState('')
    const [errors,setErrors]=useState({})
    const [tempicture,setTemPicture]=useState('')
    const [Picture,setPicture]=useState({bytes:'',filename:''})
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
      setStatusBtn(true)
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

     const handleSubmit=async()=>{
      var error=validation()
      if(error==false)
      {
     var body= {productid:productId,categoryid:categoryId,brandid:brandId,productname:Productname}
      var response=await postData('product/edit_product_data',body)
      if(response.status)
      {
        Swal.fire({
          icon: 'success',
          title: 'Products',
          text: response.message,
          toast:true
        })
        fetchAllProducts()
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
      setStatusBtn(false)
        var error=validation()
        if(error==false)
        {
        var formData= new FormData()
        formData.append('productid',productId)
        formData.append('picture',Picture.bytes)
        var response=await postData('product/edit_product_picture',formData)
        if(response.status)
        {
          Swal.fire({
            icon: 'success',
            title: 'Products',
            text: response.message,
            toast:true
          })
          fetchAllProducts()
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

       const handleCancel=()=>{
          setStatusBtn(false)
          setPicture({filename:tempicture,bytes:''})
       }

     const SaveCancelBtn=()=>{
       return(<div>
        <Button onClick={handleEditPicture}>Save</Button>
        <Button onClick={handleCancel}>Clancel</Button>
       </div>)
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
  


    const productForm=()=>{
      
      return(<div className={classes.root}>
        <div className={classes.box}>
      <Grid container spacing={3}>
      <Grid item xs={12} className={classes.right}>
      {statusbtn?<SaveCancelBtn/>:<></>}
         <Button onMouseLeave={()=>setStatuscamera(false)} onMouseEnter={()=>setStatuscamera(true)} component="label" style={{position:'relative'}} onFocus={()=>handleError('','image')} >
        {statuscamera?<div style={{position:'absolute',zIndex:2,backgroundColor:"#f2f2f2",right:10,bottom:10,padding:2,width:26,height:26,borderRadius:13,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <CameraAltIcon style={{color:'#000'}}/>
          </div>:<></>}
              <input onChange={handlePicture} type="file" hidden accept="images/*" multiple/>
              <Avatar src={Picture.filename} style={{width:90,height:90}} alt="Brand" variant="rounded" />
         </Button>
        
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
      </Grid>
        </div>
  </div>)
      }
  

    ///////////////////////////////////////////////////////////////////////////////
    
    const fetchAllProducts=async()=>{
      var response=await getData('product/display_all_product')
      setProduct(response.data)
    }

    useEffect(function(){
      fetchAllProducts()
    },[])

    const handleOpen=(rowData)=>{
      fetchBrandsByCategory(rowData.categoryid)
      setProductId(rowData.productid)
      setBrandId(rowData.brandid)
      setCategoryId(rowData.categoryid)
      setProductName(rowData.productname)
      setPicture({filename:`${serverURL}/images/${rowData.picture}`,bytes:''})
      setTemPicture(`${serverURL}/images/${rowData.picture}`)
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
         var result=await postData('product/delete_product',{productid:rowData.productid})
         if(result.status)
         {
          Swal.fire(
            'Deleted!',
            'Delete product has deleted successfyllu',
            'success'
          )
         }
         fetchAllProducts()
        }
      })
     }
  

    const showProductDialog=()=>{
      return(
        <Dialog open={open}>
          <DialogTitle>
            Update Product
          </DialogTitle>
          <DialogContent>
            {productForm()}
          </DialogContent>
          <DialogActions>
          <Button onClick={handleSubmit}>Edit data</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )
    }

  function displayproducts()
  {
  return (
    <MaterialTable
      title={<div style={{display:"flex",flexDirection:"row"}}>
      <div>
       <img src={categoryimg} width="25"/>
      </div>
      <div style={{fontFamily:'dosis',fontSize:18,fontWeight:'bold',paddingLeft:5}}>
         Product List
      </div>
      </div>}
      columns={[
        { title: 'categoryid',  render:(rowData)=> <div>{rowData.categoryid}/{rowData.categoryname}</div>},
        { title: 'brandid', render:(rowData)=> <div>{rowData.brandid}/{rowData.brandname}</div>},
        { title: 'productid', field: 'productid'},
        { title: 'productname', field: 'productname'},
        { title: 'picture',  render:(rowData)=><img src={`${serverURL}/images/${rowData.picture}`} width={50}/> },
      ]}
      data={Product}      
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
            onClick: (event) => navigate('/dashboard/products')
          }

      ]}
    />
  )
}
return(<div className={classes.Reportroot}>
    <div className={classes.Reportbox}>
    {displayproducts()}
    {showProductDialog()}
    </div>
</div>)

}