import styles from "../styles/SubscriptionsTable.module.css";

function SubscriptionsTable() {
  return (
    <div>
      <p className={styles.subscriptionsInfo}>4 service days per month*</p>
      <div className={styles.horizontalOverflow}>
        <table id="subscriptions-table">
          <thead>
            <tr>
              <th>Square Feet</th>
              <th>1 month</th>
              <th>3 months</th>
              <th>6 months</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1500</td>
              <td>$550.00/mo</td>
              <td>$495.00/mo</td>
              <td>$420.75/mo</td>
            </tr>
            <tr>
              <td>3500</td>
              <td>$787.50/mo</td>
              <td>$708.75/mo</td>
              <td>$602.44/mo</td>
            </tr>
            <tr>
              <td>5500</td>
              <td>$1,300.00/mo</td>
              <td>$1,170.00/mo</td>
              <td>$994.50/mo</td>
            </tr>
            <tr>
              <td>11000</td>
              <td>$1,875.00/mo</td>
              <td>$1,687.50/mo</td>
              <td>$1,434.38/mo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubscriptionsTable;
