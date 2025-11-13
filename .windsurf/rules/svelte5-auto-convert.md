# Svelte 5 Runes 自动转换规则 - Windsurf AI

> 这些规则帮助 Windsurf AI 自动识别并转换 Svelte 遗留语法到 Runes 模式

## 核心转换原则

当编辑任何 `.svelte` 文件时，**自动检测并应用**以下转换规则：

---

## 🔍 检测触发器

遇到以下任一情况时，**立即建议完整迁移到 Runes 模式**:

1. ✅ 文件中存在 `export let`
2. ✅ 文件中存在 `$:` 响应式语句  
3. ✅ 文件中存在 `on:eventname` 指令
4. ✅ 文件中存在 `createEventDispatcher`
5. ✅ 文件中存在 `<slot>` 标签
6. ✅ 文件中没有任何 runes (`$state`, `$props`, `$derived`, `$effect`)

---

## ⚡ 自动转换规则

### 1️⃣ Props 声明

```svelte
<!-- 检测到此模式 → 自动转换 -->
export let propName;
export let propName = defaultValue;

<!-- 转换为 -->
let { propName, propName = defaultValue } = $props();
```

**TypeScript 版本**:
```svelte
let { propName } = $props<{ propName: string }>();
```

### 2️⃣ 响应式变量

```svelte
<!-- 检测：let 声明在模板中使用 → 转换 -->
let count = 0;
let items = [];
let user = { name: 'John' };

<!-- 转换为 -->
let count = $state(0);
let items = $state([]);
let user = $state({ name: 'John' });
```

### 3️⃣ 派生值

```svelte
<!-- 检测：$: variable = expression → 转换 -->
$: doubled = count * 2;
$: fullName = firstName + ' ' + lastName;

<!-- 转换为 -->
const doubled = $derived(count * 2);
const fullName = $derived(firstName + ' ' + lastName);
```

### 4️⃣ 副作用

```svelte
<!-- 检测：$: { ... } 或 $: 语句 → 转换 -->
$: {
  console.log('count:', count);
}
$: document.title = title;

<!-- 转换为 -->
$effect(() => {
  console.log('count:', count);
});
$effect(() => {
  document.title = title;
});
```

### 5️⃣ 事件处理器

```svelte
<!-- 检测：on:eventname → 转换 -->
<button on:click={handler}>Click</button>
<input on:input={handleInput} on:focus={onFocus} />

<!-- 转换为 -->
<button onclick={handler}>Click</button>
<input oninput={handleInput} onfocus={onFocus} />
```

**事件修饰符处理**:
```svelte
<!-- 检测：on:event|modifier → 手动展开 -->
<button on:click|preventDefault={handler}>

<!-- 转换为 -->
<button onclick={(e) => { e.preventDefault(); handler(e); }}>
```

### 6️⃣ 组件事件

```svelte
<!-- 检测：createEventDispatcher → 转换为回调 props -->

<!-- 子组件 BEFORE -->
<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
</script>
<button on:click={() => dispatch('click', data)}>

<!-- 子组件 AFTER -->
<script>
let { onclick } = $props();
</script>
<button onclick={() => onclick(data)}>

<!-- 父组件 BEFORE -->
<Child on:click={(e) => handle(e.detail)} />

<!-- 父组件 AFTER -->
<Child onclick={(data) => handle(data)} />
```

### 7️⃣ Slots → Snippets

**默认 slot**:
```svelte
<!-- 子组件 BEFORE -->
<div><slot /></div>

<!-- 子组件 AFTER -->
<script>
let { children } = $props();
</script>
<div>{@render children?.()}</div>
```

**命名 slots**:
```svelte
<!-- 子组件 BEFORE -->
<slot name="header" />

<!-- 子组件 AFTER -->
<script>
let { header } = $props();
</script>
{@render header()}

<!-- 父组件 BEFORE -->
<div slot="header">Content</div>

<!-- 父组件 AFTER -->
{#snippet header()}
  <div>Content</div>
{/snippet}
```

**带数据的 slots**:
```svelte
<!-- 子组件 BEFORE -->
<slot name="item" item={item} />

<!-- 子组件 AFTER -->
<script>
let { item } = $props();
</script>
{@render item(item)}

<!-- 父组件 BEFORE -->
<Component let:item>
  <span>{item}</span>
</Component>

<!-- 父组件 AFTER -->
<Component>
  {#snippet item(data)}
    <span>{data}</span>
  {/snippet}
</Component>
```

### 8️⃣ bind:this 修复

```svelte
<!-- 检测：const + bind:this → 自动修复 -->
const ref = $state();
<div bind:this={ref}>

<!-- 修复为 -->
let ref = $state();
<div bind:this={ref}>
```

### 9️⃣ 生命周期

```svelte
<!-- beforeUpdate → $effect.pre -->
import { beforeUpdate } from 'svelte';
beforeUpdate(() => { /* ... */ });
<!-- 转换为 -->
$effect.pre(() => { /* ... */ });

<!-- afterUpdate → $effect -->
import { afterUpdate } from 'svelte';
afterUpdate(() => { /* ... */ });
<!-- 转换为 -->
$effect(() => { /* ... */ });

<!-- onDestroy → $effect cleanup -->
import { onDestroy } from 'svelte';
const timer = setInterval(...);
onDestroy(() => clearInterval(timer));
<!-- 转换为 -->
$effect(() => {
  const timer = setInterval(...);
  return () => clearInterval(timer);
});
```

