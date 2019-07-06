import Dollar from '../../src/money/Dollar'

describe('The Multiplication class', (): void => {
  test('it can times itself', (): void => {
    const five = new Dollar(5)
    expect(five.times(2)).toEqual(new Dollar(10))
    expect(five.times(3)).toEqual(new Dollar(15))
  })
})
