export default class Dollar {
  private amount: number

  public constructor(amount: number) {
    this.amount = amount
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}
