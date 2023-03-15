import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from '../components/Details';
import { ExercisesVideos } from '../components/ExercisesVideos';
import { SimilarExercise } from '../components/SimilarExercise';
import { exerciseOptions, fetchData, youtubeOptions } from '../utlis/fetchData';

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
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
      const exerciseVideoData = await fetchData(
        `${youtubeSearchURL}/search?q=${exerciseDetail.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExercisesVideos
        // exerciseVideos={exerciseVideos}
        // name={exerciseDetail.name}
      />
      <SimilarExercise />
    </Box>
  );
}

export default ExerciseDetail;
