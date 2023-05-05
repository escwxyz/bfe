// https://bigfrontend.dev/problem/remove-characters
export function removeChars(input: string): string {
  const s = []
  for (const i of input) {
    if (i == 'c' && s[s.length - 1] == 'a') {
      s.pop()
    } else if (i == 'a' || i == 'c') {
      s.push(i)
    }
  }
  return s.join('')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(removeChars('cabbaabcca')).toStrictEqual('caa')
  })

  test('test two', () => {
    expect(removeChars('abc')).toStrictEqual('')
  })
}
