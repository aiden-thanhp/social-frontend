import React from "react";
import Menu from "../components/Menu/Menu.component";
import News from "../components/News/News.component";
import { 
  Grid, 
  Box
} from "@mui/material";


function MainLayout({ pages, children }) {
  return (
    <Box disableGlutters>
      <Box
        sx={{ 
          display: { xs: "block", sm: "none", md: "none" },
          mt: 2,
          ml: 2,
          mr: 2
        }}
      >
        {children}
        <News />
      </Box>
      <Box
        sx={{ 
          display: { xs: "none", sm: "block", md: "none" },
          mt: 2,
          ml: 2,
          mr: 2
        }}
      >
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <Menu pages={pages} />
            <News top={2} />
          </Grid>
          <Grid item sm={8}>
            {children}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ 
          display: { xs: "none", sm: "none", md: "block" },
          mt: 2,
          ml: 2,
          mr: 2
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Menu pages={pages} />
          </Grid>
          <Grid item md={6}>
            {children}
          </Grid>
          <Grid item md={3}>
            <News />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainLayout;
