/*
  9286 - FirstUniqueCharIndex
  -------
  by jiangshan (@jiangshanmeta) #medium #string

  ### Question

  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))

  > View on GitHub: https://tsch.js.org/9286
*/

/* _____________ Your Code Here _____________ */

type FindRepeated<T extends string, Seen extends string = never> =
  T extends `${infer Head}${infer Tail}`
    ? Head extends Seen
      ? FindRepeated<Tail, Seen> | Head
      : FindRepeated<Tail, Seen | Head>
    : never
type FirstUniqueCharIndexSub<T extends string, Repeated extends string, Count extends any[] = []> =
  T extends `${infer Head}${infer Tail}`
    ? Head extends Repeated
      ? FirstUniqueCharIndexSub<Tail, Repeated, [0, ...Count]>
      : Count['length']
    : -1
type FirstUniqueCharIndex<T extends string> =
  FirstUniqueCharIndexSub<T, FindRepeated<T>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9286/answer
  > View solutions: https://tsch.js.org/9286/solutions
  > More Challenges: https://tsch.js.org
*/
