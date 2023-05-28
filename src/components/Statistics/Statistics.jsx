import { StatisticsStyle } from './Statistics.styled';
import { Title } from './Title/Title';
import { Stats } from './Stats/Stats';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsStyle>
      {title && <Title text={title} />}

      <Stats data={data} />
    </StatisticsStyle>
  );
};
