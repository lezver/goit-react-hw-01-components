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
  user: PropTypes.object.isRequired,
};
