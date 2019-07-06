# Money

## The Brief, In Brief

- We need to be able to add amounts in two different currencies and convert the result given a set exchange rate
- We need to be able to multiply an amount (price per share) by a number (number of shares) and receieve an amount

We make a todo to keep us focused, to track our progress and to let us know when we are finished. When we start on an item, **we'll make it bold**. When we finish an item, ~~we'll cross it off~~. When we think of a new test, we add it to the list.

What's the easiest starting point? Currency conversion, exchange rates - or multiplication? So let's start with the latter.

## Todo

- $5 + 10 CHF = $10 if rate is 2:1
- ~~$5 * 2 = $10~~
- Make amount private
- ~~Dollar side-effects~~
- Money rounding?

How can we quickly get to green?

1. Fake it - Return a constant and gradually replace constants with variables until you have the real code
2. Use Obvious Implementation - Type in the real implementation
3. Triangulation - The most conservative strategy, where we only start to generalise our code when there are two examples of more. Helps to eke towards the right path if you're getting lost on your design.

Chapter 3 - our Dollar object is conforming to the Value Object pattern. We'd need to test for `equals()` in Java, but we've already got `==` and `===` in TypeScript (as well as `toBe` to `toEqual` in Jest)
