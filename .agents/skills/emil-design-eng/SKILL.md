---
name: emil-design-eng
description: >-
  Core design engineering and UI craft guidelines by Emil Kowalski. Use when designing
  and building user interfaces that require high taste, refined micro-interactions, subtle
  visual hierarchy, tactile feel, and production-grade polish.
---

# Emil Kowalski Design Engineering & UI Craft

Guidelines derived from Emil Kowalski's design engineering philosophy (Linear, Vercel, Sonner, Vaul).

## 1. Core Philosophy: The Invisible Details

High-taste interfaces feel effortless because every micro-detail has been considered:
- **Hierarchy over noise**: Don't add decorative elements if layout, typography, and contrast can solve the problem.
- **Tactile feedback**: Interactive elements should feel alive and physically responsive to touch, hover, and press states.
- **Fast by default**: UI transitions should never make users wait. Keep interaction-to-feedback under 100ms.

## 2. Interaction & Animation Rules

### When to Animate
- **High-frequency actions (e.g. typing, item navigation)**: Zero or minimal animation (0-100ms).
- **Context changes (modals, drawers, tooltips, accordion expansion)**: Smooth entrance (150-250ms).
- **Status feedback (success checks, error shakes)**: Snappy and purposeful.

### Easing & Durations
- Never use default `linear` or standard `ease-in` for UI entries.
- Use smooth decelerating curves for entries:
  - Snappy UI: `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.23, 1, 0.32, 1)`.
  - Spring-like transitions: overshoot damped to settle quickly.
- Durations:
  - Micro-interactions (hover, press, toggle): `100ms - 180ms`.
  - Sheet / Drawer / Dialog transitions: `200ms - 280ms`.
  - Avoid durations over `350ms` for standard user actions.

### Component Polish
- **Buttons**:
  - Immediate `:active` state with subtle scale down (`transform: scale(0.98)` or `scale(0.97)`).
  - Clear focus rings with double offset (`box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--primary)`).
- **Origin-aware Popovers & Menus**:
  - Animate from the trigger point using `transform-origin`.
  - Never scale from `0` (looks cheap). Instead, scale from `0.95` with opacity fade (`from { opacity: 0; transform: scale(0.95); }`).
- **Tooltips**:
  - First hover: slight delay (300ms) to avoid clutter.
  - Subsequent hovers while cursor moves across siblings: instantaneous (0ms delay).
- **Tabs & Segmented Controls**:
  - Use a sliding background pill with spring physics rather than independent static tab highlights.

## 3. Visual Depth & Modern Materials

- **Subtle borders**: Use semi-transparent borders (`rgba(255, 255, 255, 0.1)` on dark, `rgba(0, 0, 0, 0.08)` on light) instead of heavy solid borders.
- **Layered shadows**: Combine a small crisp shadow for edge definition with a larger diffused shadow for ambient depth.
- **Backdrop blur**: Use `backdrop-filter: blur(12px) saturate(180%)` for sticky navigation, floating bars, and modals.
- **Content clipping**: Always respect `border-radius` with `overflow: hidden` when animating nested content.
