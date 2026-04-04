import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-20 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Main content */}
          <div>
            <FadeIn direction="left">
              <span className="text-primary-container text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Who We Are
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                About DevMovers
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                DevMovers is a team of passionate developers, engineers, and
                problem-solvers committed to building high-quality digital
                solutions.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-zinc-400 leading-relaxed mb-6">
                We started as a freelancing team with a clear vision — to help
                startups and businesses launch their ideas quickly, securely,
                and efficiently. Our team combines expertise in full-stack
                development, DevOps, and security to deliver reliable and
                scalable solutions.
              </p>
            </FadeIn>
          </div>

          {/* Right: Mission & Vision */}
          <div>
            <StaggerChildren className="space-y-0" staggerDelay={0.15}>
              <StaggerItem>
                <div className="p-10 border border-outline-variant/10 bg-surface-container-low mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary-container text-2xl">
                      flag
                    </span>
                    <h3 className="font-black uppercase tracking-widest text-sm"
                      style={{ color: "#FFE224" }}
                    >
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    To empower businesses by delivering secure, scalable, and
                    high-performance digital products.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-10 border border-outline-variant/10 bg-surface-container">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary-container text-2xl">
                      visibility
                    </span>
                    <h3
                      className="font-black uppercase tracking-widest text-sm"
                      style={{ color: "#FFE224" }}
                    >
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    To become a trusted global technology partner for startups
                    and enterprises.
                  </p>
                </div>
              </StaggerItem>

              {/* Stats row */}
              <StaggerItem>
                <div className="grid grid-cols-3 gap-0 mt-0">
                  {[
                    { value: "30+", label: "Projects Delivered" },
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "5+", label: "Years Experience" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-6 border border-outline-variant/10 bg-surface-container-lowest text-center"
                    >
                      <div
                        className="text-3xl font-black mb-1"
                        style={{ color: "#FFE224" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
