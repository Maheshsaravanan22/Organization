import React, { useState } from "react";
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
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Topmenu from "../Navbar/Topmenu";
import { useForm} from "react-hook-form";

function Addadmin() {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data,e) => {
    e.preventDefault();
    const Addadmindata = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      contact: data.contact,
      address: data.address,
      location: data.location,
      department: data.department,
      title: data.title,
    };
    console.log(Addadmindata);

    axios.post("http://localhost:4001/addadmin",Addadmindata)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    navigate("/UserLists");
  }
  
  const Closesite = () => {
    navigate("/UserLists");
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  const formdataClear = () => {
    handleClose();
    reset({
      firstname: null,
      lastname: null,
      email: null,
      contact: null,
      address: null,
      location: null,
      department: null,
      title: null,
    });
  };

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
                        <a data-abc="true">Add Admin</a>
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
            <h4>Add Admin </h4>
          </Box>
          <Box className="card-frm-body ">
            <Box className="sub-mnu-contend">
              <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <Box className="form-group">
                  <Grid container spacing={3}>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                       First Name
                      </InputLabel>
                      <TextField
                        name="firstname"
                        size="small"
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                        {...register("firstname", {
                          required: "First Name is required.",
                        })}
                        error={Boolean(errors.firstname)}
                        helperText={errors.firstname?.message}
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Last Name
                        </InputLabel>
                        <TextField
                        name="lastname"
                        size="small"
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                        {...register("lastname", {
                          required: "Last Name is required.",
                        })}
                        error={Boolean(errors.lastname)}
                        helperText={errors.lastname?.message}
                      />
                    </Grid>

                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                       Email Address
                      </InputLabel>
                      <TextField
                        name="email"
                        size="small"
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                        {...register("email", {
                          required: "Email Address is required.",
                          pattern :{
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:"Invalid Email"
                          },
                        })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                       Contact No
                      </InputLabel>
                      <TextField
                        name="contact"
                        size="small"
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                        {...register("contact", {
                          required: "Contact No is required.",
                        })}
                        error={Boolean(errors.contact)}
                        helperText={errors.contact?.message}
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Address
                      </InputLabel>
                      <TextField
                        name="address"
                        size="small"
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                        {...register("address", {
                          required: "Address is required.",
                        })}
                        error={Boolean(errors.address)}
                        helperText={errors.address?.message}
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Location
                      </InputLabel>
                      <TextField
                        name="location"
                        size="small"
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                        {...register("location", {
                          required: "location is required.",
                        })}
                        error={Boolean(errors.location)}
                        helperText={errors.location?.message}
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Department
                      </InputLabel>
                      <TextField
                        name="department"
                        size="small"
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                        {...register("department", {
                          required: "Department is required.",
                        })}
                        error={Boolean(errors.department)}
                        helperText={errors.department?.message}
                      />
                    </Grid>
                    <Grid lg={4} md={4} sm={2} xs={12}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Title
                      </InputLabel>
                      <TextField
                        name="title"
                        size="small"
                        fullWidth
                        id="outlined-basic"
                        placeholder=""
                        variant="outlined"
                        {...register("title", {
                          required: "Title is required.",
                        })}
                        error={Boolean(errors.title)}
                        helperText={errors.title?.message}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box>
                  <Stack spacing={1} className="form-btn-sec" direction="row">
                    <Button
                      className="Cancel-btn"
                      variant="outlined"
                      onClick={Closesite}
                    >
                      Close
                    </Button>
                    <Button
                      className="Cancel-btn"
                      variant="outlined"
                      onClick={handleClickOpen}
                    >
                      Clear
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Are you sure Do you want to Clear ?"}
                      </DialogTitle>
                      <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={formdataClear} autoFocus>
                          Agree
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <Button
                      className="Add-btn"
                      type="submit"
                      variant="contained"
                    >
                      Submit
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

export default Addadmin;
