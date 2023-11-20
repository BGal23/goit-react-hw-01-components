import statistics from '../css/statistics.module.css'

export const Statistics = ({title, data}) => (
  <section class={statistics.statistics}>
    <h2 class={statistics.title}>{title}</h2>
    <ul class={statistics.statList}>
        {data.map(stats => (
      <li class={statistics.item}>
        <span class={statistics.label}>{stats.label} </span>
        <span class={statistics.percentage}>{stats.percentage}%</span>
      </li>
        ))}
    </ul>
  </section>
);
