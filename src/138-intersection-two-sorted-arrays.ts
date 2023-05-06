export function intersect(arr1: number[], arr2: number[]): number[] {
  if (!arr1 || !arr2) return []

  let p: number = 0
  let q: number = 0
  const result: number[] = []

  while (p < arr1.length && q < arr2.length) {
    if (arr1[p] < arr2[q]) {
      p++
    } else if (arr1[p] > arr2[q]) {
      q++
    } else {
      result.push(arr1[p])
      p++
      q++
    }
  }

  return result
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(
      intersect([1, 2, 2, 3, 4, 4], [2, 2, 4, 5, 5, 6, 2000])
    ).toStrictEqual([2, 2, 4])
  })
  test('test two', () => {
    expect(intersect([], [1, 2])).toStrictEqual([])
  })
}
