'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { btnGold, btnOutline } from '@/lib/ui-classes';

export function HeroSection() {
  const { dict } = useI18n();
  const t = dict.home.hero;

  return (
    <section id="hero" className="relative flex h-screen items-center overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 animate-[heroZoom_14s_ease-out_forwards] bg-cover bg-no-repeat [background-image:url('https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1920&q=85')] [background-position:center_40%]" />
      {/* overlay */}
      <div className="absolute inset-0 [background:linear-gradient(105deg,rgba(5,4,2,0.9)_0%,rgba(5,4,2,0.55)_52%,rgba(5,4,2,0.15)_100%),linear-gradient(to_top,rgba(5,4,2,0.7)_0%,transparent_50%)]" />
      {/* diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:repeating-linear-gradient(45deg,var(--color-gold)_0,var(--color-gold)_1px,transparent_0,transparent_50%)] [background-size:32px_32px]" />

      <div className="relative z-[2] max-w-[780px] animate-[fadeUp_1.1s_ease_both] px-20 pb-30 max-[1100px]:px-10 max-[1100px]:pb-[110px] max-[960px]:max-w-full max-[960px]:px-[30px] max-[960px]:pt-[60px] max-[960px]:pb-30">
        <span className="mb-9 inline-flex animate-[fadeIn_1s_ease_0.3s_both] items-center gap-3 border border-[rgba(201,168,76,0.5)] px-[22px] py-[9px] text-[9px] tracking-[6px] text-gold uppercase">
          <span className="size-[5px] animate-[pulseDot_2s_infinite] rounded-full bg-gold" />
          {t.badge}
        </span>
        <h1 className="mb-4 font-display text-[clamp(48px,7vw,96px)] leading-[0.92] text-white max-[600px]:text-[44px]">
          {t.title1}
          <br />
          <span className="text-gold">{t.titleHighlight}</span>
          <br />
          {t.title2}
        </h1>
        <p className="mb-12 font-serif text-[clamp(20px,2.5vw,30px)] leading-[1.4] text-text-light italic">
          {t.subtitle}
        </p>
        <div className="flex flex-wrap gap-[18px]">
          <LocalizedLink href="/voyageurs" className={btnGold}>
            {t.ctaBook}
          </LocalizedLink>
          <LocalizedLink href="/proprietaires" className={btnOutline}>
            {t.ctaOwners}
          </LocalizedLink>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 z-[2] flex w-[42%] items-center justify-center max-[960px]:hidden">
        <div className="m-[50px] animate-[fadeIn_1.4s_ease_0.6s_both] border border-[rgba(201,168,76,0.3)] bg-white/[0.04] p-11 backdrop-blur-[14px]">
          <p className="mb-[22px] font-serif text-[28px] leading-[1.4] text-white italic">{t.cardQuote}</p>
          <div className="mb-[18px] h-px w-10 bg-gold" />
          <span className="text-[9px] tracking-[5px] text-gold uppercase">{t.cardLabel}</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex border-t border-[rgba(201,168,76,0.12)] bg-black/55 backdrop-blur-[12px] max-[960px]:flex-wrap">
        {t.stats.map((s) => (
          <div
            key={s.l}
            className="flex-1 border-r border-[rgba(201,168,76,0.1)] px-6 py-7 text-center last:border-r-0 max-[960px]:w-1/2"
          >
            <span className="mb-[5px] block font-display text-[28px] text-gold">{s.n}</span>
            <span className="text-[9px] tracking-[3px] text-text-muted uppercase">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
