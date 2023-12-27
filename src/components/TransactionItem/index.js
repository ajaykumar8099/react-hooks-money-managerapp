// Write your code here

import './index.css'

const TransactionItem = props => {
  const {data, onDelete} = props
  const {id, incomeType, amount, title} = data

  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="transaction-item-list">
      <div className="history-details">
        <p className="title">{title}</p>
        <p className="final-amount">Rs {amount}</p>
        <p className="income-type">{incomeType}</p>
        <button type="button" data-testid="delete" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
