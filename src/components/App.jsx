import PropTypes from 'prop-types';
import user from './User/username.json'
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
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

PropTypes.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.symbol,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,

  title: PropTypes.string,
  data: PropTypes.array,

  friends: PropTypes.array,

  transactions: PropTypes.array,
};
