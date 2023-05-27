import {
  DescriptionStyle,
  Image,
  Name,
  Tag,
  Location,
} from './Description.styled';
import PropTypes from 'prop-types';

export const Description = ({ user: { avatar, location, tag, username } }) => {
  return (
    <DescriptionStyle>
      <Image src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionStyle>
  );
};

Description.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};
