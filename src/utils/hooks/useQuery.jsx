import { getQuery } from 'Api/Api';
import { useEffect, useState } from 'react';


export const useQuery = query => {
  const [movies, setSearchedMovie] = useState([]);
 

  useEffect(() => {
    if (query === "") return;
   
    getQuery(query).then(response => {
      setSearchedMovie([...response.results]);
    });
  }, [query]);

  return { movies };
};

