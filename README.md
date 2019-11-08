## Getting started

Since this repo is meant to be a starting point, its recommended you use the following command to clone the project into your own project. Then remove this repo as the origin (or override with your own).

```
git clone https://github.com/mgambill/vue-starter.git your-project-name
cd your-project-name
git remote remove origin
```
alternatively you can change the remote origin
```
git remote set-url origin git://new.url.here
```
Finally replace the README.md or remove this write up.

## What does the project come with
- Vue with 
  - Router / Vuex
  - Scss via dart-node
  - Eslint with prettier
  - Pug (code rewritten in pug)
  - configurations stored package.json
- Prettier overrides
  - No semi-colons 
  - Print width set 120
- Vuex 
  - localstorage plugin
- Layout concept with routes
- A few common utils

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Common packages
```
yarn add portal-vue
```
