import PropTypes from 'prop-types';
import user from './user.module.css';

export const Profile = ({ avatar, name, tag, location, stats }) => (
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
        <span className={user.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={user.label}>Views</span>
        <span className={user.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={user.label}>Likes</span>
        <span className={user.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.symbol,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
