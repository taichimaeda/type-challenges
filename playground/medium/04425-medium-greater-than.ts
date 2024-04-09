/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

// NOTE:
// This is definitely not medium. Absolutely not.
type LengthOf<S extends string, Acc extends any[] = []> =
  S extends `${string}${infer Tail}` ? LengthOf<Tail, [0, ...Acc]> : Acc['length']
type PadLeft<S extends string, Len extends number> =
  LengthOf<S> extends Len ? S : PadLeft<`-${S}`, Len>
type MaxLength<S1 extends string, S2 extends string> =
  CompareInt<`${LengthOf<S1>}`, `${LengthOf<S2>}`> extends 1 ? LengthOf<S1> :
    CompareInt<`${LengthOf<S1>}`, `${LengthOf<S2>}`> extends 0 | -1 ? LengthOf<S2> : never
type ArrayOfLength<T extends number, Acc extends any[] = []> =
  Acc['length'] extends T ? Acc : ArrayOfLength<T, [0, ...Acc]>
type ParseInt<T extends string> =
  T extends `${infer Num extends number}` ? Num : never
type CompareIntSub<T extends string, U extends string> =
  T extends U ? 0 :
    ArrayOfLength<ParseInt<U>> extends [...unknown[], ...ArrayOfLength<ParseInt<T>>] ? -1 : 1
type CompareInt<T extends string, U extends string> =
  T extends '-'
    ? U extends '-' ? 0 : -1
    : U extends '-' ? 1 : CompareIntSub<T, U>
type GreaterThanSub<T extends string, U extends string> =
  T extends `${infer TDigit}${infer TRest}` ?
    U extends `${infer UDigit}${infer URest}` ?
      CompareInt<TDigit, UDigit> extends 1 ? true :
        CompareInt<TDigit, UDigit> extends -1 ? false :
          CompareInt<TDigit, UDigit> extends 0 ? GreaterThanSub<TRest, URest> : never
      : false
    : false
type GreaterThan<T extends number, U extends number, MaxLen extends number = MaxLength<`${T}`, `${U}`>> =
  GreaterThanSub<PadLeft<`${T}`, MaxLen>, PadLeft<`${U}`, MaxLen>>

// type ArrayOfLength<T extends number, Acc extends any[] = []> =
//   Acc['length'] extends T ? Acc : ArrayOfLength<T, [0, ...Acc]>
// type GreaterThan<T extends number, U extends number> =
//   ArrayOfLength<U> extends [...unknown[], ...ArrayOfLength<T>] ? false : true

// type ArrayOfLength<T extends number, Acc extends any[] = []> =
//   Acc['length'] extends T ? Acc : ArrayOfLength<T, [...Acc, Acc['length']]>
// type UnionOf<T extends any[]> =
//   T extends [infer Head, ...infer Tail] ? Head | UnionOf<Tail> : never
// type GreaterThan<T extends number, U extends number> =
//   UnionOf<ArrayOfLength<T>> extends UnionOf<ArrayOfLength<U>> ? false : true

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
