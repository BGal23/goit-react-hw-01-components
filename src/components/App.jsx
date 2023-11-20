import PropTypes from 'prop-types';
import user from '../files/user.json';
import data from '../files/data.json';
import friends from '../files/friends.json'
import { Profile } from './User';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';

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
    </>
  );
};

PropTypes.propTypes = {
  name: PropTypes.string,
};
