import { FormControl,InputLabel,Select,MenuItem,Grid,TextField,Button, Avatar,FormLabel,RadioGroup,FormControlLabel, Radio, hslToRgb} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReactQuill from "react-quill";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import 'react-quill/dist/quill.snow.css'
import Heading from "./projectComponent/Heading";
import categoryicon from '../../src/assets/category.png'
import { getData,postData } from "../services/FetchNodeServices";
import {DropzoneArea} from 'material-ui-dropzone'
import { useMemo } from "react";
var useStyles=makeStyles({
    root:{
        width:'100%',
        height:'100%',
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    },
    box:{
        width:'80%',
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
export default function ProductDetails()
{
    var useStyle=useStyles()
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
    const [files,setFiles]=useState([])
    const [productList,setProductList]=useState([])
    const modules = useMemo(() => ({
      toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', "strike"],
          [{ 'list': 'ordered' }, { 'list': 'bullet' },
          { 'indent': '-1' }, { 'indent': '+1' }],
          ['image', "link","video"],
          [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
        ],
        
      },
    }), [])
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
        formData.append('productid',productId)
        formData.append('modelno',modelNo)
        formData.append('discription',discription)
        formData.append('color',color)
        formData.append('price',price)
        formData.append('offerprice',offerPrice)
        formData.append('stock',stock)
        formData.append('hsn',HSN)
        formData.append('radio',radio)
        files.map((file,index)=>{
        formData.append('picture'+index,file)
      })
        var response=await postData('productdetail/submit_productdetail',formData)
        if(response.status)
        {
          Swal.fire({
            icon: 'success',
            title: 'productdetail',
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

const fetchProductByBrand=async(bid)=>{
   var result=await postData('product/display_all_product_by_brand',{brandid:bid,categoryid:categoryId})
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


    return(<div className={useStyle.root}>
          <div className={useStyle.box}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
               <Heading image={categoryicon} caption="New Productdetails" link='/dashboard/displayallproductdetails'/>
              </Grid>
              <Grid item xs={7}>
                <Grid container spacing={3}>
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
           <Grid item xs={4}>
              <TextField  value={modelNo} error={errors.modelNo} helperText={errors.modelNo}  onFocus={()=>handleError('','modelNo')} onChange={(event)=>setModelNo(event.target.value)} fullWidth variant="outlined" label="Model no." />
           </Grid>
           <Grid item xs={4}>
              <TextField  value={color} error={errors.color} helperText={errors.color}  onFocus={()=>handleError('','color')} onChange={(event)=>setColor(event.target.value)} fullWidth variant="outlined" label="Color" />
           </Grid>
           <Grid item xs={4}>
              <TextField  value={price} error={errors.price} helperText={errors.price}  onFocus={()=>handleError('','price')} onChange={(event)=>setPrice(event.target.value)} fullWidth variant="outlined" label="Price" />
           </Grid>
           <Grid item xs={4}>
              <TextField  value={offerPrice} error={errors.offerPrice} helperText={errors.offerPrice}  onFocus={()=>handleError('','offerPrice')} onChange={(event)=>setOfferPrice(event.target.value)} fullWidth variant="outlined" label="Offer Price" />
           </Grid>
           <Grid item xs={4}>
              <TextField  value={stock} error={errors.stock} helperText={errors.stock}  onFocus={()=>handleError('','stock')} onChange={(event)=>setStock(event.target.value)} fullWidth variant="outlined" label="Stock" />
           </Grid>
           <Grid item xs={4}>
              <TextField  value={HSN} error={errors.HSN} helperText={errors.HSN}  onFocus={()=>handleError('','HSN')} onChange={(event)=>setHSN(event.target.value)} fullWidth variant="outlined" label="HSN code" />
           </Grid>
           <Grid item xs={12}>
              <ReactQuill modules={modules} error={errors.discription} helperText={errors.discription}  onFocus={()=>handleError('','discription')}  theme="snow" value={discription} onChange={setDiscription} />
           </Grid>
           <Grid item xs={12}>

           <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          value={radio}
          label="Status"
          onChange={(event)=>setRadio(event.target.value)}
        >
       <MenuItem value={'Offer'}>Offer</MenuItem>
       <MenuItem value={'Deal of the Day'}>Deal of the Day</MenuItem>
       <MenuItem value={'Sale'}>Sale</MenuItem>
       <MenuItem value={'Trending'}>Trending</MenuItem>
       <MenuItem value={'New Arrival'}>New Arrival</MenuItem>
       <MenuItem value={'festive Deals'}>Festive Deals</MenuItem>
       <MenuItem value={'Discontinue'}>Discontinue</MenuItem>
        </Select>
      </FormControl>

             </Grid>   
           <Grid item xs={6}>
              <Button component="label" onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
           </Grid>
           <Grid item xs={6}>
             <Button component="label"  onClick={handleReset} fullWidth variant="contained">Reset</Button>
           </Grid>
           </Grid>
           </Grid>
           <Grid item xs={5}>
            <Grid container spacing={3}>
           <Grid item xs={12}>
<DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setFiles(files)}
  filesLimit={7}
  fullWidth
/>
</Grid>
</Grid>
</Grid>
        </Grid>
          </div>
    </div>)
}