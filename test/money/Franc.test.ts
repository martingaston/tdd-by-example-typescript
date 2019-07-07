import Franc from '../../src/money/Franc'

describe('The Franc class', (): void => {
  test('it can times itself', (): void => {
    const five = new Franc(5)
    expect(five.times(2)).toEqual(new Franc(10))
    expect(five.times(3)).toEqual(new Franc(15))
  })
})
