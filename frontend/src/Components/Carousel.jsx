import React, { useState } from 'react';
import { Slide, Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const images = [
  'https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
  'https://via.placeholder.com/800x400?text=Image+4',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked] = useState(true);

  const handleNext = () => {
    setChecked(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setChecked(true);
    }, 300); 
  };

  const handlePrev = () => {
    setChecked(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setChecked(true);
    }, 300);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '1', height: '450px', position: 'relative', overflow: 'hidden' }}>
        {images.map((image, index) => (
          <Slide
            key={index}
            direction={currentIndex > index ? 'left' : 'right'}
            in={currentIndex === index && checked}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <Box
              component="img"
              src={image}
              alt={`carousel-img-${index}`}
              sx={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </Slide>
        ))}

        {/* Previous Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            zIndex: 1,
          }}
        >
          <ArrowBack />
        </IconButton>

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            zIndex: 1,
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
