import PropTypes from 'prop-types';
import user from '../files/user.json';
import data from '../files/data.json';
import { getNewData } from './Statistics';
import friends from '../files/friends.json';
import transactions from '../files/transactions.json';
import { Profile } from './User';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

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
