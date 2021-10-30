import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts";
import AddProduct from "./AddProduct";
const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    zIndex: "5",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [drawerComponentSwitch, setDrawerComponentSwitch] = React.useState(
    "Dashboard"
  );
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => setDrawerComponentSwitch("Dashboard")}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => setDrawerComponentSwitch("Orders")}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem
              button
              onClick={() => setDrawerComponentSwitch("AddProducts")}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Add Products" />
            </ListItem>
            <ListItem
              button
              onClick={() => setDrawerComponentSwitch("AllProducts")}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="All Products" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        {drawerComponentSwitch === "Dashboard" && (
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    {/* <Chart /> */} <p>Charts</p>
                  </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Deposits />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Orders />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
        {drawerComponentSwitch === "Orders" && <AllOrders />}
        {drawerComponentSwitch === "AllProducts" && <AllProducts />}
        {drawerComponentSwitch === "AddProducts" && <AddProduct />}
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
