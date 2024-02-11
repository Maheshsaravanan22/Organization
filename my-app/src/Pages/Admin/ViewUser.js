import React, { useState,useEffect } from "react";
import {
  Container,
  Stack,
  Box,
  InputLabel,
  Button,
  Dialog,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import "../../assets/css/User.css";
import "../../assets/css/CommonStyle.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Topmenu from "../Navbar/Topmenu";
import { useParams } from "react-router-dom";

function ViewUser() {
  const navigate = useNavigate();
  const handlecloseuser = () => {
   navigate("/UserLists");
  }
  const [userdata, setUserdata] = useState([]);

  const { id } = useParams("");
  console.log(id);
 
  useEffect(() => {
    const getdata = async () => {
        try{
      const res = await axios.get(`http://localhost:4001/getuser/${id}`)
     setUserdata(res.data);
      console.log(res.data);
        }
        catch(err){
            console.log("Error while using getuser api",err.message);
        }
    }
    getdata()
  }, [])


  return (
    <Box className="nav-tp">
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
                        <a data-abc="true">View User</a>
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
        <Stack className="card-sectons" spacing={2}>
          <Box className="card-main-hdr">
            <ArrowBackIcon onClick={() => navigate(-1)} />
            <h4>View User </h4>
          </Box>
          <Box className="card-frm-body ">
            <Box className="sub-mnu-contend">
              <form id="myForm">
                <Box className="form-group">
                  <Grid container spacing={3}>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                       Name
                      </InputLabel>
                      <TextField
                        size="small"
                        value={userdata.name}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Password
                        </InputLabel>
                        <TextField
                        size="small"
                        value={userdata.password}
                        InputProps={{ readOnly: true }}                   
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>

                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                       Email Address
                      </InputLabel>
                      <TextField
                        size="small"
                        value={userdata.email}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                       Contact No
                      </InputLabel>
                      <TextField
                        size="small"
                        value={userdata.contact}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Address
                      </InputLabel>
                      <TextField
                        size="small"
                        value={userdata.address}
                        InputProps={{ readOnly: true }}   
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Location
                      </InputLabel>
                      <TextField
                       size="small"
                       value={userdata.location}
                       InputProps={{ readOnly: true }}
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Department
                      </InputLabel>
                      <TextField
                        size="small"
                        value={userdata.department}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Title
                      </InputLabel>
                      <TextField
                        size="small"
                        value={userdata.title}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Reporting To
                      </InputLabel>
                      <TextField
                        size="small"
                        value={userdata.reporting}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box>
                  <Stack spacing={1} className="form-btn-sec" direction="row">
                    <Button
                      className="Cancel-btn"
                      variant="outlined"
                      onClick={handlecloseuser}
                    >
                      Close
                    </Button>
                  </Stack>
                </Box>
              </form>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default ViewUser;
