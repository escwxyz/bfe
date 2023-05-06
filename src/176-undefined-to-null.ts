// https://bigfrontend.dev/problem/undefined-to-null

export const undefinedToNull = (arg: unknown) =>
  JSON.parse(
    JSON.stringify(arg, (_key: string, val: unknown) =>
      val === undefined ? null : val
    )
  )

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('test one', () => {
    expect(undefinedToNull({ a: undefined, b: 'BFE.dev' })).toStrictEqual({
      a: null,
      b: 'BFE.dev',
    })
  })

  test('test two', () => {
    expect(
      undefinedToNull({ a: ['BFE.dev', undefined, 'bigfrontend.dev'] })
    ).toStrictEqual({ a: ['BFE.dev', null, 'bigfrontend.dev'] })
  })
}
