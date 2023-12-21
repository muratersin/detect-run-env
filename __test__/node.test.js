import test from 'node:test'
import assert from 'node:assert'

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

test('run-env test on nodejs...', () => {
  assert.strictEqual(IS_BROWSER, false)
  assert.strictEqual(BROWSER_VERSION, undefined)
  assert.strictEqual(BROWSER_NAME, undefined)

  assert.strictEqual(IS_BUN, false)
  assert.strictEqual(BUN_VERSION, undefined)

  assert.strictEqual(IS_DENO, false)
  assert.strictEqual(DENO_VERSION, undefined)

  assert.strictEqual(IS_NODE, true)
  assert.strictEqual(NODE_VERSION, process?.versions?.node)
})
