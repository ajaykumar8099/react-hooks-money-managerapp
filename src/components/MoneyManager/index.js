import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

const MoneyManager = () => {
  const [totalBalance, setTotalBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [historyList, setHistoryList] = useState([])
  const [incomeType, setIncomeType] = useState(
    transactionTypeOptions[0].optionId,
  )

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeAmount = event => {
    setAmount(event.target.value)
  }

  const onChangeSelect = event => {
    setIncomeType(event.target.value)
  }

  const onSubmitButton = event => {
    event.preventDefault()
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      incomeType,
    }
    setHistoryList(prev => [...prev, newHistory])
    setTitle('')
    setAmount('')
    if (incomeType === 'INCOME') {
      setIncome(income + parseInt(amount))
      setTotalBalance(totalBalance + parseInt(amount))
    } else {
      setExpenses(expenses + parseInt(amount))
      setTotalBalance(totalBalance - parseInt(amount))
    }
  }

  const onDelete = id => {
    const filteredList = historyList.filter(each => each.id !== id)
    setHistoryList(filteredList)
    const deleteHistory = historyList.filter(each => each.id === id)
    const deleteItem = deleteHistory[0]
    console.log(deleteItem.amount)
    const deleteAmount = deleteItem.amount
    const intDeleteAmount = parseInt(deleteAmount)
    console.log(typeof intDeleteAmount)
    if (deleteItem.incomeType === 'INCOME') {
      setIncome(income - intDeleteAmount)
      setTotalBalance(totalBalance - intDeleteAmount)
    } else {
      setExpenses(expenses - intDeleteAmount)
      setTotalBalance(totalBalance + intDeleteAmount)
    }
  }

  return (
    <div className="container">
      <div className="sub-container">
        <div className="banner">
          <h1 className="banner-head">Hi, Richard</h1>
          <p className="banner-para">
            Welcome back to your
            <span className="banner-para-span"> Money Manger</span>
          </p>
        </div>
        <ul className="money-details-un-list">
          <MoneyDetails
            expenses={expenses}
            total={totalBalance}
            income={income}
          />
        </ul>
        <div className="card-container">
          <div className="fom-container">
            <form onSubmit={onSubmitButton}>
              <h1 className="form-head">Add Transactions</h1>
              <div>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <br />
                <input
                  id="title"
                  type="text"
                  placeholder="TITLE"
                  onChange={onChangeTitle}
                  value={title}
                  className="input"
                  required
                />
                <br />
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <br />
                <input
                  id="amount"
                  type="text"
                  placeholder="AMOUNT"
                  onChange={onChangeAmount}
                  value={amount}
                  className="input"
                  required
                />
                <br />
                <label className="label" htmlFor="type">
                  Type
                </label>
                <br />
                <select className="input" id="type" onChange={onChangeSelect}>
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button className="button-add" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-head">History</h1>
            <div className="history-card">
              <div className="history-card-head">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              <ul className="history-card-ul-list">
                {historyList.map(each => (
                  <TransactionItem
                    key={each.id}
                    data={each}
                    onDelete={onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MoneyManager
