import Currency from './Currency'
import Money from './Money'

export default class Dollar extends Currency {
  public constructor(amount: number, currency: string) {
    super(amount, currency)
  }

  public times(multiplier: number): Currency {
    return Money.dollar(multiplier * this.amount)
  }
}
