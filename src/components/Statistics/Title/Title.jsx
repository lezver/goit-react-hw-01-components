import { TitleStyle } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ text }) => {
  return <TitleStyle>{text}</TitleStyle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
