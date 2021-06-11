import { style, animate, animation, keyframes } from '@angular/animations';

// =========================
// Scale
// =========================
export const scaleIn = animation([
  style({ opacity: 0, transform: 'scale(0.5)' }), // start state
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 1, transform: 'scale(1)' })
  ),
]);

export const scaleOut = animation([
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 0, transform: 'scale(0.5)' })
  ),
]);

export const cards = animation([
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 0, transform: 'scale(0.5)' })
  ),
]);

export var slideAnimation = animation([
  style({
    opacity: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    transform: 'translate3d(-100%,0,0)',
  }),
  animate(
    '400ms ease-in-out',
    style({ opacity: 1, transform: 'translate3d(0%,0,0)' })
  ),
]);
