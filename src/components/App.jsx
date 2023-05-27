import user from './backend/user.json';
import data from './backend/data.json';

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
