'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { btnGold, btnOutline } from '@/lib/ui-classes';

export function HeroSection() {
  const { dict } = useI18n();
  const t = dict.home.hero;

  return (
    <section
      id="hero"
      className="relative !block h-screen min-h-[760px] w-full max-w-full overflow-hidden max-[960px]:h-[760px] max-[960px]:min-h-[760px]"
    >
      {/* background image */}
      <div className="absolute inset-0 animate-[heroZoom_14s_ease-out_forwards] bg-cover bg-no-repeat [background-image:url('https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1920&q=85')] [background-position:center_40%] max-[600px]:[background-position:center_top]" />

      {/* overlay */}
      <div className="absolute inset-0 [background:linear-gradient(105deg,rgba(5,4,2,0.9)_0%,rgba(5,4,2,0.55)_52%,rgba(5,4,2,0.15)_100%),linear-gradient(to_top,rgba(5,4,2,0.7)_0%,transparent_50%)]" />

      {/* diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:repeating-linear-gradient(45deg,var(--color-gold)_0,var(--color-gold)_1px,transparent_0,transparent_50%)] [background-size:32px_32px]" />

      {/* left content */}
      <div className="absolute left-[88px] top-[52%] z-[2] w-[min(760px,calc(52vw-110px))] -translate-y-1/2 animate-[fadeUp_1.1s_ease_both] max-[1500px]:left-[56px] max-[1500px]:w-[min(720px,calc(52vw-80px))] max-[1280px]:left-[40px] max-[1280px]:w-[min(620px,calc(52vw-62px))] max-[960px]:left-[24px] max-[960px]:right-[24px] max-[960px]:top-[150px] max-[960px]:w-auto max-[960px]:translate-y-0 max-[600px]:left-[24px] max-[600px]:right-[24px] max-[600px]:top-[145px] max-[420px]:top-[135px]">
        <span className="!mb-8 inline-flex max-w-full animate-[fadeIn_1s_ease_0.3s_both] items-center gap-3 border border-[rgba(201,168,76,0.5)] !px-[18px] !py-[8px] text-[9px] uppercase tracking-[6px] text-gold max-[600px]:mb-5 max-[600px]:px-[12px] max-[600px]:py-[6px] max-[600px]:text-[7px] max-[600px]:tracking-[3px]">
          <span className="size-[5px] animate-[pulseDot_2s_infinite] rounded-full bg-gold" />
          {t.badge}
        </span>

        <h1 className="mb-4 font-display font-bold text-[clamp(52px,5.4vw,96px)] leading-[0.92] text-white max-[1280px]:text-[64px] max-[1100px]:text-[56px] max-[600px]:text-[35px] max-[420px]:text-[32px]">
          {t.title1}
          <br />
          <span className="text-gold">{t.titleHighlight}</span>
          <br />
          {t.title2}
        </h1>

        <p className="!mb-8 font-serif text-[clamp(20px,2.5vw,30px)] leading-[1.4] text-text-light italic max-[600px]:mb-4 max-[600px]:text-[18px]">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap gap-[18px] max-[600px]:gap-3">
          <LocalizedLink href="/voyageurs" className={btnGold}>
            {t.ctaBook}
          </LocalizedLink>

          <LocalizedLink href="/proprietaires" className={btnOutline}>
            {t.ctaOwners}
          </LocalizedLink>
        </div>
      </div>

      {/* right quote card */}
      <div className="absolute left-[52%] right-[88px] top-1/2 z-[2] -translate-y-1/2 max-[1500px]:right-[56px] max-[1280px]:left-[54%]! max-[1280px]:right-[40px] max-[960px]:hidden">
        <div className="w-full !p-5 animate-[fadeIn_1.4s_ease_0.6s_both] border border-[rgba(201,168,76,0.3)] bg-white/[0.04] p-11 backdrop-blur-[14px] h-48! max-[1280px]:p-8">
            <p className="mb-[30px] max-w-[430px] whitespace-pre-line font-serif text-[30px] leading-[1.55] text-white italic max-[1500px]:text-[28px] max-[1280px]:max-w-[380px] max-[1280px]:text-[24px]">
      {t.cardQuote}
    </p>

          <div className="!my-[6px] h-px w-10 bg-gold" />

          <span className="text-[9px] uppercase tracking-[5px] text-gold">
            {t.cardLabel}
          </span>
        </div>
      </div>

      {/* stats */}
      <div className="absolute inset-x-0 bottom-0 z-[3] flex border-t border-[rgba(201,168,76,0.12)] bg-black/55 backdrop-blur-[12px] max-[960px]:flex-wrap">
        {t.stats.map((s) => (
          <div
            key={s.l}
            className="flex-1 border-r border-[rgba(201,168,76,0.1)] !px-6 !py-5 text-center last:border-r-0 max-[960px]:w-1/2 max-[960px]:flex-none max-[600px]:px-3 max-[600px]:py-4"
          >
            <span className="mb-[5px] block font-display text-[28px] text-gold max-[600px]:text-[20px]">
              {s.n}
            </span>

            <span className="text-[9px] uppercase tracking-[3px] text-text-muted max-[600px]:text-[7px] max-[600px]:tracking-[2px]">
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}