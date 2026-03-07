<script setup lang="ts">
import Button from './components/Button/Button.vue'
import type { Options } from '@popperjs/core'
import type { ButtonInstance } from './components/Button/types'
import type { TooltipInstance } from './components/Tooltip/types'
import { ref, onMounted, h, reactive } from 'vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import type { MenuOption } from './components/Dropdown/types'
import { createMessage, closeAll } from './components/Message/method'
import ROInput from './components/Input/Input.vue'
import ROSelect from './components/Select/Select.vue'
import ROSwitch from './components/Switch/Switch.vue'
import Form from './components/Form/Form.vue'
import FormItem from './components/Form/FormItem.vue'
import type { FormInstance } from './components/Form/types'
import { toRaw } from 'vue'
const ButtonRef = ref<ButtonInstance | null>(null)
const TooltipRef = ref<TooltipInstance | null>(null)
const trigger = ref<any>('click')
const openedValue = ref(['1'])

const formRef = ref<FormInstance | null>(null)

// 1. 表单数据模型 (Model)
const formModel = reactive({
  name: '',
  region: '',
  delivery: false,
  desc: '',
})

// 2. 表单验证规则 (Rules)
const formRules = {
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
  ],
  region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
  desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
}

// 3. 提交表单
const submitForm = async () => {
  if (!formRef.value) return
  try {
    await formRef.value.validate()
    createMessage({
      message: '验证通过，提交成功！',
      type: 'success',
      duration: 3000,
    })
    console.log('提交的数据:', toRaw(formModel))
  } catch (error) {
    console.error('验证失败:', error)
    createMessage({
      message: '表单验证失败，请检查输入',
      type: 'danger',
      duration: 3000,
    })
  }
}

// 4. 重置表单
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
  createMessage({
    message: '表单已重置',
    type: 'info',
  })
}

// Input组件相关数据
const username = ref('')
const password = ref('')
const email = ref('')
const description = ref('')
const searchText = ref('')
const phoneNumber = ref('')
const disabledInput = ref('无法修改的内容')
const readonlyInput = ref('只读内容')
const customInput = ref('')

// Switch组件相关数据
const switchValue1 = ref(false)
const switchValue2 = ref(true)
const switchValue3 = ref('enabled')
const switchValue4 = ref(false)
const switchValue5 = ref(true)
const switchValue6 = ref(false)
const switchValue7 = ref(true)
// Switch事件处理
const handleSwitchChange = (value: any, name: string) => {
  console.log(`${name} 开关状态变化:`, value)
  createMessage({
    message: `${name} 已${value ? '开启' : '关闭'}`,
    type: 'info',
    duration: 2000,
  })
}

// 表单验证状态
const emailError = ref('')
const phoneError = ref('')

// 验证函数
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    emailError.value = '邮箱不能为空'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = '请输入有效的邮箱地址'
  } else {
    emailError.value = ''
  }
}

const validatePhone = () => {
  const phoneRegex = /^1[3-9]\d{9}$/
  if (!phoneNumber.value) {
    phoneError.value = '手机号不能为空'
  } else if (!phoneRegex.test(phoneNumber.value)) {
    phoneError.value = '请输入有效的手机号码'
  } else {
    phoneError.value = ''
  }
}

// 表单提交
const handleSubmit = () => {
  validateEmail()
  validatePhone()

  if (!emailError.value && !phoneError.value) {
    createMessage({
      message: '表单提交成功！',
      type: 'success',
      duration: 3000,
    })
    console.log('表单数据:', {
      username: username.value,
      email: email.value,
      phone: phoneNumber.value,
      description: description.value,
    })
  } else {
    createMessage({
      message: '请检查表单错误',
      type: 'warning',
      duration: 3000,
    })
  }
}

// 清除表单
const clearForm = () => {
  username.value = ''
  password.value = ''
  email.value = ''
  description.value = ''
  searchText.value = ''
  phoneNumber.value = ''
  emailError.value = ''
  phoneError.value = ''
}

// Select组件相关数据
const selectedCity = ref('')
const selectedProvince = ref('beijing')
const multipleSelected = ref(['beijing', 'shanghai'])
const disabledSelect = ref('')
const loadingSelect = ref('')

