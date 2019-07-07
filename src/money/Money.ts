import Franc from '../../src/money/Franc'
import Dollar from '../../src/money/Dollar'
import Currency from '../../src/money/Currency'

export default class Money {
  public static dollar = (amount: number): Currency => new Dollar(amount, 'USD')
  public static franc = (amount: number): Currency => new Franc(amount, 'CHF')
}
