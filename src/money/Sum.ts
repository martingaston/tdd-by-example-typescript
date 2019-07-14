import Money from './Money'
import Expression from './Expression'
import Bank from './Bank'

export default class Sum implements Expression {
  public augend: Money
  public addend: Money

  public constructor(augend: Money, addend: Money) {
    this.augend = augend
    this.addend = addend
  }

  public reduce(bank: Bank, to: string): Money {
    return new Money(this.augend.amount + this.addend.amount, to)
  }
}
