export default class Money {
  protected amount: number
  protected _currency: string

  public constructor(amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  public get currency(): string {
    return this._currency
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency)
  }

  public static dollar = (amount: number): Money => new Money(amount, 'USD')
  public static franc = (amount: number): Money => new Money(amount, 'CHF')
}
