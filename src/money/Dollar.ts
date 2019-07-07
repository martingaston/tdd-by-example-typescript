import Currency from './Currency'
export default class Dollar extends Currency {
  public constructor(amount: number) {
    super(amount, 'USD')
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}
