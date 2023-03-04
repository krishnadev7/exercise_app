import { Button, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utlis/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercise = ({bodyPart,setBodyPart,exercises,setExercises}) => {
  const [search, setSearch] = useState('');
  const [bodyParts,setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async() => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
        setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExerciseData();
  },[])

  const handleChange = async e => {
    e.preventDefault();
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipement.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          mb: '50px',
          textAlign: 'center',
        }}
      >
        Awesome Exercises <br /> should Know!
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontweight: '700px',
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '1000px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height='76px'
          value={search}
          onChange={e => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          className='search-btn'
          onClick={handleChange}
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '40px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            postion: 'absolute',
            right: '0',
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:"100%",p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
