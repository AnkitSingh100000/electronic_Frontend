import {Grid,FormControl,InputLabel,Select,MenuItem,Divider,object,Button, backdropClasses,} from "@mui/material";
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
  import ShareIcon from '@mui/icons-material/Share';
  export default function SpecificationComponent()
  {  
    return(<div style={{width:'96%',marginLeft:'2%'}}>       
              <div >
                  <Accordion
                    style={{
                      color: "#fff",
                      border: "1px solid white",
                      background: "#191919",
                      borderRadius: 8,
                      width: "100%",
                      marginRight: "8%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <b style={{ fontSize: "1.5vw" }}>Specifications</b>
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
                              marginLeft: "21%",
                              fontSize: "1vw",
                              width: "30%",
                            }}
                          >
                            <b>Grill | Convection</b>
                          </div>
                          <div
                            style={{
                              marginLeft: "6%",
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
                          <div style={{ marginLeft: "32%", fontSize: "1vw" }}>
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
              </div>)
  }