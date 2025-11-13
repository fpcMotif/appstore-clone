# Svelte 5 Runes 快速参考 - 速查表

> 一页纸搞定所有转换！快速查找、快速转换。

---

## 🔄 快速转换表

| 场景               | Svelte 4                             | Svelte 5 Runes                                  |
| ------------------ | ------------------------------------ | ----------------------------------------------- |
| **响应式变量**     | `let count = 0`                      | `let count = $state(0)`                         |
| **组件 Props**     | `export let name`                    | `let { name } = $props()`                       |
| **Props 默认值**   | `export let count = 0`               | `let { count = 0 } = $props()`                  |
| **派生值**         | `$: doubled = count * 2`             | `const doubled = $derived(count * 2)`           |
| **副作用**         | `$: { console.log(x) }`              | `$effect(() => { console.log(x) })`             |
| **DOM 事件**       | `<button on:click={fn}>`             | `<button onclick={fn}>`                         |
| **组件事件（子）** | `dispatch('click', data)`            | `onclick(data)`                                 |
| **组件事件（父）** | `<C on:click={(e) => fn(e.detail)}>` | `<C onclick={(data) => fn(data)}>`              |
| **默认插槽（子）** | `<slot />`                           | `{@render children?.()}`                        |
| **命名插槽（子）** | `<slot name="header" />`             | `{@render header()}`                            |
| **插槽使用（父）** | `<div slot="x">...</div>`            | `{#snippet x()}<div>...</div>{/snippet}`        |
| **Ref 绑定**       | `let ref`<br>`<div bind:this={ref}>` | `let ref = $state()`<br>`<div bind:this={ref}>` |
| **更新前钩子**     | `beforeUpdate(() => {})`             | `$effect.pre(() => {})`                         |
| **更新后钩子**     | `afterUpdate(() => {})`              | `$effect(() => {})`                             |
| **清理函数**       | `onDestroy(() => {})`                | `$effect(() => { return () => {} })`            |
| **Store 订阅**     | `$: value = $store`                  | `const value = $derived($store)`                |

---

## ⚡ 一分钟诊断

看看你的代码有没有这些？**有就要转换！**

```svelte
<!-- 🚨 检测点 1: export let -->
export let anything;        → let { anything } = $props()

<!-- 🚨 检测点 2: $: 派生 -->
$: derived = expression;    → const derived = $derived(expression)

<!-- 🚨 检测点 3: $: 副作用 -->
$: { sideEffect(); }        → $effect(() => { sideEffect(); })

<!-- 🚨 检测点 4: on: 事件 -->
<div on:click={fn}>         → <div onclick={fn}>

<!-- 🚨 检测点 5: <slot> -->
<slot />                    → {@render children?.()}

<!-- 🚨 检测点 6: createEventDispatcher -->
const dispatch = createEventDispatcher();
dispatch('event', data);    → let { onevent } = $props(); onevent(data);
```

---

## 🎯 三步转换法

### Step 1: Props（最优先）

```svelte
<!-- 找到所有 export let -->
export let a;
export let b = 'default';

<!-- 全部改成 -->
let { a, b = 'default' } = $props();
```

### Step 2: 状态和派生

```svelte
<!-- 找到所有变量和 $: -->
let count = 0;
$: doubled = count * 2;

<!-- 改成 -->
let count = $state(0);
const doubled = $derived(count * 2);
```

### Step 3: 事件和插槽

```svelte
<!-- 找到所有 on: 和 <slot> -->
<button on:click={fn}>
<slot />

<!-- 改成 -->
<script>
  let { children } = $props();
</script>
<button onclick={fn}>
{@render children?.()}
```

---

## 🔥 常见错误 TOP 5

### ❌ 错误 1: const + bind:this

```svelte
const ref = $state();
<div bind:this={ref}>  ← 💥 编译错误
```

**修复：** `let ref = $state();`

### ❌ 错误 2: 混合 export let 和 runes

```svelte
export let old;        ← 💥 在 runes 模式无效
let modern = $state();
```

**修复：** `let { old } = $props();`

### ❌ 错误 3: 副作用用 $derived

```svelte
const x = $derived(() => {
  console.log('side effect'); ← 💥 错误用法
  return value;
});
```

**修复：** `$effect(() => { console.log('side effect'); })`

### ❌ 错误 4: 忘记 $props 中的 children

```svelte
{@render children?.()}  ← 💥 children 未定义
```

**修复：** `let { children } = $props();`

### ❌ 错误 5: 事件处理器用 e.detail

```svelte
<!-- 子组件 -->
onclick(data);

<!-- 父组件 -->
<Child onclick={(e) => handle(e.detail)} />  ← 💥 没有 .detail
```

**修复：** `<Child onclick={(data) => handle(data)} />`

---

## 💊 复制粘贴模板

### 模板 1: 基础组件

