// https://bigfrontend.dev/problem/move-zeros
export function moveZeros(list: Array<number>): Array<number> {
  let fast = 0
  let slow = 0

  while (fast < list.length) {
    if (list[fast] !== 0) {
      list[slow++] = list[fast]
    }
    fast++
  }
  for (let index = slow; index < list.length; index++) {
    list[index] = 0
  }

  return list
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(moveZeros([1, 0, 0, 2, 3])).toStrictEqual([1, 2, 3, 0, 0])
  })

  test('test two', () => {
    expect(moveZeros([0, 0, 0, 1, 3, 2, 6])).toStrictEqual([
      1, 3, 2, 6, 0, 0, 0,
    ])
  })
}
