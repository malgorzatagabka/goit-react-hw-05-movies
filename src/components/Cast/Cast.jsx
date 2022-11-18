import { useCast } from 'utils/hooks/useCast';
import { useParams } from 'react-router-dom';
import { Container } from './cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const { actors } = useCast(movieId);

  if (!actors) return <Loader/>;

  return (
    <Container> 
    
      {actors.map(actor => {
        return (
          <div key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={`${actor.name}`}
              width="140"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        );
      })}
      
      </Container>
  );
};

export default Cast;
