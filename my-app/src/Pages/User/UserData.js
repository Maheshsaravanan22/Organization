import React, { useEffect, useState, useContext } from "react";
import Container from "@mui/material/Container";
import "../../assets/css/User.css";
import "../../assets/css/CommonStyle.css";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Userdatatable from "../../Component/datatable/Userdatatable";
import Button from "@mui/material/Button";
import { useNavigate,useParams } from "react-router-dom";
import Topmenuuser from "../Navbar/Topmenuuser";
import axios from "axios";

// const IOSSwitch = styled((props) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//   width: 42,
//   height: 26,
//   padding: 0,
//   "& .MuiSwitch-switchBase": {
//     padding: 0,
//     margin: 2,
//     transitionDuration: "300ms",
//     "&.Mui-checked": {
//       transform: "translateX(16px)",
//       color: "#fff",
//       "& + .MuiSwitch-track": {
//         backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
//         opacity: 1,
//         border: 0,
//       },
//       "&.Mui-disabled + .MuiSwitch-track": {
//         opacity: 0.5,
//       },
//     },
//     "&.Mui-focusVisible .MuiSwitch-thumb": {
//       color: "#33cf4d",
//       border: "6px solid #fff",
//     },
//     "&.Mui-disabled .MuiSwitch-thumb": {
//       color:
//         theme.palette.mode === "light"
//           ? theme.palette.grey[100]
//           : theme.palette.grey[600],
//     },
//     "&.Mui-disabled + .MuiSwitch-track": {
//       opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     boxSizing: "border-box",
//     width: 22,
//     height: 22,
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 26 / 2,
//     backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
//     opacity: 1,
//     transition: theme.transitions.create(["background-color"], {
//       duration: 500,
//     }),
//   },
// }));

function UserData(props) {
  const [userdata, setUserdata] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams("");
  console.log(id);

useEffect(() => {
    const getdata = async () => {
        try{
      const res = await axios.get(`http://localhost:4001/getuser/${id}`)
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


  return (
    <div className="nav-tp">
      <Topmenuuser />
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
                        <a data-abc="true">User</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a data-abc="true">User Records</a>
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
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

          <Stack className="card-sectons-2" spacing={2}>
            <Box>
              <Userdatatable
                data={userdata}
                column={columns}
              />
            </Box>
          </Stack>

      </Container>
    </div>
  );
}

export default UserData;