// Select选项数据
const cityOptions = ref([
  { label: '北京市', value: 'beijing' },
  { label: '上海市', value: 'shanghai' },
  { label: '广州市', value: 'guangzhou' },
  { label: '深圳市', value: 'shenzhen' },
  { label: '杭州市', value: 'hangzhou' },
  { label: '南京市', value: 'nanjing' },
  { label: '成都市', value: 'chengdu' },
  { label: '武汉市', value: 'wuhan' },
])

const provinceOptions = ref([
  { label: '北京市', value: 'beijing' },
  { label: '天津市', value: 'tianjin' },
  { label: '河北省', value: 'hebei' },
  { label: '山西省', value: 'shanxi' },
  { label: '内蒙古自治区', value: 'neimenggu' },
  { label: '辽宁省', value: 'liaoning' },
  { label: '吉林省', value: 'jilin' },
  { label: '黑龙江省', value: 'heilongjiang' },
  { label: '上海市', value: 'shanghai' },
  { label: '江苏省', value: 'jiangsu' },
  { label: '浙江省', value: 'zhejiang' },
  { label: '安徽省', value: 'anhui' },
  { label: '福建省', value: 'fujian' },
  { label: '江西省', value: 'jiangxi' },
  { label: '山东省', value: 'shandong' },
])

const disabledOptions = ref([
  { label: '选项一', value: '1' },
  { label: '禁用选项', value: '2', disabled: true },
  { label: '选项三', value: '3' },
  { label: '另一个禁用选项', value: '4', disabled: true },
  { label: '选项五', value: '5' },
])

// Select事件处理
const handleSelectChange = (value: string) => {
  console.log('Select值变化:', value)
  createMessage({
    message: `选择了: ${value}`,
    type: 'info',
    duration: 2000,
  })
}

const handleSelectVisibleChange = (visible: boolean) => {
  console.log('下拉菜单可见性变化:', visible)
}

// 输入事件处理
const handleInputChange = (value: string) => {
  console.log('输入内容变化:', value)
}

const handleInputFocus = (event: FocusEvent) => {
  console.log('输入框获得焦点:', event)
}

const handleInputBlur = (event: FocusEvent) => {
  console.log('输入框失去焦点:', event)
}

// Dropdown相关数据
const dropdownMenuOptions = ref<MenuOption[]>([
  { label: '新建文件', key: 'new', disabled: false },
  { label: '打开文件', key: 'open', disabled: false },
  { label: h('span', { style: { color: 'red' } }, '带样式的文本'), key: 'save', disabled: false },
  { label: '', key: 'divider1', divided: true },
  { label: '导出为PDF', key: 'export-pdf', disabled: false },
  { label: '导出为Word', key: 'export-word', disabled: true },
  { label: '', key: 'divider2', divided: true },
  { label: '退出', key: 'exit', disabled: false },
])

const userMenuOptions = ref<MenuOption[]>([
  { label: '个人资料', key: 'profile', disabled: false },
  { label: '设置', key: 'settings', disabled: false },
  { label: '', key: 'divider1', divided: true },
  { label: '切换主题', key: 'theme', disabled: false },
  { label: '语言设置', key: 'language', disabled: false },
  { label: '', key: 'divider2', divided: true },
  { label: '退出登录', key: 'logout', disabled: false },
])

const dropdownRef = ref<any>(null)

// Dropdown事件处理
const handleDropdownSelect = (item: MenuOption) => {
  console.log('选择了菜单项:', item)
  alert(`您选择了: ${typeof item.label === 'string' ? item.label : '菜单项'}`)
}

const handleDropdownVisibleChange = (visible: boolean) => {
  console.log('下拉菜单可见性变化:', visible)
}

// 手动控制Dropdown显示/隐藏
const showDropdown = () => {
  dropdownRef.value?.show()
}

const hideDropdown = () => {
  dropdownRef.value?.hide()
}

// Message组件测试函数
const showMessage = (type: 'success' | 'info' | 'warning' | 'danger', message: string) => {
  createMessage({
    message,
    type,
    duration: 3000,
    showClose: true,
  })
}

const showSuccessMessage = () => {
  showMessage('success', '操作成功！这是一条成功消息。')
}

