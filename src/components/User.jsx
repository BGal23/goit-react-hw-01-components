import user from '../css/user.module.css'

export const Profile = ({
  avatar,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div class={user.profile}>
    <div class={user.description}>
      <img src={avatar} alt="User avatar" class={user.avatar} />
      <p class={user.name}>{name}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class={user.stats}>
      <li>
        <span class={user.label}>Followers</span>
        <span class={user.quantity}>{followers}</span>
      </li>
      <li>
        <span class={user.label}>Views</span>
        <span class={user.quantity}>{views}</span>
      </li>
      <li>
        <span class={user.label}>Likes</span>
        <span class={user.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);
