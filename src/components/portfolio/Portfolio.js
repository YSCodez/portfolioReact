import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
  return (
    <Box id={'portfolio'} ref={innerRef}>
      <Grid container display={'flex'} justifyContent={'center'} spacing={4}> {/* Added spacing prop */}
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              images={project.images}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
