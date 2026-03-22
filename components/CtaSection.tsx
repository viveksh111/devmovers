import { FadeIn, ScaleIn } from "./AnimationWrappers";

export default function CtaSection() {
  return (
    <section className="py-24 px-6 lg:px-20">
      <ScaleIn>
        <div className="max-w-7xl mx-auto bg-primary-container p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-black text-on-primary-container leading-tight mb-6">
                Ready to move faster?
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-on-primary-container/80 text-xl font-medium">
                Let&apos;s discuss your roadmap and architectural needs today.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.3}>
            <button className="bg-zinc-950 text-white px-12 py-6 text-xl font-bold hover:bg-zinc-800 active:scale-95 transition-all whitespace-nowrap">
              Schedule a consultation
            </button>
          </FadeIn>
        </div>
      </ScaleIn>
    </section>
  );
}
