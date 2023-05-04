// https://bigfrontend.dev/problem/array-intersect
export function getIntersection(arr1: any[], arr2: any[]): any[] {
  const s = new Set(arr1)
  return Array.from(s).filter((v) => arr2.includes(v))
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(getIntersection([1, 2, 3], [3, 2, 1])).toStrictEqual([1, 2, 3])
  })
  test('test one', () => {
    expect(getIntersection([], [3, 2, 1])).toStrictEqual([])
  })
  test('test one', () => {
    expect(
      getIntersection(
        [1, 100, 200, 8, 8, 8, 3, 6, 100, 10, 10],
        [8, 7, 7, 50, 50, 1, 1, 1, 1, 3, 3]
      )
    ).toStrictEqual([1, 8, 3])
  })
}
