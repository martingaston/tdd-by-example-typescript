export default class Money {
  protected amount: number
  protected currency: string

  public constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }
}
