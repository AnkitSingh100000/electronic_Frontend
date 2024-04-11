import { AvTimer } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Heading from "./projectComponent/Heading";
import categoryicon from "../../src/assets/category.png";
import { getData, postData } from "../services/FetchNodeServices";
var useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:'center'
  },
  box: {
    background:'#f2f2f2',
    width: '500px',
    height:'50%',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function Brand() {
  const useStyle = useStyles();
  const [categoryId, setCategoryId] = useState("");
  const [brandName, setBrandName] = useState("");
  const [image, setImage] = useState({ bytes: "", filename: "" });
  const [errors, setErrors] = useState({});
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

  const handleError = (error, label) => {
    setErrors((prev) => ({ ...prev, [label]: error }));
  };
  const validation = () => {
    var error = false;
    if (categoryId.length == 0) {
      error = true;
      handleError("pls input the category Id", "categoryId");
    }
    if (brandName.length == 0) {
      error = true;
      handleError("pls input the brand Name", "brandName");
    }
    if (image.filename.length == 0) {
      error = true;
      handleError("pls select the image", "image");
    }
    return error;
  };
  const handleSubmit = async () => {
    var error = validation();
    if (error == false) {
      var formData = new FormData();
      formData.append("categoryid", categoryId);
      formData.append("brandname", brandName);
      formData.append("image", image.bytes);
      var response = await postData("brand/submit_brand", formData);
      if (response.status) {
        Swal.fire({
          icon: "success",
          title: "Category",
          text: response.message,
          toast: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          toast: true,
        });
      }
    }
  };
  const handleReset = () => {
    setCategoryId("");
    setBrandName("");
    setImage({ bytes: "", filename: "" });
  };
  const handleImage = (event) => {
    setImage({
      bytes: event.target.files[0],
      filename: URL.createObjectURL(event.target.files[0]),
    });
  };
  return (
    <div className={useStyle.root}>
      <div className={useStyle.box}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Heading
              image={categoryicon}
              caption="New Brands"
              link="/dashboard/displayallbrand"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>CategoryId</InputLabel>
              <Select
                value={categoryId}
                label="categoryId"
                onChange={(event) => setCategoryId(event.target.value)} >
                {fillAllCategory()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={brandName}
              error={errors.brandName}
              helperText={errors.brandName}
              onFocus={() => handleError("", "brandName")}
              onChange={(event) => setBrandName(event.target.value)}
              label="Brand Name"
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              component="label"
              onFocus={() => handleError("", "image")}
              fullWidth
              variant="contained"
            >
              <input
                onChange={handleImage}
                type="file"
                hidden
                accept="images/*"
                multiple
              />
              Brand Logo
            </Button>
            <div
              style={{
                color: "#c0392b",
                fontSize: 12,
                marginLeft: 10,
                marginTop: 6,
              }}
            >
              {errors.image}
            </div>
          </Grid>
          <Grid item xs={6} className={useStyle.center}>
            <Avatar src={image.filename} alt="Brand" variant="rounded" />
          </Grid>
          <Grid item xs={6}>
            <Button
              component="label"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              component="label"
              onClick={handleReset}
              fullWidth
              variant="contained"
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
