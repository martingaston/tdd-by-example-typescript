import Money from './Money'
import Expression from './Expression'

const currenciesToKey = (currencies: [string, string]): string => {
  return `${currencies[0]}-${currencies[1]}`
}

interface Rates {
  [index: string]: number
}

export default class Bank {
  private rates: Rates = {}

  public reduce = (source: Expression, to: string): Money => {
    return source.reduce(this, to)
  }

  public rate = (from: string, to: string): number => {
    if (from === to) {
      return 1
    }

    if (!this.rates[currenciesToKey([from, to])]) {
      throw new Error('Exchange rate not registered')
    }

    return this.rates[currenciesToKey([from, to])]
  }

  public addRate = (currencies: [string, string], rate: number): void => {
    this.rates[currenciesToKey(currencies)] = rate
  }
}
