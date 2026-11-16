---
name: animate
description: >-
  Systematic framework for building animations from scratch. Covers decision trees,
  cheapest implementation tool, safe transforms, cubic-bezier curves, spring dynamics,
  and accessibility (prefers-reduced-motion).
---

# Systematic Animation Engineering (`animate`)

Framework for building purposeful, fluid animations in modern web interfaces.

## 1. The 5-Step Animation Decision Tree

1. **Should it animate?**
   - Does this motion communicate spatial continuity, state change, or focus?
   - If purely decorative, will it annoy a user performing this action 20 times a day?
2. **Cheapest tool that works**:
   - `CSS Transitions`: Best for interactive states (hover, focus, active, toggle).
   - `CSS Keyframes`: Best for looped states (pulse, spinner, attention badge).
   - `Web Animations API (WAAPI)`: Best for dynamic runtime coordinates or interruptible animations.
   - `Motion / Spring libraries`: Best for complex gesture drag-to-dismiss or orchestrated choreography.
3. **Properties & Values**:
   - ONLY animate composite-ready properties: `transform` and `opacity`.
   - Never animate `width`, `height`, `top`, `left`, `margin`, or `padding` directly during high-frequency animations.
4. **Curve & Duration**:
   - Entrances: Strong deceleration (`cubic-bezier(0.16, 1, 0.3, 1)`), 180-250ms.
   - Exits: Mild acceleration (`cubic-bezier(0.4, 0, 1, 1)`), 120-180ms.
   - Scale ranges: Enter from `scale(0.95)` to `scale(1)`. Exit from `scale(1)` to `scale(0.98)`.
5. **Accessibility & Safety**:
   - Always provide `@media (prefers-reduced-motion: reduce)` fallbacks.
   - Substitute motion with instant cross-fades or immediate opacity shifts.

## 2. Spring Physics Approximation in CSS

```css
/* Snappy Enter Spring */
--spring-enter: cubic-bezier(0.175, 0.885, 0.32, 1.15);

/* Decelerated Smooth Settling */
--spring-smooth: cubic-bezier(0.16, 1, 0.3, 1);

/* Micro-press */
--spring-press: cubic-bezier(0.25, 1, 0.5, 1);
```

## 3. Interruptibility & State Changes
- When user cancels an action or triggers an opposing state midway through an animation, the motion must transition smoothly from its current rendered state without jumping back to 0.
- Prefer CSS transitions on classes over discrete keyframe resets.
