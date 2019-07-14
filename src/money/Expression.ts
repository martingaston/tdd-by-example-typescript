import Money from './Money'
import Bank from './Bank'

export default interface Expression {
  reduce(bank: Bank, to: string): Money
}
