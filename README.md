# Roui - Vue 3 组件库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Roui 是一个基于 Vue 3 的现代化组件库，提供丰富的UI组件和良好的开发体验。

## ✨ 特性

- 🚀 **基于 Vue 3** - 使用 Composition API 和 TypeScript 构建
- 📦 **完整的 TypeScript 支持** - 提供完整的类型定义
- 🎨 **现代化设计** - 简洁美观的UI设计风格
- 🔧 **丰富的组件集合** - 包含表单、按钮、输入框等常用组件
- 📖 **详细文档** - 提供完整的组件文档和使用示例
- 🎯 **高性能** - 优化的打包体积和渲染性能
- 🔌 **易于扩展** - 模块化设计，易于自定义和扩展

## 🚀 快速开始

### 安装

```bash
npm install @roing/element
```

### 使用

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import RElement from '@roing/element'
import '@roing/element/dist/style.css'

const app = createApp(App)
app.use(RElement)
app.mount('#app')
```

```vue
<!-- 在组件中使用 -->
<template>
  <ROButton type="primary">主要按钮</ROButton>
  <ROInput v-model="text" placeholder="请输入内容" />
  <ROSelect v-model="selected" :options="options" />
</template>
```

## 📚 组件列表

### 基础组件

- **Button** - 按钮组件
- **Icon** - 图标组件

### 表单组件

- **Form** - 表单容器
- **FormItem** - 表单项
- **Input** - 输入框
- **Select** - 下拉选择器
- **Switch** - 开关组件

### 数据展示

- **Collapse** - 折叠面板
- **Message** - 消息提示

### 反馈组件

- **Tooltip** - 文字提示
- **Dropdown** - 下拉菜单

## 🛠️ 开发指南

### 环境要求

- Node.js >= 20.19.0 或 >= 22.12.0
- Vue 3.3.4+

### 本地开发

```bash
# 克隆项目
git clone <repository-url>
cd roui

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build

# 类型检查
npm run type-check

# 代码格式化
npm run format

# 代码检查
npm run lint
```

### 文档开发

```bash
# 启动文档开发服务器
npm run docs:dev

# 构建文档
npm run docs:build

# 预览构建后的文档
npm run docs:preview
```

## 📦 构建配置

项目使用 Vite 进行构建，支持多种输出格式：

- **ES Module** (`dist/es/`) - 现代浏览器和构建工具
- **UMD** (`dist/umd/`) - 传统浏览器和直接使用
- **类型定义** (`dist/types/`) - TypeScript 支持

## 🧪 测试

项目使用 Vitest 进行单元测试：

```bash
# 运行测试
npm test

# 运行测试并生成覆盖率报告
npm run test:coverage
```

## 🤝 贡献指南

我们欢迎任何形式的贡献！请查看以下指南：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发规范

- 遵循项目的代码风格
- 编写相应的单元测试
- 更新相关文档
- 确保所有测试通过

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 创建 [Issue](https://github.com/your-username/roui/issues)
- 发送邮件至: your-email@example.com

## 🙏 致谢

感谢以下开源项目：

- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript的超集
- [Vitepress](https://vitepress.dev/) - Vue驱动的静态站点生成器
- [Font Awesome](https://fontawesome.com/) - 图标库

---

**Roui** - 让 Vue 3 开发更简单、更高效！ 🎉
