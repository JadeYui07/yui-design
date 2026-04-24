# Style Guide — CSS Rules

## 写新样式前必读

### 1. 变量优先，禁止 hardcode
颜色、字体、spacing 全部用 CSS 变量，不允许直接写值。

```css
// ✅
color: var(--text);
background: var(--bg-subtle);
padding: var(--space-4);
font-family: var(--font-display);

// ❌
color: #1A1E24;
padding: 32px;
font-family: 'Fraunces', serif;
```

### 2. 可用的 token 列表

| 类别 | Token |
|------|-------|
| 背景 | `--bg` / `--bg-subtle` / `--bg-muted` / `--bg-wash` |
| 文字 | `--text` / `--text-secondary` / `--text-tertiary` / `--text-inverse` |
| Accent | `--rust` / `--rust-300` / `--rust-700`（蓝色系） |
| Border | `--border` / `--border-subtle` |
| 字体 | `--font-display`（Fraunces）/ `--font-body`（Satoshi） |
| Spacing | `--space-1`(8px) 到 `--space-16`(128px) |
| 圆角 | `--radius` / `--radius-sm` / `--radius-full` |
| 阴影 | `--shadow-sm` / `--shadow-md` / `--shadow-lg` |

### 3. 新增 token 的流程

需要新 token 时，不要直接写 hardcode，先在 style.css 的 `:root` 里定义：

```css
:root {
  --new-token: value;
}
```

然后再在组件里引用 `var(--new-token)`。

### 4. Case study 页面
只在页面 `<style>` 里写该 case 专属的颜色/渐变，其余继承 style.css。
专属色用 `--case-accent` / `--case-gradient` 命名。
