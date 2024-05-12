import { Grid } from '@mui/material'
import React from 'react'
import assets from "../assets";
import Registration from './Registration'

const SignupPage = () => {
    const handleSubmit = (values) => {
      console.log(values);
    }
    
  return (
      <Grid container sx={{ height: "100vh" }}>
          <Grid item xs={12} sm={6} md={4} sx={{ position: "relative", padding: 3, maxWidth: '100vw' }}>
              <Registration handleSubmit={handleSubmit}/>
          </Grid>
          <Grid item xs={8} sm={6} md={8} sx={{
              position: "relative",
              backgroundImage: `url(${assets.images.signupBg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
          }}>
          </Grid>
      </Grid>
  )
}

export default SignupPage
