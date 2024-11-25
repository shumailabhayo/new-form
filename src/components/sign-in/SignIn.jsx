import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().min(7,"Password must be 7 characters").max(10).required("Password is required"),
  })
const SignIn = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState:{errors} } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100'>
    <form  onSubmit={handleSubmit((data) => {
        console.log(data);

      })}>
    <Box>
        <Typography className='fw-bold' variant='h4'>Sign in to E-Store</Typography>
        <Typography variant='h6'>Welcome to FreshCart! Enter your email to get started.</Typography>
        <Box className='my-3'><Controller control={control} name="email" render={({ field }) => (<TextField error={errors?.email ? true : false} placeholder='Email' size='small' fullWidth {...field} />)} />
        <Typography className='text-danger'>{errors?.email?.message}</Typography></Box>
        <Box> <Controller control={control} name="password" render={({ field }) => ( <TextField error={errors?.password ? true : false} placeholder='Password' size='small' type={ShowPassword ? 'text' : 'Password'} slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start" onClick={() => setShowPassword(!ShowPassword)} >
                  {ShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </InputAdornment>
              ),
            },
          }} fullWidth {...field} />)} />
          <Typography className='text-danger'>{errors?.password?.message}</Typography>
          </Box>
       <Button className='my-3' type='submit' fullWidth variant="contained">Sign In</Button>
       <Typography className=' mt-3' variant='body1'>Don’t have an account? <Link className='text-decoration-none' to="/sign-up">Sign Up</Link></Typography>
      </Box>
    </form>
    </div>
    </>
  )
}

export default SignIn;
