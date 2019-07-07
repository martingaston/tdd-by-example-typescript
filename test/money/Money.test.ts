import Money from '../../src/money/Money'

describe('The Multiplication class', (): void => {
  test('it can times dollars', (): void => {
    const five = Money.dollar(5)
    expect(five.times(2)).toEqual(Money.dollar(10))
    expect(five.times(3)).toEqual(Money.dollar(15))
  })

  test('it can times francs', (): void => {
    const five = Money.franc(5)
    expect(five.times(2)).toEqual(Money.franc(10))
    expect(five.times(3)).toEqual(Money.franc(15))
  })

  test('it has a currency', (): void => {
    expect(Money.dollar(1).currency).toEqual('USD')
    expect(Money.franc(1).currency).toEqual('CHF')
  })
})
