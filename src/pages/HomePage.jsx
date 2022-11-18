import { useTrending } from 'utils/hooks/useTrending';
import { useLocation } from 'react-router-dom';
import { Container, Wrapper,Image,StyledLink } from './home.styled';

const HomePage = () => {
  const location = useLocation();
  const { trendingMovies } = useTrending();

  return (
    <main>
      <h1>Check out the trending list for the day! </h1>
       <Container>
        {trendingMovies.map(movie => (
          <Wrapper key={movie.id}>
            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
              <p>{movie.title} </p>
          <Image 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}`} 
        >
              </Image>
            </StyledLink>
          </Wrapper>
        ))}
      </Container>
    </main>
  );
};

export default HomePage;
