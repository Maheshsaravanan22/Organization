import React, { useState, useEffect, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import Topmenu from "../Navbar/Topmenu";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { updatedata } from "../../Component/context/ContextProvider";

function EditAdmin(props) {
  const navigate = useNavigate();

  
  const [userdata, setUserdata] = useState({
    frstname: "",
    password: "",
    email: "",
    contact: "",
    address: "",
    location: "",
    department: "",
    title: "",
})


const handleChange = (event) => {
  console.log(event.target)
  const { name, value } = event.target;
  setUserdata(prevInput => {
      return {
          ...prevInput,
          [name]: value
      }
  })

}

  const formdataClear = () => {
    handleClose();
    reset({
      name: null,
      password: null,
      email: null,
      contact: null,
      address: null,
      location: null,
      department: null,
      title: null,
    });
  };

  const handleclose = () => {
    navigate("/UserLists");
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { updata, setUPdata } = useContext(updatedata);

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();


  const { id } = useParams("");
  console.log(id);

  useEffect(() => {
    const getdata = async () => {
     try{
      const res = await axios.get(`http://localhost:4001/getadmin/${id}`)
     setUserdata(res.data);
      console.log(res.data);
        }
        catch(err){
            console.log("Error while using getuser api",err.message);
        }
    }
    getdata()
  }, [])

  const updateUser = async (data) => {
    
    const { name, password, email ,contact, address, location, department, title} = userdata
      const res2 = await fetch(`/updateuser/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, password, email ,contact, address, location, department, title}),
      });

      const updatedData = await res2.json();
      console.log(updatedData);
      navigate("/UserLists");

      if (res2.status === 422 || !updatedData) {
      } else {
        setUPdata(updatedData);
      }
    }
  

  const refresh = () => window.location.reload(true);

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
                      <a data-abc="true">Edit Admin</a>
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
          <h4>Edit Admin</h4>
        </Box>
        <Box className="card-frm-body ">
          <Box className="sub-mnu-contend">
            <form id="myForm" onSubmit={handleSubmit(updateUser)}>
              <Box className="form-group">
                <Grid container spacing={3}>
                  <Grid lg={4} md={4} sm={2} xs={12}>
                    <InputLabel shrink htmlFor="bootstrap-input">
                     Name
                    </InputLabel>
                    <TextField
                      name="name"
                      value={userdata.name}
                      size="small"
                      fullWidth
                      id="outlined-basic"
                      placeholder=""
                      variant="outlined"
                      onChange={handleChange}
                      {...register("name", {
                        required: "Name is required.",
                      })}
                      error={Boolean(errors.name)}
                      helperText={errors.name?.message}
                    />
                  </Grid>
                  <Grid lg={4} md={4} sm={2} xs={12}>
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Password
                      </InputLabel>
                      <TextField
                      name="password"
                      value={userdata.password}
                      size="small"
                      fullWidth
                      id="outlined-basic"
                      placeholder=""
                      variant="outlined"
                      {...register("password", {
                        required: "Password is required.",
                      })}
                      error={Boolean(errors.password)}
                      helperText={errors.password?.message}
                    />
                  </Grid>

                  <Grid lg={4} md={4} sm={2} xs={12}>
                    <InputLabel shrink htmlFor="bootstrap-input">
                     Email Address
                    </InputLabel>
                    <TextField
                      name="email"
                      size="small"
                      value={userdata.email}
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
                      value={userdata.contact}
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
                      value={userdata.address}
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
                      value={userdata.location}
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
                      value={userdata.department}
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
                      value={userdata.title}
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
                    onClick={handleclose}
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

export default EditAdmin;
