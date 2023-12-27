// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {income, total, expenses} = props

  return (
    <li className="money-det-li-container">
      <div className="total-container blnc-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img-blc"
        />
        <div className="total-sub-cont">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {total}</p>
        </div>
      </div>
      <div className="total-container income-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img-blc"
        />
        <div className="total-sub-cont">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="total-container expense-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img-blc"
        />
        <div className="total-sub-cont">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </li>
  )
}
export default MoneyDetails
