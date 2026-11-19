---
name: premium-frontend-ui
description: Guidance for building and refining distinctive, responsive, accessible web interfaces while respecting the project's existing design and scope.
---

# Premium Frontend UI

Use this skill when creating or polishing a website interface, page layout, visual component, or interaction.

## Working approach

1. Inspect the relevant pages, shared components, styles, and project conventions before editing.
2. Identify the specific user experience problem and choose a visual direction that fits the product and its existing identity.
3. Make the smallest coherent change that solves the problem. Keep existing behavior unless a change is requested.
4. Validate the actual page at representative mobile and desktop sizes, then run the most relevant project checks.

## Interface principles

- Prefer clear hierarchy, deliberate spacing, readable type, and consistent alignment over ornamental effects.
- Reuse existing colors, typography, tokens, components, and CSS utilities. Add new patterns only when they have a clear purpose.
- Design for narrow screens first; let content and layout adapt without horizontal scrolling or arbitrary fixed widths.
- Give images appropriate aspect ratios, intrinsic space, useful alternative text, and responsive source sizes. Crop only when the image's purpose and subject remain clear.
- Use borders, backgrounds, corner radii, and shadows consistently to group related content without obscuring it.
- Keep interfaces usable with keyboard, touch, zoom, contrast preferences, and assistive technology.

## Motion and interaction

- Add animation only when it clarifies state, hierarchy, or continuity.
- Honor reduced-motion preferences and preserve access to essential information if animation or scripting is unavailable.
- Avoid layout-shifting effects and unnecessary scroll control. Keep interactive feedback available to keyboard and touch users.
- Do not add a dependency for an effect that can be implemented simply with existing project tools.

## Scope and quality

- Do not turn a focused polish request into a broad redesign.
- Avoid speculative content, decorative clutter, and forced interface patterns such as preloaders when they do not solve a demonstrated problem.
- Check for unintended clipping, overflow, awkward wrapping, poor image crops, and inconsistent spacing at multiple viewport widths.
- Report the files changed and the checks performed; state clearly if any validation could not be completed.
