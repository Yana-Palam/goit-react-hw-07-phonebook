import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrp } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrp>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="84"
        visible={true}
      />
    </LoaderWrp>
  );
};

export default Loader;
