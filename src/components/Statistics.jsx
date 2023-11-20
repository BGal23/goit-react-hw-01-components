
export const Statistics = ({title, data}) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>
    <ul class="stat-list">
        {data.map(stats => (
      <li class="item">
        <span class="label">{stats.label} </span>
        <span class="percentage">{stats.percentage}%</span>
      </li>
        ))}
    </ul>
  </section>
);