const showInfoMessage = () => {
  showMessage('info', '这是一条信息提示消息。')
}

const showWarningMessage = () => {
  showMessage('warning', '警告：这是一条警告消息！')
}

const showErrorMessage = () => {
  showMessage('danger', '错误：操作失败，请重试！')
}

const showCustomDurationMessage = () => {
  createMessage({
    message: '这条消息将持续5秒钟',
    type: 'info',
    duration: 5000,
    showClose: true,
  })
}

const showNoCloseMessage = () => {
  createMessage({
    message: '这条消息没有关闭按钮，会自动消失',
    type: 'success',
    duration: 3000,
    showClose: false,
  })
}

const showVNodeMessage = () => {
  createMessage({
    message: h('div', [
      h('strong', '自定义内容'),
      h('br'),
      h('span', { style: { color: '#409eff' } }, '支持VNode渲染'),
    ]),
    type: 'info',
    duration: 4000,
    showClose: true,
  })
}

// Select表单处理方法
const handleSelectFormSubmit = () => {
  const formData = {
    username: username.value,
    province: selectedProvince.value,
    city: selectedCity.value,
    email: email.value,
  }

  console.log('表单数据:', formData)
  createMessage({
    message: '表单提交成功！',
    type: 'success',
    duration: 3000,
  })
}

const clearSelectForm = () => {
  username.value = ''
  selectedProvince.value = 'beijing'
  selectedCity.value = ''
  email.value = ''
}

onMounted(() => {
  if (ButtonRef.value) {
    console.log(ButtonRef.value.ref)
  }
})
const options: Partial<Options> = {
  placement: 'right-end',
  strategy: 'fixed',
}
</script>

