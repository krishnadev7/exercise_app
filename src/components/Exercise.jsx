import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import ExerciseCard from './ExerciseCard';

const Exercise = ({ exercises, bodyPart, setExercises }) => {
  return (
    <Box id='exercises' sx={{ mt: { lg: '109px' } }} mt='50px' p='20px'>
      <Typography variant='h3'>Showing Results...</Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index}/>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercise;
