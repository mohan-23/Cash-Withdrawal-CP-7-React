import './index.css'

const DenominationItem = props => {
  const {deductionAmount, deductAmount} = props
  const {id, value} = deductionAmount

  const onDeductAmount = () => {
    deductAmount(value)
  }

  return (
    <li className="list-amount">
      <button type="button" className="button" onClick={onDeductAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
