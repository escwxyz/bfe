// https://bigfrontend.dev/problem/semver-compare
export function compare(v1: string, v2: string): 0 | 1 | -1 {
  const a1 = v1.split('.')
  const a2 = v2.split('.')

  for (let i = 0; i < 3; i++) {
    if (Number(a1[i]) > Number(a2[i])) {
      return 1
    } else if (Number(a1[i]) < Number(a2[i])) {
      return -1
    }
  }

  return 0
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(compare('12.1.0', '12.0.9')).toBe(1)
  })

  test('test two', () => {
    expect(compare('12.1.0', '12.1.2')).toBe(-1)
  })

  test('test three', () => {
    expect(compare('12.1.0', '12.1.0')).toBe(0)
  })
}
