# Roui Element - Vue 3 组件库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![npm version](https://img.shields.io/npm/v/roui-element)](https://www.npmjs.com/package/roui-element)

Roui Element 是一个基于 Vue 3 的现代化组件库，提供丰富的UI组件和良好的开发体验，专为现代Web应用设计。

## ✨ 特性

- 🚀 **基于 Vue 3** - 使用 Composition API 和 TypeScript 构建
- 📦 **完整的 TypeScript 支持** - 提供完整的类型定义
- 🎨 **现代化设计** - 简洁美观的UI设计风格
- 🔧 **丰富的组件集合** - 包含表单、按钮、输入框等常用组件
- 📖 **详细文档** - 提供完整的组件文档和使用示例
- 🎯 **高性能** - 优化的打包体积和渲染性能
- 🔌 **易于扩展** - 模块化设计，易于自定义和扩展
- 🌐 **多格式支持** - 支持 ES Module、UMD 等多种打包格式

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install roui-element

# 使用 yarn
yarn add roui-element

# 使用 pnpm
pnpm add roui-element
```

### 完整引入

```javascript
// main.js / main.ts
import { createApp } from 'vue'
import App from './App.vue'
import RElement from 'roui-element'
import 'roui-element/dist/style.css'

const app = createApp(App)
app.use(RElement)
app.mount('#app')
```

### 按需引入（推荐）

```javascript
// 在组件中按需引入
import { ROButton, ROInput, ROSelect } from 'roui-element'
import 'roui-element/dist/style.css'

export default {
  components: {
    ROButton,
    ROInput,
    ROSelect,
  },
}
```

### 基础使用示例

```vue
<template>
  <div class="demo-container">
    <!-- 按钮组件 -->
    <RoButton type="primary" @click="handleClick">主要按钮</RoButton>
    <RoButton type="success">成功按钮</RoButton>
    <RoButton type="warning">警告按钮</RoButton>
    <RoButton type="danger">危险按钮</RoButton>

    <!-- 输入框组件 -->
    <RoInput v-model="inputValue" placeholder="请输入内容" clearable />

    <!-- 下拉选择器 -->
    <RoSelect v-model="selectedValue" :options="options" placeholder="请选择" />

    <!-- 表单组件 -->
    <RoForm :model="formData" :rules="formRules" ref="formRef">
      <RoFormItem label="用户名" prop="username">
        <RoInput v-model="formData.username" />
      </RoFormItem>
      <RoFormItem label="邮箱" prop="email">
        <RoInput v-model="formData.email" />
      </RoFormItem>
      <RoButton type="primary" @click="handleSubmit">提交</RoButton>
    </RoForm>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const inputValue = ref('')
const selectedValue = ref('')
const formRef = ref()

const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
]

const formData = reactive({
  username: '',
  email: '',
})

const formRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
  ],
}

const handleClick = () => {
  console.log('按钮被点击')
}

const handleSubmit = async () => {
  try {
    await formRef.value.validate()
    console.log('表单验证通过', formData)
  } catch (error) {
    console.log('表单验证失败', error)
  }
}
</script>
```

## 📚 组件列表

### 基础组件

- **Button** (`ROButton`) - 按钮组件，支持多种类型和状态
- **Icon** (`ROIcon`) - 图标组件，集成 Font Awesome

### 表单组件

- **Form** (`ROForm`) - 表单容器，提供验证功能
- **FormItem** (`ROFormItem`) - 表单项，支持标签和错误提示
- **Input** (`ROInput`) - 输入框组件，支持清空功能
- **Select** (`ROSelect`) - 下拉选择器
- **Switch** (`ROSwitch`) - 开关组件

### 数据展示

- **Collapse** (`ROCollapse`) - 折叠面板组件
- **Message** (`ROMessage`) - 消息提示组件

### 反馈组件

- **Tooltip** (`ROTooltip`) - 文字提示组件
- **Dropdown** (`RODropdown`) - 下拉菜单组件

## 🛠️ 开发指南

### 环境要求

- Node.js >= 20.19.0 或 >= 22.12.0
- Vue 3.3.4+
- TypeScript 5.9.0+

### 本地开发

```bash
# 克隆项目
git clone https://github.com/origin-mumu/roui.git
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

### 构建命令

```bash
# 构建所有格式
npm run build

# 仅构建 ES 模块
npm run build-es

# 仅构建 UMD 格式
npm run build-umd
```

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

### 开发流程

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
- 使用 TypeScript 编写代码
- 遵循 Vue 3 最佳实践

## 📄 API 参考

### Form 组件 API

#### Props

| 参数       | 说明             | 类型     | 默认值 |
| ---------- | ---------------- | -------- | ------ |
| model      | 表单数据对象     | `object` | -      |
| rules      | 表单验证规则     | `object` | -      |
| labelWidth | 表单域标签的宽度 | `string` | -      |

#### Methods

| 方法名        | 说明               | 参数 |
| ------------- | ------------------ | ---- |
| validate      | 对整个表单进行验证 | -    |
| clearValidate | 清除验证结果       | -    |
| resetFields   | 重置表单字段       | -    |

### Button 组件 API

#### Props

| 参数     | 说明       | 类型                                                        | 默认值    |
| -------- | ---------- | ----------------------------------------------------------- | --------- |
| type     | 按钮类型   | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | -         |
| size     | 按钮尺寸   | `'large' \| 'default' \| 'small'`                           | 'default' |
| disabled | 是否禁用   | `boolean`                                                   | false     |
| loading  | 是否加载中 | `boolean`                                                   | false     |

## 🔧 常见问题

### Q: 如何按需引入组件？

A: 可以直接从包中引入特定组件：

```javascript
import { ROButton, ROInput } from 'roui-element'
```

### Q: 样式文件需要单独引入吗？

A: 是的，需要单独引入样式文件：

```javascript
import 'roui-element/dist/style.css'
```

### Q: 支持 TypeScript 吗？

A: 完全支持，提供了完整的类型定义。

### Q: 如何自定义主题？

A: 可以通过 CSS 变量或覆盖样式来自定义主题。

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 邮箱: 872709652@qq.com
- GitHub Issues: [项目 Issues](https://github.com/origin-mumu/roui/issues)
- 项目地址: [Roui Element](https://github.com/origin-mumu/roui)

## 🙏 致谢

感谢以下开源项目：

- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript的超集
- [Vitepress](https://vitepress.dev/) - Vue驱动的静态站点生成器
- [Font Awesome](https://fontawesome.com/) - 图标库

---

**Roui Element** - 让 Vue 3 开发更简单、更高效！ 🎉
