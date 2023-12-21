// import puppeteer from 'puppeteer'
// import path from 'node:path'
// import test from 'node:test'
// import assert from 'node:assert'
// ;(async () => {
//   const browser = await puppeteer.launch({
//     headless: 'new'
//   })
//   const page = await browser.newPage()

//   await page.goto('http://localhost:1234')

//   let value = await page.evaluate(
//     (el) => el.textContent,
//     await page.$('#is-browser')
//   )
//   console.log('------------', value)

//   // const IS_BROWSER = await page.evaluate(
//   //   () => document.getElementById('is-browser').innerText
//   // )
//   // const BROWSER_VERSION = await page.evaluate(
//   //   () => document.getElementById('browser-version').innerText
//   // )
//   // const BROWSER_NAME = await page.evaluate(
//   //   () => document.getElementById('browser-name').innerText
//   // )

//   // const IS_BUN = await page.evaluate(
//   //   () => document.getElementById('is-bun').innerText
//   // )
//   // const BUN_VERSION = await page.evaluate(
//   //   () => document.getElementById('bun-version').innerText
//   // )

//   // const IS_DENO = await page.evaluate(
//   //   () => document.getElementById('is-deno').innerText
//   // )
//   // const DENO_VERSION = await page.evaluate(
//   //   () => document.getElementById('deno-version').innerText
//   // )

//   // const IS_NODE = await page.evaluate(
//   //   () => document.getElementById('is-node').innerText
//   // )
//   // const NODE_VERSION = await page.evaluate(
//   //   () => document.getElementById('node-version').innerText
//   // )

//   // test('run-env test on nodejs...', () => {
//   //   assert.strictEqual(IS_BROWSER, 'true')
//   //   assert.notStrictEqual(BROWSER_VERSION, 'undefined')
//   //   assert.notStrictEqual(BROWSER_NAME, 'undefined')

//   //   assert.strictEqual(IS_BUN, 'false')
//   //   assert.strictEqual(BUN_VERSION, 'undefined')

//   //   assert.strictEqual(IS_DENO, 'false')
//   //   assert.strictEqual(DENO_VERSION, 'undefined')

//   //   assert.strictEqual(IS_NODE, 'false')
//   //   assert.strictEqual(NODE_VERSION, 'undefined')
//   // })

//   // await browser.close()
// })()

import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:1234/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Document/)
})
