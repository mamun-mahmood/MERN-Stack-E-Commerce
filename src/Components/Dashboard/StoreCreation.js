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
  Typography,
} from "@mui/material";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router";
// import NewsCard from "./NewsCard";

const StoreCreation = () => {
  const { currentUser } = useAuth();
  const [formData, setFormdata] = useState({
    sellerName: "N/A",
    sellerEmail: currentUser && currentUser.email,
    aboutSeller: "N/A",
    country: "N/A",
    location: "N/A",
    phoneNumber: "N/A",
    fbUrl: "N/A",
    youtubeUrl: "N/A",
    whatsappNO: "N/A",
    website: "N/A",
    shopName: 'N/A',
    bussinestype: "N/A",
    mainProducts: "N/A",
    totalEployees: "N/A",
    totalRevenue: "N/A",
    yearEstablished: "N/A",
    certifications: "N/A",
    mainMarket: "N/A",
    bannerImg: "N/A",
    profileImg: "N/A",
    albumImg: "N/A",
    timeStamp: "",
    AllOrder: [
        {
            invoice: '',
            name: '',
            placedTimeStamp: '',
            shippingAddres: '',
            billingAddres: '',
            customerPhone: '',
            paymentMethod: '',
            totalBill: '',
            status: '',
        }
    ],
    //product has seller email
    totalProducts: [{

    }],
    followers: '',
    level: '',
    reviews: '',

  });
  const [age, setAge] = React.useState("Category");

  const handleChange = (e) => {
    if (e.target.name === "sellerName") {
      formData.sellerName = e.target.value;
    }
    if (e.target.name === "aboutSeller") {
      formData.aboutSeller = e.target.value;
    }
    if (e.target.name === "country") {
      formData.country = e.target.value;
    }
    if (e.target.name === "location") {
      formData.location = e.target.value;
    }
    if (e.target.name === "phoneNumber") {
      formData.phoneNumber = e.target.value;
    }
    if (e.target.name === "fbUrl") {
      formData.fbUrl = e.target.value;
    }
    if (e.target.name === "youtubeUrl") {
      formData.youtubeUrl = e.target.value;
    }
    if (e.target.name === "whatsappNO") {
      formData.whatsappNO = e.target.value;
    }
    if (e.target.name === "website") {
      formData.website = e.target.value;
    }
    if (e.target.name === "shopName") {
      formData.shopName = e.target.value;
    }
    if (e.target.name === "bussinestype") {
      formData.bussinestype = e.target.value;
    }
    if (e.target.name === "mainProducts") {
      formData.mainProducts = e.target.value;
    }
    if (e.target.name === "totalEployees") {
      formData.totalEployees = e.target.value;
    }
    if (e.target.name === "totalRevenue") {
      formData.totalRevenue = e.target.value;
    }
    if (e.target.name === "yearEstablished") {
      formData.yearEstablished = e.target.value;
    }
    if (e.target.name === "certifications") {
      formData.certifications = e.target.value;
    }
    if (e.target.name === "mainMarket") {
      formData.mainMarket = e.target.value;
    }
    if (e.target.name === "bannerImg") {
      formData.bannerImg = e.target.value;
    }
    if (e.target.name === "profileImg") {
      formData.profileImg = e.target.value;
    }
    if (e.target.name === "albumImg") {
      formData.albumImg = e.target.value;
    }
    setAge(e.target.value);
    setPreview(true);
  };
  let history = useHistory();
  const [preview, setPreview] = useState(false);
  const [imgLoad, setImgLoad] = useState(false);
  const handleImgUpload = (event) => {
    const imgData = new FormData();
    imgData.set("key", "c52ef286d44538b5e35cd23b4743904e");
    imgData.append("image", event.target.files[0]);
    setImgLoad(true);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((res) => {
        formData.bannerImg = res.data.data.display_url;
        setImgLoad(false);
        setPreview(true);
      })
      .catch((err) => {
        setImgLoad(false);
        setPreview(false);
      });
  };

  const handleSubmit = (e) => {
    formData.timeStamp = Date.now();
    setImgLoad(true);
    axios
      .post("http://localhost:5001/addNewSeller", formData)
      .then(() => {
        setImgLoad(false);
        document.getElementById("myForm").reset();
        alert("Successfully Added!");
        setFormdata({});
        setPreview(false);
        history.replace("/seller_dashboard");
      })
      .catch((err) => console.log(err));
    e.preventDefault();
  };
  return (
    <div
      className="box_shadow mb-5"
      style={{
        marginTop: "20px",
        width: "60%",
        marginLeft: "20%",
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
        Create your store
      </p>
      <form id="myForm">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              multiline
              variant="outlined"
              name="sellerName"
              label="Your Name"
              fullWidth
              onChange={handleChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              multiline
              variant="outlined"
              name="aboutSeller"
              label="About You"
              fullWidth
              onChange={handleChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="country"
              label="Country"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              name="location"
              label="Location"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="fbUrl"
              label="Facebook Profile"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="youtubeUrl"
              label="Youtube Link"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="whatsappNO"
              label="WhatsApp No"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="website"
              label="Website url"
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography style={{ textAlign: "center" }}>
              About Company
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="shopName"
              label="Shop Name"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="bussinestype"
              label="Bussiness Type"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="mainProducts"
              label="Main Products"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="totalEployees"
              label="Total Eployees"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="totalRevenue"
              label="Total Anual Revenue"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="yearEstablished"
              label="Year Established"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="certifications"
              label="Certifications"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              required
              variant="outlined"
              name="mainMarket"
              label="Main Market"
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
                Upload Profle Photo
                <input type="file" hidden />
              </Button>
              <Button variant="contained" component="label">
                Upload store cover photo
                <input type="file" hidden onChange={handleImgUpload} />
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <button className="btn btn-info w-100 mb-3">
              Upload Some Photos for Store Album
            </button>
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
          // //   disabled={
          // //     !(
          // //       formData.authorName &&
          // //       formData.newsHeadline &&
          // //       formData.description &&
          // //       formData.imgURL &&
          // //       formData.catagory
          // //     )
          //   }
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default StoreCreation;
