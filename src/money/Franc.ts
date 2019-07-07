import Currency from './Currency'
export default class Franc extends Currency {
  public constructor(amount: number) {
    super(amount, 'CHF')
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }
}
