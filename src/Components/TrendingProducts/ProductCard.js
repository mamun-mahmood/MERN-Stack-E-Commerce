import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Thumbnail1 from "../../Resources/thumb1212.png";
import "./ProductCard.css";
export default function RecipeReviewCard() {
  return (
    <Card style={{ width: "100%", height: "400px" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="David Semllons"
        subheader="@David_Semllons"
      />
      <CardMedia
        component="img"
        height="175"
        image={Thumbnail1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
          ipsam.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/checkout_here">
          <button
            className="btn btn-outline-secondary m-1"
            style={{ color: "black" }}
          >
            Order Now
          </button>
        </Link>
        <button
          className="btn m-1"
          style={{ backgroundColor: "#1d5dc8", color: "white" }}
        >
          Add to Cart
        </button>
      </CardActions>
    </Card>
  );
}
