// https://bigfrontend.dev/problem/create-a-counter-object
export function createCounter() {
  let count = 0
  return {
    get count() {
      return count++
    },
    set count(_value) {
      console.error('Cannot assign a new value to count.')
    },
  }
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  const counter = createCounter()

  test('test zero', () => {
    expect(counter.count).toBe(0)
  })
  test('test one', () => {
    expect(counter.count).toBe(1)
  })
  test('test two', () => {
    expect(counter.count).toBe(2)
  })
}
