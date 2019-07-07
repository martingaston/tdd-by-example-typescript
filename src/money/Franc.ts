export default class Franc {
  private amount: number

  public constructor(amount: number) {
    this.amount = amount
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }
}
