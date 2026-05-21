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

### 5. 图片点击放大（Lightbox）
**所有插入 case study 的图片必须支持点击放大。**

每个 case 页面顶部需包含 lightbox overlay 结构：

```html
<div id="lightbox">
  <div class="lb-backdrop"></div>
  <img id="lightbox-img" src="" alt="">
  <button class="lb-close" onclick="closeLightbox()" aria-label="Close">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  </button>
</div>
```

CSS（写在页面 `<style>` 内）：

```css
#lightbox { position:fixed; inset:0; z-index:9000; display:flex; align-items:center; justify-content:center; opacity:0; pointer-events:none; transition:opacity 0.25s ease; }
#lightbox.open { opacity:1; pointer-events:all; }
.lb-backdrop { position:absolute; inset:0; background:rgba(10,10,14,0.88); backdrop-filter:blur(8px); cursor:zoom-out; }
#lightbox-img { position:relative; z-index:1; max-width:min(92vw,1200px); max-height:88vh; object-fit:contain; border-radius:12px; box-shadow:0 32px 80px rgba(0,0,0,0.6); transform:scale(0.92); transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
#lightbox.open #lightbox-img { transform:scale(1); }
.lb-close { position:absolute; top:20px; right:24px; z-index:2; background:rgba(255,255,255,0.1); border:none; border-radius:50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:white; }
```

JS（写在页面底部 `<script>` 内）：

```js
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
document.querySelectorAll('img[src*="images/"]').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
lb.querySelector('.lb-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { lbImg.src = ''; }, 300);
}
```

**规则：**
- 凡是通过 `<img src="images/...">` 插入的图片，JS 会自动绑定 lightbox，无需手动添加 `onclick`
- `cursor: zoom-in` 由 JS 自动注入，不需要在 CSS 里单独写
- 如需 cover 模式（填满屏幕，允许裁剪），给 img 添加 `data-lb="cover"` 属性，并在 JS 里处理对应的 class 切换
