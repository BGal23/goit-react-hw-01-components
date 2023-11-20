export const TransactionHistory = ({transactions}) => (
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
        {transactions.map(data => (
      <tr>
        <td>{data.type}</td>
        <td>{data.amount}</td>
        <td>{data.currency}</td>
      </tr>
      ))}
    </tbody>
  </table>
);
