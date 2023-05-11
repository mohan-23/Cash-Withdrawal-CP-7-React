import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  deductAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    console.log(denominationsList)

    return (
      <div className="body-container">
        <div className="card-container">
          <div className="name-container">
            <p className="logo">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance-cart">
              <p className="amount">{balance}</p>
              <p className="amount-type">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-amount-container">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                deductionAmount={eachAmount}
                key={eachAmount.id}
                deductAmount={this.deductAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
