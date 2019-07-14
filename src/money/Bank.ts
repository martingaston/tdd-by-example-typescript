import Money from './Money'
import Expression from './Expression'

const currenciesToKey = (currencies: CurrencyPair): string => {
  return `${currencies.from}-${currencies.to}`
}

interface Rates {
  [index: string]: number
}

interface CurrencyPair {
  from: string
  to: string
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

    if (!this.rates[currenciesToKey({ from, to })]) {
      throw new Error('Exchange rate not registered')
    }

    return this.rates[currenciesToKey({ from, to })]
  }

  public addRate = (currencies: CurrencyPair, rate: number): void => {
    this.rates[currenciesToKey(currencies)] = rate
  }
}
