/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

// NOTE:
// This is definitely not medium.
// Inspired by the following solution:
// https://github.com/type-challenges/type-challenges/issues/13507
type ParseInt<T extends string> = T extends `${infer N extends number}` ? N : never
type ReverseString<S extends string> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : ''
type RemoveLeadingZeros<S extends string> = S extends `${'0'}${infer R}` ? RemoveLeadingZeros<R> : S
type MinusOneSub<
  S extends string
> = S extends `${infer D extends number}${infer Rest}` ?
    D extends 0 
      ? `9${MinusOneSub<Rest>}`
      : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][D]}${Rest}`
    : never
type MinusOne<T extends number> = 
  T extends 0 ? -1 :
  T extends 1 ? 0 :
  // Need to reverse string because we cannot extract the last char of a string.
  ParseInt<RemoveLeadingZeros<ReverseString<MinusOneSub<ReverseString<`${T}`>>>>>

// type PopElement<T extends any[]> = 
//   T extends [unknown, ...infer Tail] ? Tail : []
// type ArrayOfSmallLength<T extends string, Acc extends any[] = []> = 
//   `${Acc['length']}` extends T ? Acc : ArrayOfSmallLength<T, [0, ...Acc]>
// type ArrayOfLargeLength<T extends number> = ArrayOfLargeLengthSub<`${T}`>
// type ArrayOfLargeLengthSub<T extends string, Acc extends any[] = []> = 
//   T extends `${infer Head}${infer Tail}`
//     ? ArrayOfLargeLengthSub<Tail, [...Acc, ...Acc, ...Acc, ...Acc, ...Acc, ...Acc, ...Acc, ...Acc, ...Acc, ...Acc, ...ArrayOfSmallLength<Head>]>
//     : PopElement<Acc>['length']

// type ArrayOfLength<T extends number, Acc extends any[] = []> = 
//   Acc['length'] extends T ? Acc : ArrayOfLength<T, [0, ...Acc]>
// type PopElement<T extends any[]> = 
//   T extends [unknown, ...infer Tail] ? Tail : []
// type MinusOne<T extends number, Arr = ArrayOfLength<T>> =
//   Arr extends any[] ? PopElement<Arr>['length'] : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
