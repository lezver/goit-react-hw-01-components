import user from './backend/user.json';
import data from './backend/data.json';
import friends from './backend/friends.json';
import transactions from './backend/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <Friends friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};
