import { Box } from '@mui/material';
import React, { useState } from 'react';
import Bodypart from '../components/Bodypart';
import Exercise from '../components/Exercise';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';

function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
      <Exercise
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
}

export default Home;
