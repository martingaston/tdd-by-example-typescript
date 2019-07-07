import Currency from './Currency'

export default class Dollar extends Currency {
  public constructor(amount: number, currency: string) {
    super(amount, currency)
  }

  public times(multiplier: number): Currency {
    return new Currency(multiplier * this.amount, this.currency)
  }
}
