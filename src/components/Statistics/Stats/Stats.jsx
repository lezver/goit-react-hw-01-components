import { List, Item, Label, Percentage } from './Stats.styled';

export const Stats = ({ data }) => {
  return (
    <List>
      {data.map(({ id }) => {
        <Item>{id}</Item>;
      })}
    </List>
  );
};
