import Money from './Money'

export default interface Expression {
  reduce(to: string): Money
}
