import user from './User/username.json';
import data from './Statistics/data.json';
import { getNewData } from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import transactions from './Transaction/transactions.json';
import { Profile } from './User/User';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';

getNewData(data);

export const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
