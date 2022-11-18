import { getReviews } from 'Api/Api';
import { useEffect, useState } from 'react';

export const useReviews = movieId => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (movieId)
      getReviews(movieId).then(response => {
        setReviews([...response.results]);
      });
  }, [movieId]);
  return { reviews };
};
