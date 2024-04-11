import {
  Grid,FormControl,InputLabel,Select,MenuItem,Divider,
  object,Button,
} from "@mui/material";
import * as React from "react";
import { Box, CardContent, Card } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { serverURL } from "../../../services/FetchNodeServices";
import Slider from "react-slick";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Favorite from "@mui/icons-material/Favorite";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlaceIcon from "@mui/icons-material/Place";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { DonutLarge } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { postData } from "../../../services/FetchNodeServices";
export default function ProductFullDetailComponent(props) {
  var location=useLocation()
  var product=location.state.product
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [details,setDetails]=useState([])
  const [selectedId,setSelectedId]=useState(product.productdetailid)
  const [Product,setProduct]=useState(props.product)
  const [products,setProducts]=useState('')

  const FetchDetails=async(id)=>{
    var result= await postData("userinterface/display_productdetail_id",{productdetailid:id})
    setProducts(result.data[0])
    setSelectedId(result.data[0].productdetailid)
    setProduct(result.data[0])
}

  var settings = {
    infinite: true,
    speed: 500,
    horizontal: true,
    slidesToShow: 1,
    autoplay: "true",
    autospeed: 1,
    slidesToScroll: 1,
    arrows: true,
  };

 const handleChangeProduct=(id)=>{

 FetchDetails(id)
 }
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);


  const FetchProductDetail=async()=>{
    var result= await postData("userinterface/display_all_productdetail_productid",{productid:product.productid})
    setDetails(result.data)
  }
  
  useEffect(function(){ 
   FetchProductDetail()
  },[])