### 🔟 导入数据包装

```svelte
<!-- 检测：导入的数据直接在模板使用 → 包装 -->
import { data } from './constants';
<h1>{data.title}</h1>

<!-- 转换为 -->
import { data as importedData } from './constants';
const data = $state(importedData);
<h1>{data.title}</h1>
```

---

## 🚨 关键错误避免

### ❌ 常见错误 1: const + bind:this
```svelte
<!-- 错误 -->
const ref = $state();
<div bind:this={ref}>

<!-- 正确 -->
let ref = $state();
<div bind:this={ref}>
```

### ❌ 常见错误 2: 混用语法
```svelte
<!-- 错误：不要在同一组件混用 -->
export let count;
let name = $state('');

<!-- 正确：全部使用 runes -->
let { count } = $props();
let name = $state('');
```

### ❌ 常见错误 3: 忘记可选链
```svelte
<!-- 错误 -->
{@render children()}

<!-- 正确：children 可能未传递 -->
{@render children?.()}
```

### ❌ 常见错误 4: 副作用用错 rune
```svelte
<!-- 错误：副作用不应该用 $derived -->
const log = $derived(() => {
  console.log(count); // 副作用！
  return count;
});

<!-- 正确：使用 $effect -->
$effect(() => {
  console.log(count);
});
```

---

## 📋 完整转换检查清单

在完成转换后，验证:

- [ ] ✅ 无 `export let` 声明
- [ ] ✅ 无 `$:` 语句
- [ ] ✅ 无 `on:` 事件指令
- [ ] ✅ 无 `createEventDispatcher`
- [ ] ✅ 无 `<slot>` 标签（除非在 `<template shadowrootmode>` 中）
- [ ] ✅ 所有 `bind:this` 使用 `let` 声明
- [ ] ✅ 所有响应式数据使用 `$state`
- [ ] ✅ 所有计算值使用 `$derived`
- [ ] ✅ 所有副作用使用 `$effect`
- [ ] ✅ Props 通过 `$props()` 解构
- [ ] ✅ 可绑定 props 使用 `$bindable()`

---

## 🎯 转换策略

### 优先级顺序:

1. **最高优先**: 有 `export let` 或 `$:` 的组件
2. **高优先**: 使用 slots 或事件派发的组件  
3. **中优先**: 有生命周期钩子的组件
4. **低优先**: 纯静态组件（为了一致性）

### 批量转换建议:

```bash
# 使用官方迁移脚本
npx sv migrate svelte-5

# 查找未迁移的组件
grep -r "export let\|\$:" src/ --include="*.svelte"
```

---

## 💡 AI 辅助提示

当用户:
- 创建新的 `.svelte` 组件 → **始终使用 Runes 语法**
- 编辑现有组件 → **检测并建议迁移**
- 粘贴遗留代码 → **自动转换为 Runes**
- 询问 Svelte 语法 → **优先展示 Runes 语法**

---

## 📚 完整示例对比

<details>
<summary>点击查看完整迁移示例</summary>

**BEFORE (Svelte 4)**:
```svelte
<script>
  import { createEventDispatcher, onMount, afterUpdate } from 'svelte';
  
  export let title = 'Hello';
  export let items = [];
  
  const dispatch = createEventDispatcher();
  let count = 0;
  let doubled;
  let container;
  
  $: doubled = count * 2;
  $: {
    if (count > 5) {
      console.log('High count!');
    }
  }
  
  onMount(() => {
    console.log('Mounted');
  });
  
  afterUpdate(() => {
    console.log('Updated');
  });
  
  function handleClick() {
    count++;
    dispatch('countChanged', count);
  }
</script>

<div bind:this={container}>
  <h1>{title}</h1>
  <p>Count: {count}, Doubled: {doubled}</p>
  
  <button on:click={handleClick}>
    Increment
  </button>
  
  <slot name="header" />
  
  {#each items as item}
    <slot name="item" {item} />
  {/each}
</div>
```

**AFTER (Svelte 5)**:
```svelte
<script>
  let { 
    title = 'Hello', 
    items = [],
    oncountChanged,
    header,
    item
  } = $props();
  
  let count = $state(0);
  let container = $state();
  
  const doubled = $derived(count * 2);
  
  $effect(() => {
    if (count > 5) {
      console.log('High count!');
    }
  });
  
  $effect(() => {
    console.log('Mounted');
  });
  
  $effect(() => {
    console.log('Updated');
  });
  
  function handleClick() {
    count++;
    oncountChanged(count);
  }
</script>

<div bind:this={container}>
  <h1>{title}</h1>
  <p>Count: {count}, Doubled: {doubled}</p>
  
  <button onclick={handleClick}>
    Increment
  </button>
  
  {@render header()}
  
  {#each items as entry}
    {@render item(entry)}
  {/each}
</div>
```

</details>

---

## 🔗 相关资源

- [Svelte 5 官方迁移指南](https://svelte.dev/docs/svelte/v5-migration-guide)
- [Svelte 5 Runes 文档](https://svelte.dev/docs/svelte/runes)
- [迁移脚本](https://github.com/sveltejs/svelte/tree/main/packages/migrate)

---

## ⚙️ 自动化配置

在 Windsurf 中，这些规则会自动应用。手动运行:

```bash
# 迁移整个项目
npx sv migrate svelte-5

# 只检查不修改
npx sv migrate svelte-5 --dry-run
```

---

**记住**: 一次性完整转换整个组件，不要留下混合语法！

