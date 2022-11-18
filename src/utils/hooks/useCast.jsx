import { getCast } from 'Api/Api';
import { useEffect, useState } from 'react';

export const useCast = movieId => {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    if (movieId)
      getCast(movieId).then(response => {
        setActors([...response]);
      });
  }, [movieId]);
  return { actors };
};
