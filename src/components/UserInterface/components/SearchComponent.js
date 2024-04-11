import { TextField,InputAdornment, withTheme } from "@mui/material";
import Search from '@mui/icons-material/Search';
import { useState } from "react";
import { postData } from "../../../services/FetchNodeServices";
import { useNavigate } from "react-router-dom";
export default function SearchComponent(props)
{
  var navigate=useNavigate()
  const [text,setText]=useState('')
  const [list,setList]=useState([])
  const fetchRecord= async()=>{
   var result=await postData('userinterface/product_filter',{text})
    return result.data
  }
  const handlesearch=()=>{
  fetchRecord().then((response)=>{
  navigate('/productdetail',{state:{result:response}})
  })
  }
return(<div style={{background:'#ffffff',width:'70%',borderRadius:3,display:'flex',alignItems:'center'}}> 
    <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  variant="filled"
  placeholder="What you are looking for?"
  size="small"
  fullWidth
  onChange={(e)=>setText(e.target.value)}
  InputProps={{
    disableUnderline:true,
    endAdornment: (
      <InputAdornment position="end" >
        <Search onClick={handlesearch} style={{cursor:'pointer'}}/>
      </InputAdornment>
    ),
  }}
/>
  </div>)
}