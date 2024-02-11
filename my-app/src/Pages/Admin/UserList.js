import React, { useEffect, useState, useContext } from "react";
import Container from "@mui/material/Container";
import "../../assets/css/User.css";
import "../../assets/css/CommonStyle.css";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Usertable from "../../Component/datatable/Usertable";
import Admintable from "../../Component/datatable/Admintable";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Topmenu from "../Navbar/Topmenu";
import axios from "axios";

// import { useNavigate } from "react-router-dom";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function UserLists(props) {
  const [toggle, setToggle] = useState(true);
  const [userdata, setUserdata] = useState([]);
  const [admindata, setAdmindata] = useState([]);
  const navigate = useNavigate();
  const pagelink = () => {
    navigate("/AddUser");
  };
   const pagelinkadmin = () => {
    navigate("/Addadmin");
   }
   useEffect(() => {
    const getadmindata = async () => {
        try{     //if(admin)
          console.log()
      const res = await axios.get('http://localhost:4001/getadmindata')
      setAdmindata(res.data);
        }
        catch(err){
            console.log("Error while using getadmindata api",err.message);
        }
    }
    getadmindata()
  }, [])
  
useEffect(() => {
    const getdata = async () => {
        try{     //if(admin)
      const res = await axios.get('http://localhost:4001/getuserdata')
     setUserdata(res.data);
        }
        catch(err){
            console.log("Error while using getuserdata api",err.message);
        }
    }
    getdata()
  }, [])



  const columns = [
    { head: "S.No" },
    { head: "First Name" },
    { head: "Last Name" },
    { head: "Email" },
    { head: "Contact No" },
    { head: "Address" },
    { head: "Location" },
    { head: "Department" },
    { head: "Title" },
    { head: "Reporting To" },
    { head: "Actions" },
  ];

  const columnsadmin = [
    { head: "S.No" },
    { head: "First Name" },
    { head: "Last Name" },
    { head: "Email" },
    { head: "Contact No" },
    { head: "Address" },
    { head: "Location" },
    { head: "Department" },
    { head: "Title" },
    { head: "Actions" },
  ];

  const listviewtog = () => {
    setToggle(!toggle);
  };



  return (
    <div className="nav-tp">
      <Topmenu />
      {/* <!---------------Breadcrumb & Search  section Start   ---------------------> */}
      <div className="brdcm-sec">
        <div className="container">
          <div className="section-2 ">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12 pd-0">
                <div className="hdr-brdcm">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-custom">
                      <li className="breadcrumb-item">
                        <a data-abc="true">Admin</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a data-abc="true">Records</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------Breadcrumb & Search  section End  ---------------------> */}

      <Container className="container-width  ">
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Box>
              <Grid container spacing={2}>
                <Grid className="pd-lf" lg={5} md={6} sm={12} xs={12}>
                  <Grid className="switch-btn-sec pd-lf">
                  <Typography className="toggle-lab ">
                     Admin Records
                    </Typography>
                    <FormControlLabel
                      control={
                        <IOSSwitch sx={{ m: 1 }} onClick={listviewtog} />
                      }
                    />
                    <Typography className="toggle-lab ">User Records</Typography>
                  </Grid>
                </Grid>
                <Grid className="pd-rg" lg={7} md={6} sm={12} xs={12}>
                  <Grid className="tog-btn-rig " container spacing={2}>
                  
                    <Grid
                      className="tog-btn-rig-btn pd-rg"
                      lg={2.5}
                      md={6}
                      sm={6}
                      xs={6}
                    >
                       <Button
                        onClick={pagelinkadmin}
                        className="Add-btn-admin"
                        variant="contained"
                      >
                        {" "}
                        Add New Admin{" "}
                      </Button>
                      <Button
                        onClick={pagelink}
                        className="Add-btn"
                        variant="contained"
                      >
                        {" "}
                        Add New User{" "}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {toggle ? (
          <Stack className="card-sectons-2" spacing={2}>
            <Typography variant="h4" className="heading-records">Admin Records</Typography>
                <Box>
              <Admintable
                data={admindata}
                column={columnsadmin}
              />
            </Box>
          </Stack>
        ) : (
          <Stack className="card-sectons-2" spacing={2}>
             <Typography variant="h4" className="heading-records">User Records</Typography>
            <Box>
              <Usertable
                data={userdata}
                column={columns}
              />
            </Box>
          </Stack>
        )}
      </Container>
    </div>
  );
}

export default UserLists;
