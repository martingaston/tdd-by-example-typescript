# Money

## The TDD Cycle

1. Write a test
2. Make it compile
3. Run it to see that it fails
4. Do the barest minimum you can to make it run
5. Remove duplication

## The Brief, In Brief

- We need to be able to add amounts in two different currencies and convert the result given a set exchange rate
- We need to be able to multiply an amount (price per share) by a number (number of shares) and receieve an amount

We make a todo to keep us focused, to track our progress and to let us know when we are finished. When we start on an item, **we'll make it bold**. When we finish an item, ~~we'll cross it off~~. When we think of a new test, we add it to the list.

What's the easiest starting point? Currency conversion, exchange rates - or multiplication? So let's start with the latter.

## Todo

- $5 + 10 CHF = $10 if rate is 2:1
- ~~$5 * 2 = $10~~
- ~~Make amount private~~
- ~~Dollar side-effects~~
- Money rounding?
- ~~5 CHF * 2 = 10CHF~~
- Dollar/Franc duplication
- ~~Common equals~~
- Common times
- ~~Compare Francs with Dollars~~
- Currency implementation?

How can we quickly get to green?

1. Fake it - Return a constant and gradually replace constants with variables until you have the real code
2. Use Obvious Implementation - Type in the real implementation
3. Triangulation - The most conservative strategy, where we only start to generalise our code when there are two examples of more. Helps to eke towards the right path if you're getting lost on your design.

Chapter 3 - our Dollar object is conforming to the Value Object pattern. We'd need to test for `equals()` in Java, but we've already got `==` and `===` in TypeScript (as well as `toBe` to `toEqual` in Jest)

Chapter 4 - Conceptually, our `Dollar.times()` should return a `Dollar` with a value of the original object times the multiplier. But our tests aren't really looking for that - they're testing a class property against a number. Our tests are coupled to our `Dollar` code - by testing against objects we decouple our tests.

But what is equality is not working? In the TypeScript realm, we're relying on Jest. If we get our equality wrong, our multiplication tests would now fail. But this is a risk we manage.

Chapter 6/7 - The equality code is comparing the contents of a Dollar and a Franc and, as there's only one field, concluding that Dollar(10) is the same as Franc(10). What's the quickest way we can get this to pass in TypeScript? Adding a currency property to the class seems like it to me. We can then remove the duplication by setting it as a property in Money and calling it via the constructor.

Don't add additional design until you have a proper motivation
