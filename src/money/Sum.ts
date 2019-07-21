import Money from './Money'
import Expression from './Expression'
import Bank from './Bank'

export default class Sum implements Expression {
  public augend: Expression
  public addend: Expression

  public constructor(augend: Expression, addend: Expression) {
    this.augend = augend
    this.addend = addend
  }

  public reduce(bank: Bank, to: string): Money {
    return new Money(
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount,
      to
    )
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend)
  }

  public times(multiplier: number): Expression {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
  }
}
