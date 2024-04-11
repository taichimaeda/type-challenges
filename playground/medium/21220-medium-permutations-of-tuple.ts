/*
  21220 - Permutations of Tuple
  -------
  by null (@gaac510) #medium #union #tuple #conditional type #recursion

  ### Question

  Given a generic tuple type `T extends unknown[]`, write a type which produces all permutations of `T` as a union.

  For example:

  ```ts
  PermutationsOfTuple<[1, number, unknown]>
  ```

  > View on GitHub: https://tsch.js.org/21220
*/

/* _____________ Your Code Here _____________ */

// NOTE:
// For some reason this solution has Datalog vibes...
type Insert<Arr extends unknown[], El> =
  Arr extends [infer Head, ...infer Tail]
    ? [El, Head, ...Tail] | [Head, ...Insert<Tail, El>]
    : [El]
type PermutationsOfTuple<T extends unknown[]> =
  T extends [infer Head, ...infer Tail]
    ? Insert<PermutationsOfTuple<Tail>, Head>
    : []

// NOTE:
// This solution only works for literal types:
// type ArrayToUnion<T extends any[]> =
//   T extends [infer Head, ...infer Tail] ? Head | ArrayToUnion<Tail> : never
// type PermutationsOfTupleSub<Union, Item = Union> =
//   [Union] extends [never] ? [] :
//     Item extends unknown ? [Item, ...PermutationsOfTupleSub<Exclude<Union, Item>>] : never
// type PermutationsOfTuple<T extends unknown[]> =
//   PermutationsOfTupleSub<ArrayToUnion<T>>

type t = PermutationsOfTuple<[1, 2, 3]>
/* _____________ Test Cases _____________ */
import type { Equal, Expect, ExpectFalse } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
  Expect<Equal<
    PermutationsOfTuple<[any, unknown, never]>,
    | [any, unknown, never]
    | [unknown, any, never]
    | [unknown, never, any]
    | [any, never, unknown]
    | [never, any, unknown]
    | [never, unknown, any]
  >>,
  Expect<Equal<
    PermutationsOfTuple<[1, number, unknown]>,
    | [1, number, unknown]
    | [1, unknown, number]
    | [number, 1, unknown]
    | [unknown, 1, number]
    | [number, unknown, 1]
    | [unknown, number, 1]
  >>,
  ExpectFalse<Equal<PermutationsOfTuple<[ 1, number, unknown ]>, [unknown]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/21220/answer
  > View solutions: https://tsch.js.org/21220/solutions
  > More Challenges: https://tsch.js.org
*/
