import Money from './Money'
import Expression from './Expression'

export default class Sum implements Expression {
  public augend: Money
  public addend: Money

  public constructor(augend: Money, addend: Money) {
    this.augend = augend
    this.addend = addend
  }

  public reduce(to: string): Money {
    return new Money(this.augend.amount + this.addend.amount, to)
  }
}
