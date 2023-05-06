// https://bigfrontend.dev/problem/Find-the-largest-difference
export function largestDiff(arr: number[]): number {
  if (arr.length < 2) return 0
  return Math.max.apply(null, arr) - Math.min.apply(null, arr)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(largestDiff([])).toBe(0)
  })

  test('test two', () => {
    expect(largestDiff([-1, 2, 3, 10, 9])).toBe(11)
  })
}
