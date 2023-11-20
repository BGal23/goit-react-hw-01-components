export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <li class="item">
        <span class="status">{friend.isOnline}</span>
        <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p class="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);
