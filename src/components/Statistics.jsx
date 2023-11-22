import statistics from '../css/statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, data }) => (
  <section className={statistics.statistics}>
    <h2 className={statistics.title}>{title}</h2>
    <ul className={statistics.statList}>
      {data.map(stats => (
        <li
          key={stats.id}
          className={[statistics.item]}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={statistics.label}>{stats.label}</span>
          <span className={statistics.percentage}>{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export const getNewData = data => {
  let sameData = [];
  data.forEach((element, index) => {
    let array = data.filter(value => value.label === element.label);
    if (array.length > 1) {
      sameData.push(index);
    }
  });

  data[sameData[0]].percentage += data[sameData[1]].percentage;
  data.splice([sameData[1]], 1);
  return data;
};
