import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:1234/')

  await expect(page.getByTestId('is-browser')).toHaveText('true')
  await expect(page.getByTestId('browser-name')).not.toHaveText('undefined')
  await expect(page.getByTestId('browser-version')).not.toHaveText('undefined')

  await expect(page.getByTestId('is-bun')).toHaveText('false')
  await expect(page.getByTestId('bun-version')).toHaveText('undefined')

  await expect(page.getByTestId('is-deno')).toHaveText('false')
  await expect(page.getByTestId('deno-version')).toHaveText('undefined')

  await expect(page.getByTestId('is-node')).toHaveText('false')
  await expect(page.getByTestId('node-version')).toHaveText('undefined')
})
