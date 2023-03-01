import { Box } from '@mui/material'
import React from 'react'
import Exercise from '../components/Exercise'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'

function Home() {
  return (
    <Box>
        <HeroBanner/>
        <SearchExercise/>
        <Exercise/>
    </Box>
  )
}

export default Home