```svelte
<script>
  // Props
  let { title, count = 0 } = $props();

  // 状态
  let isOpen = $state(false);

  // 派生
  const doubled = $derived(count * 2);

  // 副作用
  $effect(() => {
    console.log('count changed:', count);
  });

  // 事件处理
  function handleClick() {
    isOpen = !isOpen;
  }
</script>

<button onclick={handleClick}>
  {title}: {doubled}
</button>
```

### 模板 2: 带插槽的组件

```svelte
<script>
  let { title, children, header, footer } = $props();
</script>

<div class="container">
  {@render header?.()}

  <h1>{title}</h1>

  <main>
    {@render children?.()}
  </main>

  {@render footer?.()}
</div>
```

### 模板 3: 带事件的组件

```svelte
<script>
  let { value = $bindable(), onsubmit, oncancel } = $props();

  function handleSubmit() {
    onsubmit?.(value);
  }
</script>

<form onsubmit|preventDefault={handleSubmit}>
  <input bind:value />
  <button type="submit">Submit</button>
  <button type="button" onclick={() => oncancel?.()}>
    Cancel
  </button>
</form>
```

### 模板 4: 列表渲染带插槽

```svelte
<script>
  let { items, item, empty } = $props();
</script>

{#if items.length > 0}
  <ul>
    {#each items as entry, index (entry.id)}
      <li>
        {@render item(entry, index)}
      </li>
    {/each}
  </ul>
{:else}
  {@render empty?.()}
{/if}
```

---

## 🧪 测试检查清单

转换后，逐项检查：

```
组件文件: _______________.svelte

[ ] 无 export let
[ ] 无 $: 语句
[ ] 无 on: 指令
[ ] 无 createEventDispatcher
[ ] 无 <slot> 标签
[ ] 所有 bind:this 用 let
[ ] 编译无错误
[ ] 运行无错误
[ ] 功能正常
[ ] 类型检查通过
```

---

## 🎨 TypeScript 类型

### Props 类型

```typescript
interface Props {
  required: string;
  optional?: number;
  withDefault?: boolean;
}

let { required, optional, withDefault = true } = $props<Props>();
```

### 组件类型

```typescript
import type { Component } from "svelte";

// 定义组件类型
type MyComponent = Component<{
  prop1: string;
  prop2?: number;
}>;

// 使用
let MyComp: MyComponent = $state(ComponentA);
```

### Snippet 类型

```typescript
import type { Snippet } from "svelte";

let { children, item } = $props<{
  children?: Snippet;
  item: Snippet<[{ id: string; name: string }]>;
}>();
```

---

## 🚀 自动化命令

```bash
# 整个项目迁移
npx sv migrate svelte-5

# 干跑（只检查不修改）
npx sv migrate svelte-5 --dry-run

# 查找未迁移的文件
grep -r "export let\|\$:" src/ --include="*.svelte" | \
  grep -v "\$state\|\$props\|\$derived\|\$effect"

# 查找 const + bind:this 问题
grep -r "const.*=.*\$state()" src/ --include="*.svelte" -A 5 | \
  grep "bind:this"
```

---

## 📱 移动端友好版

### Props

```
export let x  →  let { x } = $props()
```

### 状态

```
let x = v  →  let x = $state(v)
```

### 派生

```
$: y = f(x)  →  const y = $derived(f(x))
```

### 副作用

```
$: { fx() }  →  $effect(() => { fx() })
```

### 事件

```
on:click  →  onclick
```

### 插槽

```
<slot />  →  {@render children?.()}
```

---

## 🎯 记忆口诀

```
Props 用 $props 解构拿
状态用 $state 来包它
派生用 $derived 很优雅
副作用 $effect 不落下

事件去掉冒号改驼峰
插槽改成 render 加问号
bind:this 必须用 let 声明
遵循这些规则不会慌
```

---

## ⚡ 极速转换流程

```
1. Ctrl+H (全局替换)
   export let  →  let {   (手动补全 } = $props())

2. 逐个处理 $:
   - 如果赋值 → $derived
   - 如果代码块 → $effect

3. Ctrl+H (全局替换)
   on:click  →  onclick
   on:input  →  oninput
   (逐个事件类型)

4. 手动处理 <slot>
   - 子组件加 $props 解构
   - 子组件改 {@render}
   - 父组件改 {#snippet}

5. 检查 bind:this
   const xxx = $state()  →  let xxx = $state()

6. 编译测试
   bun run dev

7. 修复错误
   根据编译器提示修复

8. 功能测试
   在浏览器测试所有功能
```

---

## 🆘 遇到问题？

### 编译错误

1. 读错误信息（Svelte 5 错误很清晰）
2. 检查是否遗漏转换
3. 查看本文档对应部分

### 运行时错误

1. 检查 children 是否声明
2. 检查事件处理器签名
3. 检查 bind:this 是否用 let

### 类型错误

1. 更新 Component 类型
2. 添加 Snippet 类型
3. 为 $props 添加泛型

---

## 📎 保存这个链接

- **完整指南**: `.cursor/rules/svelte5-runes-migration.mdc`
- **深度解析**: `.cursor/rules/svelte5-migration-explained.md`
- **快速查表**: `.cursor/rules/svelte5-quick-reference.md`

---
