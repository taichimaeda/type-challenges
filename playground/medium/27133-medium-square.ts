/*
  27133 - Square
  -------
  by null (@aswinsvijay) #medium #tuple #array #math

  ### Question

  Given a number, your type should return its square.

  > View on GitHub: https://tsch.js.org/27133
*/

/* _____________ Your Code Here _____________ */

// TODO:
// Implement a version that can work with numbers greater than 100
// by recursively splitting the digits.
// NOTE:
// `SquareSub` makes use of the formula N^2 = 1 + 3 + 5 + ...
type SquareSub<N extends number, Count extends any[] = [], Acc extends any[] = [0], Sum extends any[] = []> =
  Count['length'] extends N ? Sum['length'] : SquareSub<N, [0, ...Count], [...Acc, 0, 0], [...Sum, ...Acc]>
type Square<N extends number> =
  N extends 100 ? 10000 :
    `${N}` extends `-${infer M extends number}` ? SquareSub<M> : SquareSub<N>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/27133/answer
  > View solutions: https://tsch.js.org/27133/solutions
  > More Challenges: https://tsch.js.org
*/
