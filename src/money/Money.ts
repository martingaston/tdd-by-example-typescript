import Expression from './Expression'
import Sum from './Sum'
import Bank from './Bank'

export default class Money implements Expression {
  public readonly amount: number
  protected _currency: string

  public constructor(amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  public get currency(): string {
    return this._currency
  }

  public times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency)
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend)
  }

  public reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency, to)
    return new Money(this.amount / rate, to)
  }

  public static dollar = (amount: number): Money => new Money(amount, 'USD')
  public static franc = (amount: number): Money => new Money(amount, 'CHF')
}
