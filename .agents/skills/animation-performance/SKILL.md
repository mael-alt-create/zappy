---
name: animation-performance
description: >-
  Rules for keeping web animations within the 60fps/120fps budget. Prevents layout
  thrashing, optimizes compositing layers, and ensures smooth Core Web Vitals (INP, CLS).
---

# Animation Performance & Compositing Budget

Guidelines for zero-jank, 60fps/120fps web animations compliant with Google's Core Web Vitals (INP, CLS, LCP).

## 1. The Rendering Pipeline

Every frame rendered passes through:
`JavaScript -> Style -> Layout (Reflow) -> Paint -> Composite`

- **Triggers Layout + Paint + Composite**: `width`, `height`, `top`, `left`, `margin`, `padding`, `fontSize`, `display`.
- **Triggers Paint + Composite**: `background-color`, `color`, `box-shadow`, `border-radius`, `visibility`.
- **Triggers Composite Only (GPU Accelerated)**: `transform`, `opacity`, `filter` (with caution).

**Golden Rule**: In animations and transitions, exclusively target composite-only properties (`transform`, `opacity`).

## 2. Preventing Layout Thrashing

Never interleave DOM writes and layout-measuring reads:
- **Bad**:
  ```js
  elements.forEach(el => {
    const h = el.offsetHeight; // Forces synchronous layout read!
    el.style.height = (h + 10) + 'px'; // Triggers layout invalidation!
  });
  ```
- **Good**:
  Batch all reads first, then batch all style mutations in a single `requestAnimationFrame` pass.

## 3. `will-change` Best Practices
- Do **not** apply `will-change: transform` indiscriminately to hundreds of elements (wastes GPU VRAM).
- Apply `will-change` on hover/pointerdown right before an animation begins, and remove it when the animation completes.
- Or apply only to major persistent animated components (e.g., drawer container, command palette overlay).
