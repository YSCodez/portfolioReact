import React, { useEffect } from 'react'; // Import useEffect
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';
import { loadBootstrapCSS, unloadBootstrapCSS } from '../utils/loadBootstrapCSS'; // Adjust path as needed

function PortfolioBlock({ images, live, source, title }) {
  useEffect(() => {
    // Load Bootstrap CSS when the component mounts
    loadBootstrapCSS();

    // Clean up Bootstrap CSS when the component unmounts
    return () => {
      unloadBootstrapCSS();
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '400px', // Reduced maxHeight for smaller carousel images
    objectFit: 'cover',
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      mb={4} // Margin bottom to separate carousels if needed
    >
      <Carousel slide={false}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              style={imageStyle}
              src={image}
              alt={`${title} slide ${index + 1}`}
              loading="lazy"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>{title}</h1> {/* Added marginTop for spacing */}
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box> */}
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
