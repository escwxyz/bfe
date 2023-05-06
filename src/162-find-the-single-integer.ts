// https://bigfrontend.dev/problem/find-the-single-integer
export function findSingle(arr: number[]): number {
  const set: Set<number> = new Set()

  for (const a of arr) {
    if (set.has(a)) {
      set.delete(a)
    } else {
      set.add(a)
    }
  }

  return [...set][0]
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(findSingle([10, 2, 2, 1, 0, 0, 10])).toBe(1)
  })

  test('test two', () => {
    expect(findSingle([1, 1, 2])).toBe(2)
  })
}
