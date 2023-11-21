import friendsList from '../css/friends.module.css'

export const FriendList = ({ friends }) => (
  <ul class={friendsList.friendList}>
    {friends.map(friend => (
      <li class={friendsList.item}>
        <span class={friendsList.status}>{friend.isOnline}</span>
        <img class={friendsList.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p class={friendsList.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);
