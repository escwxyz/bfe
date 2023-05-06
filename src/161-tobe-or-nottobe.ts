interface Matcher {
  toBe(data: any): void
}

// https://bigfrontend.dev/problem/jest-assertion
export function myExpect(input: any): Matcher & { not: Matcher } {
  return {
    toBe: (data: any) => {
      if (!Object.is(input, data)) {
        throw new Error('Error')
      }
    },
    not: {
      toBe: (data: any) => {
        if (Object.is(input, data)) {
          throw new Error('Error')
        }
      },
    },
  }
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(() => myExpect(4).toBe(3)).toThrow()
  })

  test('test two', () => {
    expect(() => myExpect(4).not.toBe(4)).toThrow()
  })
}
