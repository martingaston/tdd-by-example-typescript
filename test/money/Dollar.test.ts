import Dollar from '../../src/money/Dollar'

describe('The Multiplication class', (): void => {
  test('it can times itself', (): void => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toEqual(10)
  })
})
