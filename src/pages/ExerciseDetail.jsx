import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from '../components/Details';
import { ExercisesVideos } from '../components/ExercisesVideos';
import { SimilarExercise } from '../components/SimilarExercise';
import { exerciseOptions, fetchData } from '../utlis/fetchData';

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbURL = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchURL =
        'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(
        `${exerciseDbURL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExercisesVideos />
      <SimilarExercise />
    </Box>
  );
}

export default ExerciseDetail;
