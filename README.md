# Pocket Journal / 手账小屋

React + Taro + TypeScript 手账小程序 MVP，优先适配微信小程序，同时保留 H5 编译入口。

## 本地运行

### 1. 安装依赖

如果之前已经执行过 `npm install`，建议先清理旧依赖，避免 Taro 与 Webpack 版本不匹配：

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

如果 npm registry 访问较慢，可以使用镜像源：

```powershell
npm install --registry=https://registry.npmmirror.com
```

### 2. 微信小程序开发

```powershell
npm run dev:weapp
```

编译产物会输出到 `dist/`。然后用微信开发者工具导入项目根目录，工具会根据 `project.config.json` 读取 `dist/`。

### 3. H5 开发

```powershell
npm run dev:h5
```

### 4. 类型检查

```powershell
npm run typecheck
```

## Windows 上 Progress Plugin 报错的处理

如果看到类似错误：

```txt
ValidationError: Invalid options object. Progress Plugin has been initialized...
options has an unknown property 'name' / 'color' / 'reporters'
```

通常是旧版 Taro 3.6 的 webpack runner 与过新的 `webpack` / `enhanced-resolve` 被 npm 的 `^` 范围安装出来后不兼容。本项目已将 Taro、Webpack 相关依赖固定版本，并通过 `overrides` 锁定：

- `@tarojs/*`: `3.6.40`
- `webpack`: `5.88.2`
- `enhanced-resolve`: `5.15.0`

修改后请务必重新安装依赖：

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
npm run dev:weapp
```
