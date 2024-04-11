/*
  30301 - IsOdd
  -------
  by jiangshan (@jiangshanmeta) #medium #string

  ### Question

  return true is a number is odd

  > View on GitHub: https://tsch.js.org/30301
*/

/* _____________ Your Code Here _____________ */

type IsOdd<T extends number> =
  `${T}` extends `${string}${'.' | 'e'}${string}` ? false :
  `${T}` extends `${string}${1 | 3 | 5 | 7 | 9}` ? true : false

// NOTE:
// This solution takes too may recursions.
// type IsOdd<T extends number> = IsOddSub<ArrayOfLength<T>>
// type IsOddSub<T extends any[]> =
//   T extends [] ? false :
//     T extends [unknown] ? true :
//       T extends [unknown, ...infer Middle, unknown] ? IsOddSub<Middle> : never
// type ArrayOfLength<T extends number, Acc extends any[] = []> =
//   Acc['length'] extends T ? Acc : ArrayOfLength<T, [0, ...Acc]>

// NOTE:
// The pattern matching in this solution does not work.
// type IsOdd<T extends number> = IsOddSub<ArrayOfLength<T>>
// type IsOddSub<T extends number[]> =
//   T extends [...infer Half, ...infer Half] ? false : true
// type ArrayOfLength<T extends number, Acc extends any[] = []> =
//   Acc['length'] extends T ? Acc : ArrayOfLength<T, [0, ...Acc]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsOdd<5>, true>>,
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<2.3>, false>>,
  Expect<Equal<IsOdd<3e23>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/30301/answer
  > View solutions: https://tsch.js.org/30301/solutions
  > More Challenges: https://tsch.js.org
*/
