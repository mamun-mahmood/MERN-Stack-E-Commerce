import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Button,
  LinearProgress,
  InputLabel,
} from "@mui/material";
import { useAuth } from "../AuthContext";

const AddProduct = () => {
  const { currentUser } = useAuth();
  const [formData, setFormdata] = useState(
    {
      sellerEmail: currentUser && currentUser.email,
      productTitle: "N/A",
      shopName: "N/A",
      imgURL: "",
      stock: "N/A",
      starCount: 0,
      description: "N/A",
      category: "N/A",
      timeStamp: "N/A",
      startingPrice: "N/A",
      finalPrice: "N/A",
      features: [{}],
      shippingCharge: "N/A",
      keyWords: [{}],
      discountPercentage: 0,
      varriation: [{ key: "", value: "" }],
      questions: [{}],
    },
  );
  const handleChange = (e) => {
    if (e.target.name === "productTitle") {
      formData.productTitle = e.target.value;
    }
    if (e.target.name === "startingPrice") {
      formData.startingPrice = e.target.value;
    }
    if (e.target.name === "finalPrice") {
      formData.finalPrice = e.target.value;
    }
    if (e.target.name === "stock") {
      formData.stock = e.target.value;
    }
    if (e.target.name === "shippingCharge") {
      formData.shippingCharge = e.target.value;
    }
    if (e.target.name === "category") {
      formData.category = e.target.value;
    }
  };
  console.log(formData);
  const [imgLoad, setImgLoad] = useState(false);
  const handleImgUpload = (event) => {
    const imgData = new FormData();
    imgData.set("key", "c52ef286d44538b5e35cd23b4743904e");
    imgData.append("image", event.target.files[0]);
    setImgLoad(true);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((res) => {
        formData.imgURL = res.data.data.display_url;
        setImgLoad(false);
        imgLoadPlaceHolder = "Image Uploading Done";
      })
      .catch((err) => {
        setImgLoad(false);
      });
  };
  let imgLoadPlaceHolder = "Upload An Image";
  const handleSubmit = (e) => {
    formData.timeStamp = Date.now();
    setImgLoad(true);
    axios.post("http://localhost:5001/addproduct", formData).then(() => {
      setImgLoad(false);
      document.getElementById("myForm").reset();
      alert("Successfully Added!");
      setFormdata({});
    });
    e.preventDefault();
  };

  return (
    <div
      className="box_shadow"
      style={{
        marginTop: "20px",
        width: "50%",
        marginLeft: "15%",
        padding: "20px 10px",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "580",
          color: "grey",
        }}
      >
        Add New Product
      </p>
      <form id="myForm">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              multiline
              variant="outlined"
              name="productTitle"
              label="Product Title"
              fullWidth
              onChange={handleChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="startingPrice"
              label="Starting Price"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="finalPrice"
              label="Final Price"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="stock"
              label="stock"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="shippingCharge"
              label="Shipping Charge"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="category"
              label="Category"
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <p>Add Features</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="key"
              label="Features Name"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="value"
              label="Features Value"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="key"
              label="Features Name"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="value"
              label="Features Value"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="key"
              label="Features Name"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="value"
              label="Features Value"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <p>Varriations (color/size). Optional</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              name="value"
              label="Name"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              name="value"
              label="Value"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              name="value"
              label="Name"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              name="value"
              label="Value"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              name="value"
              label="Name"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              name="value"
              label="Value"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button variant="contained" component="label">
                {imgLoadPlaceHolder}
                <input type="file" hidden onChange={handleImgUpload} />
              </Button>
            </div>
          </Grid>
        </Grid>

        {imgLoad && <LinearProgress color="secondary" />}
        <Button
          style={{
            marginTop: "25px",
            marginBottom: "50px",
            width: "50%",
            marginLeft: "25%",
          }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          // disabled={
          //   !(
          //     formData.authorName &&
          //     formData.newsHeadline &&
          //     formData.description &&
          //     formData.imgURL &&
          //     formData.catagory
          //   )
          // }
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
