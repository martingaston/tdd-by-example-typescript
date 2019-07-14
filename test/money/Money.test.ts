import Money from '../../src/money/Money'
import Bank from '../../src/money/Bank'
import Sum from '../../src/money/Sum'

describe('The Money class', (): void => {
  test('it can multiply a currency', (): void => {
    const five = Money.dollar(5)
    expect(five.times(2)).toEqual(Money.dollar(10))
    expect(five.times(3)).toEqual(Money.dollar(15))
  })

  test('it has a currency', (): void => {
    expect(Money.dollar(1).currency).toEqual('USD')
    expect(Money.franc(1).currency).toEqual('CHF')
  })

  it("should make sure two currencies aren't equal", (): void => {
    expect(Money.dollar(3)).toEqual(Money.dollar(3))
    expect(Money.dollar(3)).not.toEqual(Money.dollar(4))
    expect(Money.dollar(5)).not.toEqual(Money.franc(5))
  })

  it('can do simple addition', (): void => {
    const five = Money.dollar(5)
    const sum = five.plus(five)
    const bank = new Bank()
    const reduced = bank.reduce(sum, 'USD')
    expect(reduced).toEqual(Money.dollar(10))
  })

  it('will return a sum from an addition', (): void => {
    const five = Money.dollar(5)
    const result = five.plus(five)
    const sum = result as Sum
    expect(sum.augend).toEqual(five)
    expect(sum.addend).toEqual(five)
  })

  it('will reduce a sum', (): void => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4))
    const bank = new Bank()
    const result = bank.reduce(sum, 'USD')
    expect(result).toEqual(Money.dollar(7))
  })

  it('will reduce a money', (): void => {
    const bank = new Bank()
    const result = bank.reduce(Money.dollar(5), 'USD')
    expect(result).toEqual(Money.dollar(5))
  })

  it('will reduce two francs into one dollar', (): void => {
    const bank = new Bank()
    bank.addRate({ from: 'CHF', to: 'USD' }, 2)
    const result = bank.reduce(Money.franc(2), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })
})
