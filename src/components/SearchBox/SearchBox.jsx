import { Wrapper, Icon, Input } from "./SearchBox.styled";
import PropTypes from 'prop-types';

export const SearchBox = ({ value, onChange }) => {

  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired
};