## Rider Meta
basic on next.js , but disable ssr. (maybe will enable it on future)

## Getting Started

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
Inspired by https://phodal.github.io/clean-frontend/
Example: https://github.dev/phodal/clean-frontend/blob/master/src/app/domain/elephant/model/elephant.entity.ts


Domain 目录
```
├── model
│    ├── elephant.entity.ts                         // 数据实体，简单的数据模型，用来表示核心的业务逻辑
│    ├── elephant.model.ts                         // 核心业务模型
     └── elephant.mapper.ts                      // 映射层，用于核心实体层映射，或映射到核心实体层。即进行模型转换
├── repository
    └── elephant.repository.ts                  // Repository，用于读取和存储数据。
├── store
    └── elephant.store.ts                         // 状态管理

```

Features 组件目录
```
├── Xcomponent
│    ├── Xcomponent.tsx                         // 组件视图，只写视图及视图相关逻辑，任何计算、转换数据在repository或者store中进行
│    ├── Xcomponent.module.less                         // 组件样式
     └── Xcomponent.store.ts (optional)                      // 组件自身状态层，可选

```

Pages 目录直接对应路由文件，遵守next.js官方文档规则

Shared 全项目可通用的逻辑存放，如工具函数等。

## Coding Guide

base Airbnb, https://github.com/airbnb/javascript

### use protobuf types
<!-- TODO -->
### Domain
- animation
-

#### Core Domain

- map : scene map , Amap
- car : model
- hud : batteryInfo, gear, speed

more...
