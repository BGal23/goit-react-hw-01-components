import PropTypes from 'prop-types';
import user from '../files/user.json';
import data from '../files/data.json';
import friends from '../files/friends.json'
import transactions from '../files/transactions.json'
import { Profile } from './User';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory'

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
      <Statistics
        title="Upload stats"
        data={data} 
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory 
        transactions={transactions}
      />
    </>
  );
};

PropTypes.propTypes = {
  name: PropTypes.string,
};
