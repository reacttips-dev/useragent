# UserAgent
This package is same as useragent that Facebook's team uses in their products.

## Install
```bash
yarn add @react-tips/useragent

or

npm install @react-tips/useragent
```
## How to use
Let's assume that we have user agent data as following:
```javascript
const userAgentData = {
    browserArchitecture: '32',
    browserFullVersion: '7.0',
    browserName: 'Mobile Safari',
    deviceName: 'iPhone',
    engineName: 'WebKit',
    engineVersion: '537.51.2',
    platformArchitecture: '64',
    platformFullVersion: '7.1.2',
    platformName: 'iOS',
}
```

There are some methods that you can use:

### isBrowser(query: string)

```javascript
// Use to detect by browser name
UserAgent.isBrowser('Mobile Safari') // true
UserAgent.isBrowser('Chrome') // false
UserAgent.isBrowser('Mobile Safari *') //true

// detect scope to specific versions
UserAgent.isBrowser('Mobile Safari *') // true
UserAgent.isBrowser('Mobile Safari 7') // true
UserAgent.isBrowser('Mobile Safari 7.0 - 7.1') // true
UserAgent.isBrowser('Chrome *') // false
UserAgent.isBrowser('Mobile Safari 6.0.1') // false
```

### isBrowserArchitecture(query: string)
```javascript
// Use to detect by browser architecture
UserAgent.isBrowserArchitecture('32') // true
UserAgent.isBrowserArchitecture('64') // false
```

### isPlatformArchitecture(query: string)
```javascript
// Use to detect by browser architecture
UserAgent.isPlatformArchitecture('32') // false
UserAgent.isPlatformArchitecture('64') // true
```

### isDevice(query: string)
```javascript
// Use to detect by device name
UserAgent.isDevice('iPhone') // true
UserAgent.isDevice('iPad') // false

// User to check does not expose version information
UserAgent.isDevice('iPhone *') // false
UserAgent.isDevice('iPhone 5s') // false
```

### isEngine(query: string)

```javascript
// Use to detect by engine name
UserAgent.isEngine('WebKit') // true
UserAgent.isEngine('Gecko') // false

// Use to check scope to specific versions
UserAgent.isEngine('WebKit *') // true
UserAgent.isEngine('WebKit 537.51.2') // true
UserAgent.isEngine('WebKit ~> 537.51.0') // true
UserAgent.isEngine('Gecko *') // false
UserAgent.isEngine('WebKit 536.0.0') // false
```

### isPlatform(query: string)

```javascript
// Use to detect by platform name
UserAgent.isPlatform('iOS') // true
UserAgent.isPlatform('Windows') // false

// Use to check scope to specific versions
UserAgent.isPlatform('iOS *') // true
UserAgent.isPlatform('iOS 7.1.2') // true
UserAgent.isPlatform('iOS 7.1.x || 6.1.x') // true

UserAgent.isPlatform('Windows *') // false
UserAgent.isPlatform('iOS 6') // false
```
### Other uses

We can also use to normalize Windows version numbers. Let's assume
user agent has:
```javascript
const userAgent = {
    //... other properties
    platformName: 'Windows',
    platformFullVersion: '4.0',
}
```
Then we can use:
```javascript
UserAgent.isPlatform('Windows') // true
UserAgent.isPlatform('Windows NT4.0') // true
UserAgent.isPlatform('Windows Vista') // false
```
## License
All code of this repo has been written by Facebook. React Tips team
does not keep copyright them. We only package them to the npm package
to help people use it more easy.
