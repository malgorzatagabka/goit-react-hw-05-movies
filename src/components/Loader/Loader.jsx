import { Grid } from 'react-loader-spinner';
import { Overlay } from './loader.styled';

const Loader = () => {
  return (
    <Overlay >
      <Grid
        height="80"
        width="80"
        color="rgb(122, 76, 166)"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        visible={true}
      />{' '}
    </Overlay>
  );
};

export default Loader;
