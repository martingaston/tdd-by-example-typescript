import Money from '../../src/money/Money'

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
})
