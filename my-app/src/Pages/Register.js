import React,{useState} from "react"
import "../assets/css/Login.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "mui-image";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import register1 from "../assets/Images/register1.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Register() {
  const[email,setEmail] = useState("");
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const [role, setRole] = useState(0)  

  function onValueChange(event){
    console.log(role);
    setRole(event.target.value)
}
    
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data,e) => {
    e.preventDefault();
    const Adduserdata = {
      email: data.email,
      username: data.username,
      password: data.password,
      role: role
    };
    console.log(Adduserdata);

    axios.post("http://localhost:4001/register",Adduserdata)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    navigate("/");
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
    <Container maxWidth="xlg" className="main-banner">
            
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container className="infobox pd-0">
            <Grid lg={7} xs={12} sm={12} md={10}  >
              <Grid container>
                <Grid
                  item
                  lg={6}
                  xs={12}
                  sm={12}
                  md={6}
                  square
                  className="pd-0 lg-lf-bg"
                >              
                  <Box
                    className="login-lf-sec"
                  >

                    <Box className="img-sec-lg">
                      <Box className="mui-image-wrapper">
                        {/* <Image src={Logo} className="img-logo" alt="Logo" /> */}
                      </Box>
                    </Box>
           
                    <Box className="login-form-sec" component="form">
                      <Typography
                        component="h5"
                        variant="h5"
                        className="log-h5"
                      >
                        Register
                      </Typography>
                      <Box sx={{ height: "10%" }}>
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Please fill the details
                        </label>
                        <TextField
                          id="outlined-basic"
                          size="small"                     
                          label="Email"
                          name="email"
                          variant="outlined"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          {...register("email", { required: "This Field is Required",
                        pattern :{
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message:"Invalid Email"
                        },
                        })}
                          error={Boolean(errors.email)}
                          helperText={errors.email?.message}
                        />
                      
                      </Box>
                      <Box>
                         <TextField
                          id="outlined-basic"
                          size="small"                     
                          label="Username"
                          name="username"
                          variant="outlined"
                          className="form-control"
                          onChange={(e) => setUsername(e.target.value)}
                          {...register("username", { required: "This Field is Required",
                    })}
                          error={Boolean(errors.username)}
                          helperText={errors.username?.message}
                        />
                        </Box>
                      <Box>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          label="Password"
                          name="password"
                          variant="outlined"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                          type={showPassword ? 'text' : 'password'}
                          InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton                             
                               aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                className="eye-icon"
                              >                              
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                              </IconButton>
                            </InputAdornment>
                          )
                          }}
                          {...register("password",{ required: "This Field is Required",
                          pattern :{
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:"Invalid Password"
                          },
                         })}
                          error={Boolean(errors.password)}
                          helperText={errors.password?.message}
                        />                         
                      </Box>
                      <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel 
                        value="Admin"
                         name="role" 
                         control={<Radio />} 
                         label="Admin" 
                         onChange={onValueChange}
                         />
                        <FormControlLabel
                         value="User"
                          name="role"
                           control={<Radio />}
                            label="User" 
                            onChange={onValueChange}
                            />
                      </RadioGroup>
                    </FormControl>
                      <Box className="btn-sec">
                        <Button 
                        type="submit"  
                        onClick={handleSubmit(onSubmit)}                   
                          variant="contained"
                          className="btn btn-success login-btn"
                        >
                          Register
                        </Button>
                       
                      </Box>
                      <Box>
                      <label
                          for="exampleFormControlInput1"
                          className="form-label-link"
                        >
                          Already have an account?
                        </label>
                        <Link href="/" underline="hover">Login Here</Link>
                      </Box>
                    </Box>
                  </Box>             
                </Grid>
                <Grid
                  className=" pd-0 lg-r-bg log-rig-sec"
                  item
                  sm={12}
                  md={6}
                  lg={6}
                  xs={12}
                  elevation={6}
                  square
                >
                  <Box className="login-Rg-sec">
                    <Box className="img-sec-lg-rgst img-alg">
                      <Image src={register1} className="img-wd" alt="Logo" />
                    </Box>
                    <Box className="log-cont-p">
                      <p>
                        Organizing is a journey, Not a destination !!!..
                      </p>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>   
    </Container>
    </div>
  );
}

export default Register;
