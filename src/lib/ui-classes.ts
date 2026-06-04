/**
 * Shared Tailwind utility strings for repeated patterns (buttons, etc.) so the
 * design stays DRY while every style is expressed as utilities (no bespoke CSS
 * classes). Apply via `className={btnGold}`.
 */

export const btnGold =
  'inline-block bg-gold text-black px-10 py-[15px] text-[10.5px] tracking-[3px] uppercase font-bold cursor-pointer border-0 transition-[background,transform,box-shadow] duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(201,168,76,0.28)]';

export const btnOutline =
  'inline-block border border-gold text-gold px-10 py-[15px] text-[10.5px] tracking-[3px] uppercase cursor-pointer bg-transparent transition-[background,transform] duration-300 hover:bg-[rgba(201,168,76,0.08)] hover:-translate-y-px';

/* Section chrome (repeated across every marketing section). */
export const sec = 'px-16 py-[110px]';

export const eyebrow =
  "mb-[18px] flex items-center justify-center gap-5 text-[9.5px] tracking-[6px] text-gold uppercase before:h-px before:flex-[0_0_50px] before:bg-gold before:content-[''] after:h-px after:flex-[0_0_50px] after:bg-gold after:content-['']";

export const eyebrowLeft =
  "mb-[18px] flex items-center justify-start gap-5 text-[9.5px] tracking-[6px] text-gold uppercase after:h-px after:flex-[0_0_50px] after:bg-gold after:content-['']";

export const secH =
  'mb-[14px] text-center font-display text-[clamp(28px,4vw,52px)] leading-[1.13] text-white';

export const secSub =
  'mx-auto mb-[72px] max-w-[640px] text-center font-serif text-[21px] leading-[1.55] text-text-light italic';
