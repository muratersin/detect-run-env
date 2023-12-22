# detect-run-env

Effortlessly determine the current JavaScript runtime environment with this lightweight module. Seamlessly detects whether your code is running in a browser, Node.js, Deno, or Bun. Simplify cross-platform compatibility checks in your projects.

example:

```js
import {
  IS_BROWSER,
  BROWSER_NAME,
  BROWSER_VERSION,
  IS_BUN,
  BUN_VERSION,
  IS_DENO,
  DENO_VERSION,
  IS_NODE,
  NODE_VERSION
} from 'detect-run-env'

if (IS_BROWSER) {
  console.log('Browser name: ', BROWSER_NAME)
  console.log('Browser version: ', BROWSER_VERSION)
}

if (IS_BUN) {
  console.log(`This code currently runing on bun version: ${BUN_VERSION}`)
}

if (IS_DENO) {
  console.log(`This code currently runing on deno version: ${DENO_VERSION}`)
}

if (IS_NODE) {
  console.log(`This code currently runing on nodejs version: ${NODE_VERSION}`)
}
```
