export default abstract class Currency {
  protected amount: number
  protected currency: string

  public constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  abstract times(multiplier: number): Currency
}
