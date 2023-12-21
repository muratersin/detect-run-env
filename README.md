# run-env

Run env is a running envoirenment detector librarry.

example:

```ks
import { IS_BROWSER, BROWSER_NAME_BROWSER_VERSION, IS_NODE, NODE_VERSION } from 'run-env'

if (IS_BROWSER) {
    console.log('Browser name: ', BROWSER_NAME)
    console.log('Browser version: ', BROWSER_VERSION)
}

if (IS_NODE) {
    console.log(`This code currently runing on nodejs version: ${NODE_VERSION}`)
}
```
