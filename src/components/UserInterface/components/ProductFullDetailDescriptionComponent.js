import {Grid,FormControl,InputLabel,Select,MenuItem,Divider,object,Button, backdropClasses,} from "@mui/material";
  import * as React from "react";
  import { serverURL } from "../../../services/FetchNodeServices";
  import "slick-carousel/slick/slick.css";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { useTheme } from "@mui/material/styles";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import "slick-carousel/slick/slick-theme.css";
  import PlaceIcon from "@mui/icons-material/Place";
  import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import parse from 'html-react-parser'
import PlusMinusComponent from "./PlusMinusComponent";
import { useDispatch, useSelector } from "react-redux";
import ProductColorDetails from "./ProductColorDetails";
  export default function ProductFullDetailDescriptionComponent(props)
  {  
    var product=props.product
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    var dispatch=useDispatch()
    var cart=useSelector(state=>state.mycart)
    var keys=Object.keys(cart)
    if(keys.length==0)
    {
      product['qty']=0
    }
    else
    {
                       
      if(keys.includes(product.productdetailid+""))
      {
        product=cart[product.productdetailid+""]
      }
      else
      {
        product['qty']=0
      }
    }
  
   
 
   const handleQtyChange=(value)=>{
    if(value<=0)
    {
      dispatch({type:'REMOVE_EMPLOYE',payload:[product.productdetailid,product]}) 
    }
    else
    {
     product['qty']=value
     dispatch({type:'ADD_EMPLOYE',payload:[product.productdetailid,product]})
    }
     props.setRefresh(!props.refresh)
   }

    return(<div>
        <div style={{ width: matches?"99%":"75%", padding: matches?8:4 ,marginTop:matches?'-10%':'5%'}}>
                <div
                  style={{
                    width: "100%",
                    fontSize: 22,                 
                    padding: 3,
                    color: "#fff",
                  }}>
                  {product.brandname} {product.productname} {product.modelno}
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: 2,
                    flexDirection: "row",
                    marginTop: "1%",
                  }}
                >
                  <span
                    style={{
                      border: "1px solid #ff02B9",
                      color: "#ff02B9",
                      borderRadius: 4,
                      width: "15%",
                      fontSize: 7,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <b style={{ padding: 4 }}>Festive Deals</b>
                  </span>
                  <span
                    style={{
                      border: "1px solid #ff02B9",
                      color: "#ff02B9",
                      marginLeft: "1%",
                      borderRadius: 4,
                      width: "17%",
                      fontSize: 7,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <b style={{ padding: 4 }}>Extra Rs 20000* Off</b>
                  </span>
                </div>
                <div style={{ marginTop: "1%", padding: 3 }}>
                  <div
                    style={{
                      color: "#12DAA8",
                      width: matches?"36%":"32%",
                      fontSize: 12,
                      borderBottom: ".5px solid #12DAA8",
                    }}
                  >
                    4.4☆ (7 Rating & 3 Reviews)
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "2%",
                  }}
                >
                  <div style={{ color: "#fff", fontSize: 18 }}>
                    <b>₹{product.offerprice}</b>
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      border: "1px solid grey",
                      marginLeft: "4%",
                      width: "8%",
                      display: "flex",
                      padding:0,
                      justifyContent: "center",
                    }}
                  >
                    <b style={{ padding: 2 }}>OR</b>
                  </div>
                  <div
                    style={{ color: "#fff", fontSize: 16, marginLeft: "4%" }}
                  >
                    <b>₹517/mo*</b>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "center" }}>
                  <div style={{ color: "#fff", fontSize: 14 }}>
                    (incl. all Taxes)
                  </div>
                  <div
                    style={{
                      color: "#12DAA8",
                      fontSize: 12,
                      marginLeft: "19%",
                      width:matches?"16%": "13%",
                      borderBottom: ".5px solid #12DAA8",
                    }}
                  >
                    EMI Option
                  </div>
                </div>
                <div style={{ marginTop: "2%" }}>
                  <Divider
                    style={{ backgroundColor: "#9A9A9A", width: "100%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1%",
                  }}
                >
                  <div style={{ color: "grey", fontSize: 14 }}>
                    <s>MRP:₹ {product.price}</s>
                  </div>
                  <div
                    style={{ fontSize: 14, marginLeft: "2%", color: "#fff" }}
                  >
                    <b>(Save Rs.₹4,500.00.52%Off)</b>
                  </div>
                </div>
              
                <div style={{ marginTop: "2%", padding: 2 }}>
                  <div style={{ color: "#fff", fontSize: 14 }}>
                    <b>Color</b>
                  </div>
                </div>
               

                <div style={{display:'flex',flexDirection:"row",gap:6}}>

             <ProductColorDetails  setProduct={props.setProduct} product={props.product} />
             
                </div>
                <div style={{ marginTop: "4%", padding: 1 }}>
                  <PlusMinusComponent value={product?.qty} onChange={handleQtyChange} screen="product"/>
                </div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    marginTop: "4%",
                    padding: 2,
                  }}
                >
                  Super Saving (2 OFFERS)
                </div>
                <div style={{ marginTop: "1%" }}>
                  <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
                </div>
                <div
                  style={{
                    marginTop: "1%",
                    borderRadius: 5,
                    border: "1px solid #b2bec3",
                    width: "35%",
                    height: "20%",
                  }}
                >
                  <div
                    style={{
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <b style={{ padding: 3, fontSize: 12 }}>JP_ICICI</b>
                  </div>
                  <div style={{ marginTop: "1%" }}>
                    <Divider
                      style={{ backgroundColor: "#b2bec3", width: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      marginTop: "1%",
                      fontSize: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <b style={{ padding: 5 }}>
                      10% Instant Discount upto Rs.2,000 on FEDERAL Bank Credit
                      card on Microwave & This should be the only product in
                      your cart to avail the offer. Select the offer from “View
                      all offers ”on payment page T&C Apply.View more
                    </b>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "5%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <span style={{ color: "#fff" }}>
                    <PlaceIcon />
                  </span>
                  <span style={{ fontSize: 10, color: "#fff" }}>
                    Delivery at:
                    <span
                      style={{
                        color: "#12DAA8",
                        borderBottom: ".5px solid #12DAA8",
                      }}
                    >
                      Mumbai,400076
                    </span>
                    <div style={{ color: "#fff" }}>
                      Standard Delivery by Tomorrow
                    </div>
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "3%",
                    borderRadius: 8,
                    border: "1px solid #b2bec3",
                    width: "90%",
                    height: "20%",
                  }}
                >
                  <div style={{ color: "#fff" }}>
                    <b style={{ padding: 20, fontSize: 17 }}> Key Feature</b>
                  </div>
                  <div style={{ marginTop: "1%" }}>
                    <Divider
                      style={{ backgroundColor: "#b2bec3", width: "100%" }}
                    />
                  </div>
                  <div style={{ padding: 3 ,color:'#fff'}}>

                 {parse(product.discription)}
                  </div>
                </div>
                <div style={{ marginTop: "2%" }}>
                  <div>
                    <img
                      src={`${serverURL}/images/bbb.webp`}
                      style={{ width: "90%", borderRadius: 7 }}
                    ></img>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "4%",
                  }}
                >
                  <div style={{ color: "#fff" }}>
                    <PublishedWithChangesIcon fontSize="large" />
                  </div>
                  <div
                    style={{ fontSize: 22, color: "#fff", marginLeft: "3%" }}
                  >
                    7 Days Replacement
                  </div>
                </div>
                <div style={{ marginTop: "6%" }}>
                  <Divider
                    style={{ backgroundColor: "#9A9A9A", width: "100%" }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    padding: 3,
                    flexDirection: "row",
                    marginTop: "3%",
                  }}
                >
                  <span style={{ width: "100%" }}>
                    <span>
                      <img
                        src={`${serverURL}/images/qqq.svg`}
                        style={{ width: "3%", borderRadius: 7 }}
                      ></img>
                    </span>
                    <span
                      style={{ fontSize: 16, color: "#fff", marginLeft: "1%" }}
                    >
                      <b>ZipCare Protection Plan</b>
                    </span>
                    <span
                      style={{ fontSize: 12, color: "#fff", marginLeft: "5%" }}
                    >
                      Add extra protection to your products
                    </span>
                  </span>
                </div>
                <div style={{ marginTop: "3%" }}>
                  <Divider
                    style={{ backgroundColor: "#b2bec3", width: "100%" }}
                  />
                </div>
                <div style={{ marginTop: "3%", padding: 3 }}>
                  <div style={{ fontSize: 20, color: "#fff" }}>
                    <b> Extended Warranty</b>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#fff",
                      marginTop: "2%",
                      width: "90%",
                    }}
                  >
                    Extended protection for your device beyond the manufacturer
                    warranty with coverage against all manufacturing defects.
                  </div>
                </div>
                <div style={{ marginTop: "4%" }}>
                  <Divider
                    style={{ backgroundColor: "#b2bec3", width: "100%" }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#fff",
                    marginTop: "4%",
                    padding: 3,
                  }}
                >
                  ZipCare Protect - Standard Starting @ just ₹18/mo.
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "3%",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #b2bec3",
                      backgroundColor: "#191919",
                      width: "25%",
                      borderRadius: 12,
                      padding: 10,
                      display: "flex",
                      justifyContent: "center",
                      fontSize: 15,
                    }}
                  >
                    <div style={{ padding: 15, color: "#fff" }}>
                      {" "}
                      2 Year ₹420{" "}
                    </div>
                  </div>
                  <div
                    style={{
                      border: "1px solid #b2bec3",
                      width: "14%",
                      marginLeft: "3%",
                      padding: 18,
                      backgroundColor: "#191919",
                      borderRadius: 12,
                      display: "flex",
                      justifyContent: "center",
                      fontSize: 15,
                    }}
                  >
                    <div style={{ padding: 10, color: "#fff" }}> None </div>
                  </div>
                </div>
            

              </div>
    </div>)
  }