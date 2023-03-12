import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  const { id, gifUrl, name, bodyPart,target } = exercise;
  return (
    <Link className='exercise-card' to={`exercise/${id}`}>
      <img src={gifUrl} alt={name} loading='lazy' />
      <Stack direction='row'>
        <Button
          sx={{
            ml: '22px',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >{bodyPart}</Button>
        <Button
          sx={{
            ml: '22px',
            color: '#fff',
            background: '#fcc757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >{target}</Button>
      </Stack>
      <Typography m='21px' fontWeight='bold' color='#000' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>{name}</Typography>
    </Link>
  );
};

export default ExerciseCard;
