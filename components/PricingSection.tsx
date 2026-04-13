import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";
import { pricingTiers } from "@/lib/data/pricing";

export default function PricingSection() {
  return (
    <section className="py-32 px-6 lg:px-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up" className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Invest in Velocity
          </h2>
          <p className="text-zinc-400">
            Clear pricing for teams that need to move fast.
          </p>
        </FadeIn>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.id}>
              <div
                className={`p-12 flex flex-col justify-between h-full rounded-2xl ${
                  tier.highlighted
                    ? "text-zinc-950"
                    : "bg-zinc-900"
                }`}
                style={tier.highlighted ? { backgroundColor: "#FFE224" } : {}}
>
                <div>
                  {tier.badge && (
                    <div className="bg-black/10 inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
                      {tier.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                  <p
                    className={`mb-8 ${
                      tier.highlighted ? "opacity-70" : "text-zinc-500"
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                  <div className="text-5xl font-black mb-10">
                    {tier.price}
                    <span
                      className={`text-lg font-normal ${
                        tier.highlighted ? "opacity-70" : "text-zinc-500"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-12">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-sm">
                          check
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`w-full py-4 font-bold transition-colors rounded-xl ${
                    tier.highlighted
                      ? "bg-zinc-950 text-white hover:bg-zinc-800"
                      : "border border-zinc-700 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {tier.ctaLabel}
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
