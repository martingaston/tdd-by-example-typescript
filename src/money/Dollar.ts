import Money from './Money'
export default class Dollar extends Money {
  public constructor(amount: number) {
    super(amount, 'USD')
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}
