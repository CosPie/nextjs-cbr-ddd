## Rider Meta
basic on next.js , but disable ssr. (serve as static html)


## Stack
- [x] next.js

- [x] typescript
- [x] mobx
- [x] jest
- [x] mock service worker
- [x] lit (web-components)
- [x] axios
- [x] rxjs
- [ ] upgrade to react18
- [x] react-three-fiber
- [x] storybook + msw-storybook-addon
- [ ] cypress (e2e test)


## Getting Started
required node version >= 12.0.0 , recommend v16.14.2.
> tips: use `nvm` to easily manage and switch between multi node version.

```bash
nvm install node v16.14.2
```

### Config

create `.env.local` to apply personal local config.

```bash
touch .env.local
```

`.env.local`

```
HOSTNAME=localhost # or ip
```

### Environment

-`.env `, loaded for all environment

-`.env.local`, loaded for local , (will ignore in git)

-`.env.development`, loaded for common development.

-`.env.production`, loaded for production.


### Development

run the development server:

```bash
yarn dev
```

## Build

```bash
yarn build
```

run the build command , will generate to `./out` folder.

## Architecture

> Inspired by https://phodal.github.io/clean-frontend/

> [Example](https://github.dev/phodal/clean-frontend/blob/master/src/app/domain/elephant/model/elephant.entity.ts)


Domain 目录
```
├── model
│    ├── elephant.entity.ts                         // 数据实体，简单的数据模型，用来表示核心的业务逻辑
│    ├── elephant.model.ts                         // 核心业务模型
     └── elephant.mapper.ts                      // 映射层，用于核心实体层映射，或映射到核心实体层。即进行模型转换
├── repository
    └── elephant.repository.ts                  // Repository，用于读取和存储数据，如网络请求、LocalStorage等。
├── store
    └── elephant.store.ts                         // 状态管理

```

Features 公共的业务组件目录
```
├── Xcomponent
│    ├── Xcomponent.tsx                         // main view (组件视图，只写视图及视图相关逻辑，任何计算、转换数据在repository或者store中进行)
│    ├── Xcomponent.module.less                         // css style (样式)
│    ├── Xcomponent.d.ts                         // component type props definition (ts类型)
│    ├── Xcomponent.util.ts (optional)                        // complex component process (复杂组件逻辑处理)
│    ├── Xcomponent.config.ts (optional)                        // constant config （常量配置）
│    ├── Xcomponent.stories.tsx (optional)                        // storybook file for ui test （ui 组件化测试构建）
│    ├── Xcomponent.test.tsx (optional)                        // jest unit test （单元测试）
│    └── Xcomponent.store.ts (optional)                      // manage component store (组件自身状态层，可选)

```

Pages 目录
直接对应路由文件，遵守next.js官方文档规则
```
// TODO
```


Shared 目录
存放全项目可通用的基础逻辑存放，如工具函数等。 与Features的不同点是，Shared目录存放的不是业务类型，而是基础类型，更多通用性。
```
// TODO
├── components

```

Scripts 目录
建议使用 zx(https://www.npmjs.com/package/zx) , 可以使用 js 编写bash脚本。
```
zx xxxx.mjs
```

## 总结
1. 每个Page一般由多个Features构成，每个features应作为对应域的View层。
2. 每个域有自身的数据上下文边界，如果域有交集，则单独抽成新的Bridge域


## Coding Guide
base Airbnb, https://github.com/airbnb/javascript ， 使用eslint配置，请确保eslint & prettier 的正确安装。

### use protobuf types
use pbjs to generate relative d.ts.



<!-- TODO -->
### Domain
- animation
-

#### Core Domain

- map : scene map , Amap
- car : model
- hud : batteryInfo, gear, speed

more...
