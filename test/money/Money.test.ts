import Dollar from '../../src/money/Dollar'
import Franc from '../../src/money/Franc'

describe('The Money superclass', (): void => {
  it("should make sure subclasses aren't equal", (): void => {
    expect(new Dollar(10)).not.toEqual(new Franc(10))
  })
})
