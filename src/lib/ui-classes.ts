/**
 * Shared Tailwind utility strings for repeated patterns (buttons, etc.) so the
 * design stays DRY while every style is expressed as utilities (no bespoke CSS
 * classes). Apply via `className={btnGold}`.
 */

export const btnGold =
  'inline-block bg-gold text-black px-10 py-[15px] text-[10.5px] tracking-[3px] uppercase font-bold cursor-pointer border-0 transition-[background,transform,box-shadow] duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(201,168,76,0.28)]';

export const btnOutline =
  'inline-block border border-gold text-gold px-10 py-[15px] text-[10.5px] tracking-[3px] uppercase cursor-pointer bg-transparent transition-[background,transform] duration-300 hover:bg-[rgba(201,168,76,0.08)] hover:-translate-y-px';