<template>
  <h2>ROForm 表单组件综合示例</h2>

  <div style="border: 1px solid #ebeef5; padding: 20px; border-radius: 4px; max-width: 600px">
    <Form ref="formRef" :model="formModel" :rules="formRules">
      <FormItem label="活动名称" prop="name">
        <ROInput
          v-model="formModel.name"
          placeholder="请输入活动名称 (3-10字)"
          style="width: 100%"
        />
      </FormItem>

      <FormItem label="活动区域" prop="region">
        <ROSelect
          v-model="formModel.region"
          :options="cityOptions"
          placeholder="请选择活动区域"
          style="width: 100%"
        />
      </FormItem>

      <FormItem label="即时配送" prop="delivery">
        <ROSwitch v-model="formModel.delivery" />
      </FormItem>

      <FormItem label="活动形式" prop="desc">
        <ROInput
          v-model="formModel.desc"
          type="textarea"
          :rows="3"
          placeholder="请输入活动形式描述"
          style="width: 100%"
        />
      </FormItem>

      <FormItem>
        <div style="display: flex; gap: 12px">
          <Button type="primary" @click="submitForm">立即创建</Button>
          <Button @click="resetForm">重置</Button>
        </div>
      </FormItem>
    </Form>

    <div style="margin-top: 20px; background: #f5f7fa; padding: 10px; font-size: 12px; color: #666">
      <strong>Model Data:</strong> {{ formModel }}
    </div>
  </div>
  <!-- Switch组件示例区域 -->
  <h2>ROSwitch 开关组件示例</h2>

  <!-- 基本用法 -->
  <h3>1. 基本开关</h3>
  <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
    <ROSwitch v-model="switchValue1" @change="(val) => handleSwitchChange(val, '基本开关')" />
    <span>当前状态: {{ switchValue1 ? '开启' : '关闭' }}</span>
  </div>

  <!-- 带文本的开关 -->
  <h3>2. 带文本的开关</h3>
  <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
    <ROSwitch
      v-model="switchValue2"
      active-text="开"
      inactive-text="关"
      @change="(val) => handleSwitchChange(val, '文本开关')"
    />
    <span>当前状态: {{ switchValue2 ? '开启' : '关闭' }}</span>
  </div>

  <!-- 自定义值的开关 -->
  <h3>3. 自定义值的开关</h3>
  <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
    <ROSwitch
      v-model="switchValue3"
      :active-value="'enabled'"
      :inactive-value="'disabled'"
      active-text="启用"
      inactive-text="禁用"
      @change="(val) => handleSwitchChange(val, '自定义值开关')"
    />
    <span>当前状态: {{ switchValue3 === 'enabled' ? '启用' : '禁用' }}</span>
  </div>

  <!-- 禁用状态 -->
  <h3>4. 禁用状态</h3>
  <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
    <ROSwitch v-model="switchValue4" disabled />
    <ROSwitch v-model="switchValue5" disabled />
    <span>禁用状态的开关无法操作</span>
  </div>

  <!-- 不同尺寸 -->
  <h3>5. 不同尺寸</h3>
  <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
    <ROSwitch v-model="switchValue6" size="small" active-text="小" inactive-text="小" />
    <ROSwitch v-model="switchValue7" active-text="默认" inactive-text="默认" />
    <ROSwitch v-model="switchValue1" size="large" active-text="大" inactive-text="大" />
  </div>
  <header>
    <Tooltip placement="right" :trigger="trigger" ref="TooltipRef" manual :popper-options="options">
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
        ref="triggerNode"
      />
      <template #content>
        <h1>hellotooll</h1>
      </template>
    </Tooltip>
  </header>
  <Icon icon="arrow-up" size="2xl" type="danger" />
  <main>
    <!-- Input组件示例区域 -->
    <h2>ROInput 输入框组件示例</h2>

    <!-- 基本用法 -->
    <h3>1. 基本输入框</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
      <ROInput
        v-model="username"
        placeholder="请输入用户名"
        style="width: 200px"
        @input="handleInputChange"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
      <span>当前值: {{ username }}</span>
    </div>

    <!-- 密码输入框 -->
    <h3>2. 密码输入框</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
      <ROInput
        v-model="password"
        type="password"
        show-password
        placeholder="请输入密码"
        style="width: 200px"
        clearable
      />
      <span>密码: {{ password ? '***' : '未输入' }}</span>
    </div>

    <!-- 文本域 -->
    <h3>3. 多行文本域</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap">
      <ROInput
        v-model="description"
        type="textarea"
        placeholder="请输入描述信息"
        style="width: 300px; height: 100px"
        :rows="4"
      />
      <div>
        <div>当前内容:</div>
        <div style="max-width: 300px; word-break: break-all">{{ description }}</div>
      </div>
    </div>

    <!-- 搜索框 -->
    <h3>4. 搜索框</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
      <ROInput v-model="searchText" placeholder="搜索内容..." style="width: 250px" clearable>
        <template #prefix>
          <Icon icon="search" />
        </template>
      </ROInput>
      <span>搜索关键词: {{ searchText }}</span>
    </div>

    <!-- 表单验证示例 -->
    <h3>5. 表单验证</h3>
    <div style="margin: 20px 0; display: flex; flex-direction: column; gap: 15px">
      <div style="display: flex; gap: 10px; align-items: center">
        <ROInput
          v-model="email"
          placeholder="请输入邮箱"
          style="width: 250px"
          :class="{ error: emailError }"
          @blur="validateEmail"
        />
        <span v-if="emailError" style="color: red">{{ emailError }}</span>
      </div>

      <div style="display: flex; gap: 10px; align-items: center">
        <ROInput
          v-model="phoneNumber"
          placeholder="请输入手机号"
          style="width: 250px"
          :class="{ error: phoneError }"
          @blur="validatePhone"
        />
        <span v-if="phoneError" style="color: red">{{ phoneError }}</span>
      </div>
    </div>

    <!-- 禁用和只读状态 -->
    <h3>6. 禁用和只读状态</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap">
      <ROInput v-model="disabledInput" placeholder="禁用输入框" disabled style="width: 200px" />
      <ROInput v-model="readonlyInput" placeholder="只读输入框" readonly style="width: 200px" />
    </div>

    <!-- 插槽使用示例 -->
    <h3>7. 插槽使用示例</h3>
    <div style="margin: 20px 0; display: flex; flex-direction: column; gap: 15px">
      <!-- 前置插槽 -->
      <ROInput v-model="customInput" placeholder="带前置内容的输入框" style="width: 300px">
        <template #prepend>
          <span style="padding: 0 10px; background: #f5f5f5; border-right: 1px solid #ddd"
            >http://</span
          >
        </template>
      </ROInput>

      <!-- 后置插槽 -->
      <ROInput v-model="customInput" placeholder="带后置内容的输入框" style="width: 300px">
        <template #append>
          <Button type="primary" size="small">搜索</Button>
        </template>
      </ROInput>

      <!-- 前后都有插槽 -->
      <ROInput v-model="customInput" placeholder="前后都有内容的输入框" style="width: 350px">
        <template #prepend>
          <span style="padding: 0 10px; background: #f5f5f5; border-right: 1px solid #ddd"
            >价格</span
          >
        </template>
        <template #append>
          <span style="padding: 0 10px; background: #f5f5f5; border-left: 1px solid #ddd">元</span>
        </template>
      </ROInput>
    </div>

    <!-- 表单操作按钮 -->
    <div style="margin: 20px 0; display: flex; gap: 10px">
      <Button type="primary" @click="handleSubmit">提交表单</Button>
      <Button type="danger" @click="clearForm">清空表单</Button>
    </div>

    <!-- Select组件示例区域 -->
    <h2>ROSelect 下拉选择组件示例</h2>

    <!-- 基本用法 -->
    <h3>1. 基本选择框</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
      <ROSelect
        v-model="selectedCity"
        :options="cityOptions"
        placeholder="请选择城市"
        style="width: 200px"
        @change="handleSelectChange"
        @visible-change="handleSelectVisibleChange"
      />
      <span>当前选择: {{ selectedCity }}</span>
    </div>

    <!-- 带默认值 -->
    <h3>2. 带默认值的选择框</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
      <ROSelect
        v-model="selectedProvince"
        :options="provinceOptions"
        placeholder="请选择省份"
        style="width: 200px"
      />
      <span
        >当前省份:
        {{ provinceOptions.find((opt) => opt.value === selectedProvince)?.label || '未选择' }}</span
      >
    </div>

    <!-- 禁用状态 -->
    <h3>3. 禁用状态</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap">
      <ROSelect
        v-model="disabledSelect"
        :options="cityOptions"
        placeholder="禁用选择框"
        disabled
        style="width: 200px"
      />
      <ROSelect
        v-model="selectedCity"
        :options="disabledOptions"
        placeholder="包含禁用选项"
        style="width: 200px"
      />
    </div>

    <!-- 不同尺寸 -->
    <h3>4. 不同尺寸</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
      <ROSelect
        v-model="selectedCity"
        :options="cityOptions"
        placeholder="小尺寸"
        size="small"
        style="width: 200px"
      />
      <ROSelect
        v-model="selectedCity"
        :options="cityOptions"
        placeholder="默认尺寸"
        style="width: 200px"
      />
      <ROSelect
        v-model="selectedCity"
        :options="cityOptions"
        placeholder="大尺寸"
        size="large"
        style="width: 200px"
      />
    </div>

    <!-- 清空选项 -->
    <h3>5. 清空选择</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center">
      <ROSelect
        v-model="selectedCity"
        :options="cityOptions"
        placeholder="可选择后清空"
        style="width: 200px"
      />
      <Button type="danger" size="small" @click="selectedCity = ''">清空选择</Button>
      <span>当前选择: {{ selectedCity || '未选择' }}</span>
    </div>

    <!-- 动态选项 -->
    <h3>6. 动态选项示例</h3>
    <div style="margin: 20px 0; display: flex; flex-direction: column; gap: 15px">
      <div style="display: flex; gap: 10px; align-items: center">
        <Button
          type="primary"
          size="small"
          @click="
            cityOptions.push({
              label: `新城市${cityOptions.length + 1}`,
              value: `new${cityOptions.length + 1}`,
            })
          "
        >
          添加选项
        </Button>
        <Button
          type="danger"
          size="small"
          @click="cityOptions.pop()"
          :disabled="cityOptions.length <= 1"
        >
          删除选项
        </Button>
        <span>当前选项数量: {{ cityOptions.length }}</span>
      </div>
      <ROSelect
        v-model="selectedCity"
        :options="cityOptions"
        placeholder="动态选项选择框"
        style="width: 250px"
      />
    </div>

    <!-- 表单组合使用 -->
    <h3>7. 表单组合使用示例</h3>
    <div
      style="
        margin: 20px 0;
        padding: 20px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background: #fafafa;
      "
    >
      <h4 style="margin-top: 0">用户信息表单</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; max-width: 600px">
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold">用户名:</label>
          <ROInput v-model="username" placeholder="请输入用户名" style="width: 100%" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold">所在省份:</label>
          <ROSelect
            v-model="selectedProvince"
            :options="provinceOptions"
            placeholder="请选择省份"
            style="width: 100%"
          />
        </div>
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold">所在城市:</label>
          <ROSelect
            v-model="selectedCity"
            :options="cityOptions"
            placeholder="请选择城市"
            style="width: 100%"
          />
        </div>
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold">邮箱:</label>
          <ROInput v-model="email" placeholder="请输入邮箱" style="width: 100%" />
        </div>
      </div>
      <div style="margin-top: 15px">
        <Button type="primary" @click="handleSelectFormSubmit">提交表单</Button>
        <Button type="danger" @click="clearSelectForm" style="margin-left: 10px">清空表单</Button>
      </div>
    </div>

    <!-- 其他组件示例 -->
    <Button round @click="TooltipRef?.show()">Round Button</Button>
    <Button circle @click="TooltipRef?.hide()">RO</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary" loading icon="arrow-up">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />

    <!-- Message组件测试区域 -->
    <h3>Message 消息提示测试</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap">
      <Button type="success" @click="showSuccessMessage">成功消息</Button>
      <Button type="info" @click="showInfoMessage">信息消息</Button>
      <Button type="warning" @click="showWarningMessage">警告消息</Button>
      <Button type="danger" @click="showErrorMessage">错误消息</Button>
      <Button type="primary" @click="showCustomDurationMessage">5秒时长</Button>
      <Button type="primary" plain @click="showNoCloseMessage">无关闭按钮</Button>
      <Button type="info" plain @click="showVNodeMessage">VNode内容</Button>
      <Button type="danger" @click="closeAll">关闭所有消息</Button>
    </div>

    <!-- Dropdown组件样例 -->
    <h3>Dropdown 下拉菜单样例</h3>
    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap">
      <!-- 基本用法 - hover触发 -->
      <Dropdown
        :menu-options="dropdownMenuOptions"
        trigger="hover"
        placement="bottom"
        @select="handleDropdownSelect"
        @visible-change="handleDropdownVisibleChange"
        hide-after-click
      >
        <Button type="primary">文件操作 (hover)</Button>
      </Dropdown>

      <!-- click触发 -->
      <Dropdown
        :menu-options="dropdownMenuOptions"
        trigger="click"
        placement="bottom"
        style="margin-left: 10px"
      >
        <Button type="success">文件操作 (click)</Button>
      </Dropdown>

      <!-- 用户菜单 -->
      <Dropdown :menu-options="userMenuOptions" trigger="click" placement="bottom-end">
        <Button type="info" icon="user">用户菜单</Button>
      </Dropdown>

      <!-- 手动控制 -->
      <Dropdown :menu-options="dropdownMenuOptions" placement="bottom" ref="dropdownRef">
        <Button type="warning">手动控制</Button>
      </Dropdown>
      <Button type="danger" @click="showDropdown" style="margin-left: 5px">显示</Button>
      <Button type="danger" plain @click="hideDropdown" style="margin-left: 5px">隐藏</Button>
    </div>

    <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap">
      <!-- 不同位置 -->
      <Dropdown :menu-options="dropdownMenuOptions" trigger="hover" placement="top">
        <Button>上方显示 (top)</Button>
      </Dropdown>

      <Dropdown :menu-options="dropdownMenuOptions" trigger="hover" placement="right">
        <Button>右侧显示 (right)</Button>
      </Dropdown>

      <Dropdown :menu-options="dropdownMenuOptions" trigger="hover" placement="left">
        <Button>左侧显示 (left)</Button>
      </Dropdown>
    </div>

    <Collapse :modelValue="openedValue" accordion>
      <Item name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </Item>
      <Item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </Item>
    </Collapse>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* 输入框错误样式 */
.error {
  border-color: red !important;
}

/* Select组件相关样式 */
.select-form-container {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.select-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  max-width: 600px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #495057;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
