import { List, Item, Label, Percentage } from './Stats.styled';
import PropTypes from 'prop-types';

export const Stats = ({ data }) => {
  return (
    <List>
      {data.map(({ id, label, percentage }) => {
        return (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage dataLabel={label}>{percentage}%</Percentage>
          </Item>
        );
      })}
    </List>
  );
};

Stats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
