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
  <div className={user.profile}>
    <div className={user.description}>
      <img src={avatar} alt="User avatar" className={user.avatar} />
      <p className={user.name}>{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={user.stats}>
      <li>
        <span className={user.label}>Followers</span>
        <span className={user.quantity}>{followers}</span>
      </li>
      <li>
        <span className={user.label}>Views</span>
        <span className={user.quantity}>{views}</span>
      </li>
      <li>
        <span className={user.label}>Likes</span>
        <span className={user.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);
