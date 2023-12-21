import { assertEquals } from 'https://deno.land/std@0.209.0/assert/mod.ts'
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
} from 'run-env/index.js'

// eslint-disable-next-line no-undef
Deno.test('Run env test on deno...', () => {
  assertEquals(IS_BROWSER, false)
  assertEquals(BROWSER_VERSION, undefined)
  assertEquals(BROWSER_NAME, undefined)

  assertEquals(IS_BUN, false)
  assertEquals(BUN_VERSION, undefined)

  assertEquals(IS_DENO, true)
  assertEquals(DENO_VERSION !== undefined, true)

  assertEquals(IS_NODE, false)
  assertEquals(NODE_VERSION, undefined)
})