const showDetails=()=>{
  return details.map((item)=>{
    return(<div style={{ marginTop: "1%" }}>
    <div
     onClick={()=>handleChangeProduct(item?.productdetailid)}
     
      style={{
        color: "#fff",
        width: "4vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button variant="outlined" style={{borderColor:selectedId==item.productdetailid?'#12DAA8':'gray'}}><b style={{ padding: 4, fontSize: '1.6vh',color:'#fff'}}>{item.color}</b></Button>
    </div>
  </div>)
  })
}


  var data = product?.picture.split(',')
  const showSlider = () => {
    return data.map((item) => {
      return (
        <div>
          <div style={{ padding: 5, marginLeft: "-14%" }}>
            <img
              src={`${serverURL}/images/${item}`}
              style={{ border: "2px solid grey",width:100 }}
            ></img>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div
        style={{
          fontSize: 13,
          color: "#fff",
          marginTop: "1%",
          padding: 5,
          marginLeft: matches ? "1%" : "12%",
        }}
      >
        <div style={{ display: "flex", alignItems: "row" }}>
          Kitchen Appliances{" "}
          <div style={{ marginTop: -1, color: "grey" }}>
            <KeyboardArrowRightIcon />
          </div>{" "}
          Microwave & Ovens{" "}
          <div style={{ marginTop: -1, color: "grey" }}>
            <KeyboardArrowRightIcon />
          </div>{" "}
          Convection Microwave Ovens
        </div>
      </div>
      <Grid container spacing={3}>
        {matches ? (
          <></>
        ) : (
          <Grid item xs={3}>
            <div style={{ width: "100%", marginLeft: "70%" }}>
              <div style={{ color: "#fff", fontWeight: "bold" }}>
                <KeyboardArrowUpIcon />
              </div>
              {showSlider()}
              <div style={{ color: "#fff", fontWeight: "bold" }}>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </Grid>
        )}
        <Grid item xs={matches ? 12 : 3}>
          <div style={{ width: matches?"100%":"100%" }}>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  width: "100%",
                  marginLeft: matches ? "90%" : "85%",
                  color: "#fff",
                }}
              >
                {" "}
                <FavoriteBorderIcon />{" "}
              </div>
              <div style={{ width: "100%" }}>
                {" "}
                <img
                  src={`${serverURL}/images/${data[0]}`}
                  style={{
                    width: matches ? "70%" : "90%",
                    display: "flex",
                    marginLeft: matches ? "12%" : "0%",
                    marginTop: matches ? "-15%" : "0%",
                    justifyContent: matches ? "center" : "center",
                  }}
                ></img>
              </div>
            </div>
            {matches ? (
              <></>
            ) : (
              <div>
                <div style={{ marginTop: "2%" }}>
                  <Divider
                    style={{ backgroundColor: "#9A9A9A", width: "100%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "9%", marginTop: "5%" }}>
                    <FormGroup style={{ color: "#fff" }}>
                      <FormControlLabel
                        control={<Checkbox style={{ color: "white" }} />}
                        label="Compare"
                      />
                    </FormGroup>
                  </div>
                  <div
                    style={{
                      marginTop: "7%",
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "50%",
                    }}
                  >
                    <span style={{ color: "#fff" }}>
                      <PlaceIcon />
                    </span>
                    <span style={{ fontSize: ".9vw" }}>
                      <span
                        style={{
                          color: "#fff",
                          borderBottom: ".5px solid #fff",
                        }}
                      >
                        Connection to store
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "6%" }}>
                  <Divider
                    style={{ backgroundColor: "#9A9A9A", width: "100%" }}
                  />
                </div>
              </div>
            )}






            {matches ? (
              <div style={{ width: "100%", padding: 4 }}>
                <div
                  style={{
                    width: "100%",
                    fontSize: 22,
                    marginTop: "-12%",
                    padding: 6,
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
                      width: "32%",
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
                      width: "5%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <b style={{ padding: 3 }}>OR</b>
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
                      marginLeft: "15%",
                      width: "13%",
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
                    <b>Capacity</b>
                  </div>
                </div>
                <div style={{ marginTop: "1%", padding: 1 }}>
                  <div
                    style={{
                      color: "#fff",
                      border: "1px solid #12DAA8",
                      width: "5%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <b style={{ padding: 3, fontSize: 10 }}>23.0</b>
                  </div>
                </div>
                <div style={{ marginTop: "2%", padding: 2 }}>
                  <div style={{ color: "#fff", fontSize: 14 }}>
                    <b>Color</b>
                  </div>
                </div>
                <div style={{ marginTop: "1%", padding: 1 }}>
                  <div
                    style={{
                      color: "#fff",
                      border: "1px solid #12DAA8",
                      width: "6%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <b style={{ padding: 4, fontSize: 10 }}>Black</b>
                  </div>
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
                  <div style={{ padding: 15 }}>
                    <div style={{ color: "#fff" }}>
                      <div style={{ fontSize: 15, padding: 5 }}>
                        - 23 Litres, Convection Microwave
                      </div>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <div style={{ fontSize: 15, padding: 5 }}>
                        - Ideal for Baking, Cooking, Defrosting, Grilling,
                        Heating & Roasting
                      </div>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <div style={{ fontSize: 15, padding: 5 }}>
                        - Controls: Touch Controls
                      </div>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <div style={{ fontSize: 15, padding: 5 }}>
                        - No. of Programs: 71 Autocook Menu
                      </div>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <div style={{ fontSize: 15, padding: 5 }}>
                        - Ideal for Baking, Cooking, Defrosting, Grilling,
                        Heating & Roasting
                      </div>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <div style={{ fontSize: 15, padding: 5 }}>
                        - 1 Year Product Warranty, 6 Years Warranty on Spare
                        Parts
                      </div>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <div style={{ fontSize: 15, padding: 5 }}>
                        - LED Display, Intelligent System Cooling, Child Safety
                        Loc
                      </div>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <div style={{ fontSize: 15, padding: 5 }}>
                        - Tv Intelligent System Cooling, Child Safety Loc
                      </div>
                    </div>
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
                <div style={{ marginTop: "4%" }}>
                  <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
                </div>
                <div
                  style={{
                    marginTop: "3%",
                    borderRadius: 5,
                    border: "1px solid #b2bec3",
                    width: "90%",
                    height: "20%",
                    padding: 2,
                  }}
                >
                  <div style={{ color: "#fff" }}>
                    <b style={{ padding: 7, fontSize: 15 }}>Essential Combo</b>
                  </div>
                  <div style={{ marginTop: "1%" }}>
                    <Divider
                      style={{ backgroundColor: "#b2bec3", width: "100%" }}
                    />
                  </div>
                  <div>
                    <div style={{ marginTop: "2%", padding: 3 }}>
                      <FormGroup style={{ color: "#fff", width: "100%" }}>
                        <span style={{ width: "100%" }}>
                          <span style={{ width: "10%" }}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="large"
                                  style={{ color: "#12DAA8" }}
                                />
                              }
                            />
                          </span>
                          <span style={{ width: "10%" }}>
                            <img
                              src={`${serverURL}/images/q.webp`}
                              style={{
                                width: "10%",
                                marginLeft: "-2%",
                                marginBottom: "-4%",
                                borderRadius: 7,
                              }}
                            ></img>
                          </span>
                          <span
                            style={{
                              color: "#fff",
                              fontSize: "1.5vw",
                              marginLeft: "1%",
                              width: "30%",
                            }}
                          >
                            {" "}
                            IFB 23BC4 23L Convection Microwave Oven with 71
                            Menus (Black Floral) - ₹12,169.00
                          </span>
                        </span>
                      </FormGroup>
                    </div>
                  </div>
                  <div style={{ color: "#fff", marginLeft: "13%" }}>+</div>
                  <div style={{ width: "100%" }}>
                    <div style={{ marginTop: "2%", padding: 3 }}>
                      <FormGroup style={{ color: "#fff" }}>
                        <span style={{ width: "100%" }}>
                          <span style={{ width: "10%" }}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="large"
                                  style={{ color: "#12DAA8" }}
                                />
                              }
                            />
                          </span>
                          <span style={{ width: "10%" }}>
                            <img
                              src={`${serverURL}/images/w.webp`}
                              style={{
                                width: "10%",
                                marginLeft: "-2%",
                                marginBottom: "-4%",
                                borderRadius: 7,
                              }}
                            ></img>
                          </span>
                          <span
                            style={{
                              color: "#fff",
                              fontSize: "1.5vw",
                              marginLeft: "1%",
                              width: "30%",
                            }}
                          >
                            {" "}
                            Treo 500ml, 1L & 1.5L Glass Mixing Bowl with Flexi
                            Lid (Set of 3 Transparent) - ₹765.00
                          </span>
                        </span>
                      </FormGroup>
                    </div>
                  </div>
                  <div style={{ color: "#fff", marginLeft: "13%" }}>+</div>
                  <div style={{ width: "100%" }}>
                    <div style={{ marginTop: "2%", padding: 3 }}>
                      <FormGroup style={{ color: "#fff" }}>
                        <span>
                          <span style={{ width: "10%" }}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="large"
                                  style={{ color: "#12DAA8" }}
                                />
                              }
                            />
                          </span>
                          <span style={{ width: "10%" }}>
                            <img
                              src={`${serverURL}/images/e.webp`}
                              style={{
                                width: "10%",
                                marginLeft: "-2%",
                                marginBottom: "-4%",
                                borderRadius: 7,
                              }}
                            ></img>
                          </span>
                          <span
                            style={{
                              color: "#fff",
                              fontSize: "1.5vw",
                              marginLeft: "1%",
                              width: "30%",
                            }}
                          >
                            {" "}
                            Convection Microwave Oven with 71 Autocook (Black
                            Floral) - ₹6,765.00
                          </span>
                        </span>
                      </FormGroup>
                    </div>
                  </div>
                  <div style={{ color: "#fff", marginLeft: "13%" }}>+</div>
                  <div style={{ width: "100%" }}>
                    <div style={{ marginTop: "2%", padding: 3 }}>
                      <FormGroup style={{ color: "#fff" }}>
                        <span>
                          <span style={{ width: "10%" }}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="large"
                                  style={{ color: "#12DAA8" }}
                                />
                              }
                            />
                          </span>
                          <span style={{ width: "10%" }}>
                            <img
                              src={`${serverURL}/images/r.webp`}
                              style={{
                                width: "10%",
                                marginLeft: "-2%",
                                marginBottom: "-4%",
                                borderRadius: 7,
                              }}
                            ></img>
                          </span>
                          <span
                            style={{
                              color: "#fff",
                              fontSize: "1.5vw",
                              marginLeft: "1%",
                              width: "30%",
                            }}
                          >
                            {" "}
                            treo All Fresh 400ml Glass Round Tiffin with Lid -
                            ₹7,999.00
                          </span>
                        </span>
                      </FormGroup>
                    </div>
                  </div>
                  <div style={{ padding: 6 }}>
                    <div
                      style={{
                        border: "1px solid #12DAA8",
                        width: "50%",
                        marginLeft: "1%",
                        borderRadius: 6,
                        padding: 2,
                        marginTop: "1%",
                        display: "flex",
                        justifyContent: "center",
                        background: "#12DAA8",
                        fontSize: 14,
                      }}
                    >
                      <div style={{ padding: 6 }}>
                        <b> Add 4 items to card </b>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "5%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Accordion
                    style={{
                      color: "#fff",
                      border: "1px solid white",
                      background: "#191919",
                      borderRadius: 8,
                      width: "90%",
                      marginRight: "8%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <b style={{ fontSize: "2vw" }}>Specifications</b>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <div style={{ fontSize: "1.2vw", color: "#fff" }}>
                          <b>MICROWAVE & OVEN CATEGORY</b>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "1%",
                          }}
                        >
                          <div style={{ fontSize: "1vw" }}>
                            <b>Product Category</b>
                          </div>
                          <div style={{ marginLeft: "28%", fontSize: "1vw" }}>
                            <b>Product Types</b>
                          </div>
                          <div style={{ marginLeft: "28%", fontSize: "1vw" }}>
                            <b>Product Function</b>{" "}
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div style={{ width: "15%", fontSize: "1vw" }}>
                            <b>Microwave Oven</b>
                          </div>
                          <div
                            style={{
                              marginLeft: "23%",
                              fontSize: "1vw",
                              width: "30%",
                            }}
                          >
                            <b>Grill | Convection</b>
                          </div>
                          <div
                            style={{
                              marginLeft: "7%",
                              fontSize: "1vw",
                              width: "20%",
                            }}
                          >
                            <b>
                              Cooking | Defrosting | Heating | Baking | Roasting
                              | Grilling
                            </b>{" "}
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "2%",
                          }}
                        >
                          <div style={{ fontSize: "1vw" }}>
                            <b>Capacity</b>
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div style={{ width: "15%", fontSize: "1vw" }}>
                            <b>275 liters</b>
                          </div>
                        </div>
                        <div style={{ marginTop: "2%" }}>
                          <Divider
                            style={{
                              backgroundColor: "#b2bec3",
                              width: "100%",
                            }}
                          />
                        </div>

                        <div
                          style={{
                            fontSize: "1.2vw",
                            color: "#fff",
                            marginTop: "2%",
                          }}
                        >
                          <b>MANUFACTURER DETAILS</b>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "1%",
                          }}
                        >
                          <div style={{ fontSize: "1vw" }}>
                            <b>Brand</b>
                          </div>
                          <div style={{ marginLeft: "34%", fontSize: "1vw" }}>
                            <b>Model series</b>
                          </div>
                          <div style={{ marginLeft: "30%", fontSize: "1vw" }}>
                            <b>Model no.</b>{" "}
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div style={{ width: "15%", fontSize: "1vw" }}>
                            <b>IFB</b>
                          </div>
                          <div
                            style={{
                              marginLeft: "22%",
                              fontSize: "1vw",
                              width: "30%",
                            }}
                          >
                            <b>23VVHBMNBN</b>
                          </div>
                          <div
                            style={{
                              marginLeft: "8%",
                              fontSize: "1vw",
                              width: "20%",
                            }}
                          >
                            <b>23HVVKFCG</b>{" "}
                          </div>
                        </div>
                        <div style={{ marginTop: "2%" }}>
                          <Divider
                            style={{
                              backgroundColor: "#b2bec3",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "1.2vw",
                            color: "#fff",
                            marginTop: "2%",
                          }}
                        >
                          <b>PRODUCT DIMENSIONS (OPEN)</b>
                        </div>
                        <div
                          style={{
                            width: "90%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              border: "1px solid #fff",
                              marginTop: "2%",
                              width: "12%",
                              display: "flex",
                              justifyContent: "center",
                              padding: 4,
                              borderRadius: 10,
                            }}
                          >
                            <div
                              style={{
                                color: "#fff",
                                fontSize: ".8vw",
                                padding: 8,
                              }}
                            >
                              <b>View More</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Grid>
        {matches ? (
          <></>
        ) : (
          <Grid item xs={6}>
            <div style={{ width: "100%" }}>
              <div style={{ width: "75%", fontSize: 22, color: "#fff" }}>
            {product.brandname} {product.productname} {product.modelno}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "1%",
                }}
              >
                <span
                  style={{
                    border: "1px solid #ff02B9",
                    color: "#ff02B9",
                    borderRadius: 4,
                    width: "10%",
                    fontSize: ".6vw",
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
                    width: "14%",
                    fontSize: ".6vw",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <b style={{ padding: 4 }}>Extra Rs 20000* Off</b>
                </span>
              </div>
              <div style={{ marginTop: "1%" }}>
                <div
                  style={{
                    color: "#12DAA8",
                    width: "20%",
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
                <div style={{ color: "#fff", fontSize: 24 }}>
                  <b>₹{product.offerprice}</b>
                </div>
                <div
                  style={{
                    color: "#fff",
                    border: "1px solid grey",
                    marginLeft: "4%",
                    width: "5%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <b style={{ padding: 3 }}>OR</b>
                </div>
                <div style={{ color: "#fff", fontSize: 22, marginLeft: "4%" }}>
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
                    marginLeft: "20%",
                    width: "10%",
                    borderBottom: ".5px solid #12DAA8",
                  }}
                >
                  EMI Option
                </div>
              </div>
              <div style={{ marginTop: "2%" }}>
                <Divider style={{ backgroundColor: "#9A9A9A", width: "80%" }} />
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
                <div style={{ fontSize: 14, marginLeft: "2%", color: "#fff" }}>
                  <b>(Save Rs.₹4,500.00.52%Off)</b>
                </div>
              </div>
              <div style={{ marginTop: "2%" }}>
                <div style={{ color: "#fff", fontSize: 14 }}>
                  <b>Capacity</b>
                </div>
              </div>
              <div style={{ marginTop: "1%" }}>
                <div
                  style={{
                    color: "#fff",
                    border: "1px solid #12DAA8",
                    width: "5%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <b style={{ padding: 3, fontSize: 10 }}>23.0</b>
                </div>
              </div>
              <div style={{ marginTop: "2%" }}>
                <div style={{ color: "#fff", fontSize: 14 }}>
                  <b>Color</b>
                </div>
              </div>
             
           <div style={{display:'flex',flexDirection:"row",gap:10}}>

            {showDetails()}
          </div>
              <div style={{ color: "#fff", fontSize: 20, marginTop: "3%" }}>
                Super Saving (2 OFFERS)
              </div>
              <div style={{ marginTop: "1%" }}>
                <Divider style={{ backgroundColor: "#fff", width: "80%" }} />
              </div>
              <div
                style={{
                  marginTop: "1%",
                  borderRadius: 5,
                  border: "1px solid #b2bec3",
                  width: "28%",
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
                    card on Microwave & This should be the only product in your
                    cart to avail the offer. Select the offer from “View all
                    offers ”on payment page T&C Apply.View more
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
                <span style={{ fontSize: ".8vw", color: "#fff" }}>
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
                  width: "80%",
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
                <div style={{ padding: 15 }}>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 15, padding: 5 }}>
                      - 23 Litres, Convection Microwave
                    </div>
                  </div>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 15, padding: 5 }}>
                      - Ideal for Baking, Cooking, Defrosting, Grilling, Heating
                      & Roasting
                    </div>
                  </div>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 15, padding: 5 }}>
                      - Controls: Touch Controls
                    </div>
                  </div>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 15, padding: 5 }}>
                      - No. of Programs: 71 Autocook Menu
                    </div>
                  </div>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 15, padding: 5 }}>
                      - Ideal for Baking, Cooking, Defrosting, Grilling, Heating
                      & Roasting
                    </div>
                  </div>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 15, padding: 5 }}>
                      - 1 Year Product Warranty, 6 Years Warranty on Spare Parts
                    </div>
                  </div>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 15, padding: 5 }}>
                      - LED Display, Intelligent System Cooling, Child Safety
                      Loc
                    </div>
                  </div>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 15, padding: 5 }}>
                      - Tv Intelligent System Cooling, Child Safety Loc
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "2%" }}>
                <div>
                  <img
                    src={`${serverURL}/images/bbb.webp`}
                    style={{ width: "80%", borderRadius: 7 }}
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
                <div style={{ fontSize: 22, color: "#fff", marginLeft: "3%" }}>
                  7 Days Replacement
                </div>
              </div>
              <div style={{ marginTop: "3%" }}>
                <Divider style={{ backgroundColor: "#fff", width: "80%" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "3%",
                }}
              >
                <span style={{ width: "100%" }}>
                  <span>
                    <img
                      src={`${serverURL}/images/qqq.svg`}
                      style={{ width: "1.1vw", borderRadius: 7 }}
                    ></img>
                  </span>
                  <span
                    style={{ fontSize: 18, color: "#fff", marginLeft: "1%" }}
                  >
                    <b>ZipCare Protection Plan</b>
                  </span>
                  <span
                    style={{ fontSize: 14, color: "#fff", marginLeft: "5%" }}
                  >
                    Add extra protection to your products
                  </span>
                </span>
              </div>
              <div style={{ marginTop: "3%" }}>
                <Divider style={{ backgroundColor: "#b2bec3", width: "80%" }} />
              </div>
              <div style={{ marginTop: "3%" }}>
                <div style={{ fontSize: 22, color: "#fff" }}>
                  <b> Extended Warranty</b>
                </div>
                <div style={{ fontSize: 11, color: "#fff", marginTop: "2%" }}>
                  Extended protection for your device beyond the manufacturer
                  warranty with coverage against all manufacturing defects.
                </div>
              </div>
              <div style={{ marginTop: "4%" }}>
                <Divider style={{ backgroundColor: "#b2bec3", width: "80%" }} />
              </div>
              <div style={{ fontSize: 15, color: "#fff", marginTop: "4%" }}>
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
                    width: "20%",
                    borderRadius: 12,
                    padding: 20,
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 15,
                  }}
                >
                  <div style={{ padding: 10, color: "#fff" }}>
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
              <div style={{ marginTop: "4%" }}>
                <Divider style={{ backgroundColor: "#fff", width: "80%" }} />
              </div>
              <div
                style={{
                  marginTop: "3%",
                  borderRadius: 5,
                  border: "1px solid #b2bec3",
                  width: "80%",
                  height: "20%",
                }}
              >
                <div style={{ color: "#fff" }}>
                  <b style={{ padding: 7, fontSize: 15 }}>Essential Combo</b>
                </div>
                <div style={{ marginTop: "1%" }}>
                  <Divider
                    style={{ backgroundColor: "#b2bec3", width: "100%" }}
                  />
                </div>
                <div>
                  <div style={{ marginTop: "2%", padding: 3 }}>
                    <FormGroup style={{ color: "#fff", width: "100%" }}>
                      <span style={{ width: "100%" }}>
                        <span style={{ width: "10%" }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                size="large"
                                style={{ color: "#12DAA8" }}
                              />
                            }
                          />
                        </span>
                        <span style={{ width: "10%" }}>
                          <img
                            src={`${serverURL}/images/q.webp`}
                            style={{
                              width: "10%",
                              marginLeft: "-2%",
                              marginBottom: "-4%",
                              borderRadius: 7,
                            }}
                          ></img>
                        </span>
                        <span
                          style={{
                            color: "#fff",
                            fontSize: ".7vw",
                            marginLeft: "1%",
                            width: "30%",
                          }}
                        >
                          {" "}
                          IFB 23BC4 23L Convection Microwave Oven with 71 Menus
                          (Black Floral) - ₹12,169.00
                        </span>
                      </span>
                    </FormGroup>
                  </div>
                </div>
                <div style={{ color: "#fff", marginLeft: "13%" }}>+</div>
                <div style={{ width: "100%" }}>
                  <div style={{ marginTop: "2%", padding: 3 }}>
                    <FormGroup style={{ color: "#fff" }}>
                      <span style={{ width: "100%" }}>
                        <span style={{ width: "10%" }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                size="large"
                                style={{ color: "#12DAA8" }}
                              />
                            }
                          />
                        </span>
                        <span style={{ width: "10%" }}>
                          <img
                            src={`${serverURL}/images/w.webp`}
                            style={{
                              width: "10%",
                              marginLeft: "-2%",
                              marginBottom: "-4%",
                              borderRadius: 7,
                            }}
                          ></img>
                        </span>
                        <span
                          style={{
                            color: "#fff",
                            fontSize: ".7vw",
                            marginLeft: "1%",
                            width: "30%",
                          }}
                        >
                          {" "}
                          Treo 500ml, 1L & 1.5L Glass Mixing Bowl with Flexi Lid
                          (Set of 3 Transparent) - ₹765.00
                        </span>
                      </span>
                    </FormGroup>
                  </div>
                </div>
                <div style={{ color: "#fff", marginLeft: "13%" }}>+</div>
                <div style={{ width: "100%" }}>
                  <div style={{ marginTop: "2%", padding: 3 }}>
                    <FormGroup style={{ color: "#fff" }}>
                      <span>
                        <span style={{ width: "10%" }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                size="large"
                                style={{ color: "#12DAA8" }}
                              />
                            }
                          />
                        </span>
                        <span style={{ width: "10%" }}>
                          <img
                            src={`${serverURL}/images/e.webp`}
                            style={{
                              width: "10%",
                              marginLeft: "-2%",
                              marginBottom: "-4%",
                              borderRadius: 7,
                            }}
                          ></img>
                        </span>
                        <span
                          style={{
                            color: "#fff",
                            fontSize: ".7vw",
                            marginLeft: "1%",
                            width: "30%",
                          }}
                        >
                          {" "}
                          Convection Microwave Oven with 71 Autocook (Black
                          Floral) - ₹6,765.00
                        </span>
                      </span>
                    </FormGroup>
                  </div>
                </div>
                <div style={{ color: "#fff", marginLeft: "13%" }}>+</div>
                <div style={{ width: "100%" }}>
                  <div style={{ marginTop: "2%", padding: 3 }}>
                    <FormGroup style={{ color: "#fff" }}>
                      <span>
                        <span style={{ width: "10%" }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                size="large"
                                style={{ color: "#12DAA8" }}
                              />
                            }
                          />
                        </span>
                        <span style={{ width: "10%" }}>
                          <img
                            src={`${serverURL}/images/r.webp`}
                            style={{
                              width: "10%",
                              marginLeft: "-2%",
                              marginBottom: "-4%",
                              borderRadius: 7,
                            }}
                          ></img>
                        </span>
                        <span
                          style={{
                            color: "#fff",
                            fontSize: ".7vw",
                            marginLeft: "1%",
                            width: "30%",
                          }}
                        >
                          {" "}
                          treo All Fresh 400ml Glass Round Tiffin with Lid -
                          ₹7,999.00
                        </span>
                      </span>
                    </FormGroup>
                  </div>
                </div>
                <div style={{ padding: 6 }}>
                  <div
                    style={{
                      border: "1px solid #12DAA8",
                      width: "50%",
                      marginLeft: "1%",
                      borderRadius: 6,
                      padding: 2,
                      marginTop: "1%",
                      display: "flex",
                      justifyContent: "center",
                      background: "#12DAA8",
                      fontSize: 14,
                    }}
                  >
                    <div style={{ padding: 6 }}>
                      <b> Add 4 items to card </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        )}
      </Grid>

      {matches ? (
        <></>
      ) : (
        <div
          style={{ marginTop: "5%", display: "flex", justifyContent: "center" }}
        >
          <Accordion
            style={{
              color: "#fff",
              border: "1px solid white",
              background: "#191919",
              borderRadius: 8,
              width: "80%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <b style={{ fontSize: "1.2vw" }}>Specifications</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div style={{ fontSize: "1.2vw", color: "#fff" }}>
                  <b>MICROWAVE & OVEN CATEGORY</b>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1%",
                  }}
                >
                  <div style={{ fontSize: "1vw" }}>
                    <b>Product Category</b>
                  </div>
                  <div style={{ marginLeft: "28%", fontSize: "1vw" }}>
                    <b>Product Types</b>
                  </div>
                  <div style={{ marginLeft: "28%", fontSize: "1vw" }}>
                    <b>Product Function</b>{" "}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: "15%", fontSize: "1vw" }}>
                    <b>Microwave Oven</b>
                  </div>
                  <div
                    style={{ marginLeft: "23%", fontSize: "1vw", width: "30%" }}
                  >
                    <b>Grill | Convection</b>
                  </div>
                  <div
                    style={{ marginLeft: "7%", fontSize: "1vw", width: "20%" }}
                  >
                    <b>
                      Cooking | Defrosting | Heating | Baking | Roasting |
                      Grilling
                    </b>{" "}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "2%",
                  }}
                >
                  <div style={{ fontSize: "1vw" }}>
                    <b>Capacity</b>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: "15%", fontSize: "1vw" }}>
                    <b>275 liters</b>
                  </div>
                </div>
                <div style={{ marginTop: "2%" }}>
                  <Divider
                    style={{ backgroundColor: "#b2bec3", width: "100%" }}
                  />
                </div>

                <div
                  style={{ fontSize: "1.2vw", color: "#fff", marginTop: "2%" }}
                >
                  <b>MANUFACTURER DETAILS</b>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1%",
                  }}
                >
                  <div style={{ fontSize: "1vw" }}>
                    <b>Brand</b>
                  </div>
                  <div style={{ marginLeft: "34%", fontSize: "1vw" }}>
                    <b>Model series</b>
                  </div>
                  <div style={{ marginLeft: "30%", fontSize: "1vw" }}>
                    <b>Model no.</b>{" "}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: "15%", fontSize: "1vw" }}>
                    <b>IFB</b>
                  </div>
                  <div
                    style={{ marginLeft: "22%", fontSize: "1vw", width: "30%" }}
                  >
                    <b>23VVHBMNBN</b>
                  </div>
                  <div
                    style={{ marginLeft: "8%", fontSize: "1vw", width: "20%" }}
                  >
                    <b>23HVVKFCG</b>{" "}
                  </div>
                </div>
                <div style={{ marginTop: "2%" }}>
                  <Divider
                    style={{ backgroundColor: "#b2bec3", width: "100%" }}
                  />
                </div>
                <div
                  style={{ fontSize: "1.2vw", color: "#fff", marginTop: "2%" }}
                >
                  <b>PRODUCT DIMENSIONS (OPEN)</b>
                </div>
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #fff",
                      marginTop: "2%",
                      width: "12%",
                      display: "flex",
                      justifyContent: "center",
                      padding: 4,
                      borderRadius: 10,
                    }}
                  >
                    <div
                      style={{ color: "#fff", fontSize: ".8vw", padding: 8 }}
                    >
                      <b>View More</b>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      )}

      <div style={{ marginTop: "5%" }}>
        <Divider style={{ backgroundColor: "#b2bec3", width: "100%" }} />
      </div>
    </div>
  );
}
