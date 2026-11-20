import { getContent } from './index'

const shape = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.length ? [shape(value[0])] : []
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, shape(v)]),
    )
  }
  return typeof value
}

describe('content data', () => {
  it('es and en share the same shape', () => {
    expect(shape(getContent('en'))).toEqual(shape(getContent('es')))
  })

  it('has at least one hero role in both languages', () => {
    expect(getContent('es').hero.roles.length).toBeGreaterThan(0)
    expect(getContent('en').hero.roles.length).toBeGreaterThan(0)
  })
})
