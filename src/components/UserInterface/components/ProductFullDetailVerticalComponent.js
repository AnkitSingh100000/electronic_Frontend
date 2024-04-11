import {Grid,FormControl,InputLabel,Select,MenuItem,Divider,object,Button, backdropClasses,} from "@mui/material";
  import * as React from "react";
  import { Box, CardContent, Card } from "@mui/material";
  import FormGroup from "@mui/material/FormGroup";
  import FormControlLabel from "@mui/material/FormControlLabel";
  import Checkbox from "@mui/material/Checkbox";
  import { serverURL } from "../../../services/FetchNodeServices";
  import "slick-carousel/slick/slick.css";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { useTheme } from "@mui/material/styles";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import "slick-carousel/slick/slick-theme.css";
  import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
  import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
  import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
  import PlaceIcon from "@mui/icons-material/Place";
  import { useState,useEffect } from "react";
  import { postData } from "../../../services/FetchNodeServices";
  import ShareIcon from '@mui/icons-material/Share';
  export default function ProductFullDetailVerticalComponent(props)
  {
    var product=props.product
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    var data = product?.picture.split(",")
    const [image,setImage]=useState('')

 const handleImageChange=(item)=>{
  setImage(item)
 }


 useEffect(function(){
  setImage(data[0])
 },[props])
 
    const showSlider = () => {
      return data.map((item) => {
        return (
       
            <div onClick={()=>handleImageChange(item)} style={{ padding: 5,marginLeft:'-34%',cursor:'pointer' }}>
              <img
                src={`${serverURL}/images/${item}`}
                style={{ border: "2px solid grey",width:85 }}
              ></img>
            </div>
        );
      });
    };
    return(<div>
       <div style={{
          fontSize:13,
          color: "#fff",
          marginTop: "2%",
          padding: 5,
          marginLeft:matches?'1%':"18%",
          
        }}
      >
      {matches?<></>:  <div style={{ display: "flex", alignItems: "row" }}>
          Electronic Appliance
          <div style={{ marginTop: -1, color: "grey" }}>
            <KeyboardArrowRightIcon />
          </div>
          Microwave & mobile
          <div style={{ marginTop: -1, color: "grey" }}>
            <KeyboardArrowRightIcon />
          </div>
          Convection mobile
        </div>}
    </div>
   
      <div style={{display:'flex',flexDirection:'row',marginLeft:'24%'}}>
        {matches?<></>:<div>
           <div style={{ color: "#fff", fontWeight: "bold"}}>
                <KeyboardArrowUpIcon />
              </div>
              {showSlider()}
              <div style={{ color: "#fff", fontWeight: "bold" }}>
                <KeyboardArrowDownIcon />
          </div>
          </div>}
        
          <div style={{ width: "100%" }}>
              <div
                style={{
                  display:'flex',
                  width:matches?'18%':'12%',
                  justifyContent:'space-between',
                  gap:'3%',
                  marginLeft: "78%",
                  color: "#fff"
                }}
              >              
                <FavoriteBorderIcon />
                <ShareIcon/>
              </div>
              <div style={{ width: "100%",marginLeft:matches?'':'4%' }}>
                <img src={`${serverURL}/images/${image}`}
                  style={{
                    width:matches?"70vw":"75%",
                    display: "flex",
                    marginLeft: matches ? "-15%" : "0%",
                    marginTop: matches ? "-15%" : "",
                    justifyContent: matches ? "center" : "center",
                  }}
                ></img>
              </div>


              {matches?<></>:<div>
                <div>
                  <Divider
                    style={{ backgroundColor: "#9A9A9A", width: "83%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "93%",
                    
                  }}
                >
                  <div style={{ width: "1%", marginTop: "2%",marginLeft:'4%' }}>
                    <FormGroup style={{ color: "#fff" }}>
                      <FormControlLabel
                      control={<Checkbox style={{ color: "white" }} />}
                        label="Compare"
                      />
                    </FormGroup>
                  </div>
                  <div
                    style={{
                      marginTop: "4.1%",
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
                <div style={{ marginTop: "2%" }}>
                  <Divider
                    style={{ backgroundColor: "#9A9A9A", width: "83%" }}
                  />
                </div>
              </div>}


            </div>
         
          </div>
      

    </div>)
  }