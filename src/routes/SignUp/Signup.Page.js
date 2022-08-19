import React from "react";
import SignupForm from "./Component/SignupForm.component"
import { 
  Box, Grid, Typography
} from "@mui/material";

const appSlogan = "Connect with people around the globe";

const appBio = "Social Site helps you connect and share with the people in your life, no matter where they reside."

function SignupPage() {
  return (
    <Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              href=""
              sx={{
                textAlign: 'center',
                my: 2
              }}
            >
              {appSlogan}
            </Typography>
            <Typography
              variant="p"
              component="p"
              href=""
              sx={{
                textAlign: 'center',
                my: 3
              }}
            >
              {appBio}
            </Typography>
          </Grid>
          <Grid 
            item 
            xs={12}  
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <SignupForm />
          </Grid>
        </Grid>
    </Box>
  );
}

export default SignupPage;