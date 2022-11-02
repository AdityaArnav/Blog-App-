import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
    const [inputs, setInputs] = useState({
        name : "",
        email :"",
        password : ""
    })
    const [isSignup, setIsSignup]= useState(false);
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setInputs({...inputs,[name]:value})
    }

    const sendReq = async () =>{
      const res = await axios.post("http://localhost:3000/api/user/login",{
        email: inputs.email,
        password : inputs.password
      }).catch(err => console.log(err));
      const data = await res.data;
      return data;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs)
        sendReq();

    }
    
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
          maxWidth={400}

        >
          <Typography padding={3} variant='h4' textAlign="center">{isSignup?"REGISTER":"LOGIN"}</Typography>
          {isSignup && <TextField name="name" onChange={handleChange} placeholder='Name' margin="normal" />}
          <TextField  name="email" type={"email"} onChange={handleChange} placeholder='Email' margin="normal" />
          <TextField  name="password" type={'password'} onChange={handleChange} placeholder='Password' margin="normal" />
          <Button variant='contained' sx={{borderRadius:3,marginTop:3}} color="warning" type="submit" >Submit</Button>
          <Button onClick={()=>setIsSignup(isSignup===false?true:false)} sx={{borderRadius:3}} >Change to {isSignup?"Login":"Signup"}</Button>
        </Box>
      </form>
    </>
  );
};

export default Auth;
