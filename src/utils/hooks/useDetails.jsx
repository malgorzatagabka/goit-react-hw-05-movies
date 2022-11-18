import { getMovieId } from 'Api/Api';
import { useEffect, useState } from 'react';

export const useDetails = movieId => {
  const [movie, setMovie] = useState(null);

    useEffect(() => {
      if(movieId)
        getMovieId(movieId).then(response => {
          setMovie({...response});
    });
  }, [movieId]);
  return { movie };
};

