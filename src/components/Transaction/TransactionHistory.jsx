import PropTypes from 'prop-types';
import transaction from './transaction.module.css';

export const TransactionHistory = ({ transactions }) => (
  <table className={transaction.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(data => (
        <tr key={data.id}>
          <td>{data.type}</td>
          <td>{data.amount}</td>
          <td>{data.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
