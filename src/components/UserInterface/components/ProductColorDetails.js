import { useState,useEffect } from "react"
import { serverURL,postData,getData } from "../../../services/FetchNodeServices"
import { Button } from "@mui/material"
export default function ProductColorDetails(props)
{
    var product=props.product
    const [details,setDetails]=useState([])
    const [selectedId,setSelectedId]=useState(product.productdetailid)
    const FetchDetails=async(id)=>{
        var result= await postData("userinterface/display_productdetail_id",{productdetailid:id})
        props.setProduct(result.data[0])
        setSelectedId(result.data[0].productdetailid)
                                                 
    }
    const handleChangeProduct=(id)=>{
          FetchDetails(id)
    }



    const FetchProductDetail=async()=>{
        var result= await postData("userinterface/display_all_productdetail_productid",{productid:product.productid})
        setDetails(result.data)
      } 
      useEffect(function(){ 
       FetchProductDetail()
      },[])
      
   
      
      
   const showDetails=()=>{
    return details.map((item)=>{
      return( <div onClick={()=>handleChangeProduct(item?.productdetailid)} style={{ marginTop: "1%", padding:"8px 10px 8px", textTransform:'none'}}>
      <Button
      variant="outlined"
      size="small"
        style={{
          borderColor:selectedId==item.productdetailid?"#12DAA8":'gray',
          color: "#fff",
          marginLeft:'-13%',
          width: "6%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <b style={{ padding: 4, fontSize: 10 }}>{item.color}</b>
      </Button>
    </div>)
    })
   }
   return(<>
    {showDetails()}
</>
   )
}