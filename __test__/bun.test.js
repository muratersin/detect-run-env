import { describe, expect, it } from 'bun:test'
import {
  IS_BROWSER,
  BROWSER_VERSION,
  BROWSER_NAME,
  IS_BUN,
  BUN_VERSION,
  IS_DENO,
  DENO_VERSION,
  IS_NODE,
  NODE_VERSION
} from '../index.js'

describe('Run env test on bun...', () => {
  it('constants should be expected values', () => {
    expect(IS_BROWSER).toBe(false)
    expect(BROWSER_VERSION).toBe(undefined)
    expect(BROWSER_NAME).toBe(undefined)

    expect(IS_BUN).toBe(true)
    expect(BUN_VERSION === undefined).toBe(false)

    expect(IS_DENO).toBe(false)
    expect(DENO_VERSION).toBe(undefined)

    expect(IS_NODE).toBe(false)
    expect(NODE_VERSION).toBe(undefined)
  })
})
