import Money from './Money'
export default class Franc extends Money {
  public constructor(amount: number) {
    super(amount, 'CHF')
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }
}
