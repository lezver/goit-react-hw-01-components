import { StatsStyle, Label, Quantity } from './Stats.styled';
import PropTypes from 'prop-types';

export const Stats = ({
  user: {
    stats: { followers, likes, views },
  },
}) => {
  return (
    <StatsStyle>
      <li>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </li>
    </StatsStyle>
  );
};

Stats.propTypes = {
  user: PropTypes.object.isRequired,
};
