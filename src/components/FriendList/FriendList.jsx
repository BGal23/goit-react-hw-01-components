import PropTypes from 'prop-types';
import friendsList from './friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={friendsList.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={friendsList.item}>
          {friend.isOnline
            ? <span className={friendsList.isOnline}></span>
            : <span className={friendsList.status}></span>}
          <img
            className={friendsList.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={friendsList.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
		isOnline: PropTypes.bool,
		id: PropTypes.number,
	})),
};