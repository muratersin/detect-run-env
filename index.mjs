const userAgent = (() => {
  if (typeof window === 'undefined') return undefined

  const ua = window?.navigator?.userAgent ?? ''

  if (ua !== '') {
    return ua.includes('Deno') ? undefined : ua
  }

  return undefined
})()

const Browser = {
  Chrome: 'chrome',
  Edge: 'edge',
  Firefox: 'firefox',
  Safari: 'safari',
  Opera: 'opera'
}

const getBrowserName = () => {
  if (userAgent === undefined) return undefined

  if (/OPR|OPERA/.test(userAgent)) {
    return Browser.Opera
  }

  if (userAgent.includes('Edg')) {
    return Browser.Edge
  }

  if (userAgent.includes('Firefox')) {
    return Browser.Firefox
  }

  if (userAgent.includes('Chrome')) {
    return Browser.Chrome
  }

  if (userAgent.includes('Safari') && userAgent.includes('Version')) {
    return Browser.Chrome
  }

  return 'unknown'
}

const getBrowserVersion = () => {
  if (userAgent === undefined) return undefined

  const splittedUserAgent = userAgent.split(' ')
  const others = splittedUserAgent.pop()
  const chrome = splittedUserAgent.pop()
  let version

  if (getBrowserName() === Browser.Chrome) {
    ;[, version] = chrome.split('/')
  } else {
    ;[, version] = others.split('/')
  }

  return version
}

const getProcess = () => {
  try {
    return !userAgent && typeof process !== 'undefined' ? process : {}
  } catch (err) {
    return {}
  }
}

export const IS_BROWSER = Boolean(userAgent)

export const BROWSER_VERSION = getBrowserVersion()

export const BROWSER_NAME = getBrowserName()

export const BUN_VERSION = getProcess()?.versions?.bun

export const IS_BUN = Boolean(BUN_VERSION)

export const DENO_VERSION =
  // eslint-disable-next-line no-undef
  typeof Deno !== 'undefined' ? Deno?.version?.deno : undefined

export const IS_DENO = Boolean(DENO_VERSION) && !IS_BROWSER

export const NODE_VERSION =
  IS_BUN || IS_DENO ? undefined : getProcess()?.versions?.node

export const IS_NODE = Boolean(NODE_VERSION) && !IS_BUN && !IS_DENO
