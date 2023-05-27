import user from '../user.json';
import data from '../data.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
    </>
  );
};
