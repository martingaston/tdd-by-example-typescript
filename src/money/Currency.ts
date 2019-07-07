export default abstract class Currency {
  protected amount: number
  protected _currency: string

  public constructor(amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  public get currency(): string {
    return this._currency
  }

  abstract times(multiplier: number): Currency
}
