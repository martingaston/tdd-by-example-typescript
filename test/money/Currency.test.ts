import Money from '../../src/money/Money'

describe('The Currency superclass', (): void => {
  it("should make sure subclasses aren't equal", (): void => {
    expect(Money.dollar(5)).not.toEqual(Money.franc(5))
  })
})
