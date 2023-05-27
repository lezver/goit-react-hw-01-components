import { StatisticsStyle } from './Statistics.styled';
import { Title } from './Title/Title';
import { Stats } from './Stats/Stats';

export const Statistics = ({ data }) => {
  return (
    <StatisticsStyle>
      <Title />

      <Stats data={data} />
    </StatisticsStyle>
  );
};
