import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";

type Project = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Nexus Platform",
    description:
      "Next-gen enterprise resource planning for modern manufacturing.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCA9K85-0irjfUZkLyI-JOxOUfPY0tUTr96ANmTmm4mj6AhoLVNCF7GnQ0eAwUPPeQWBTGxJY0wCWisKvkPqN-YoFx4hSOQtNbQv_XZIt-95NTWYaiw2MwTdrAbpJxxo1Lxr0R24-6qUVueNTR9CJkxo1a-hiYhQBYJGyAWEdk5_uQVcBmanPnWtdiH8BcJru8RdvsBeP20vAJ3PBdYF7_uUgoOm2P5K5kajAaP_zwiaOjDyaBXbhmjM18CV-uXXLzd2XaXl9ahMln7",
    imageAlt: "Abstract 3D digital landscape with glowing nodes and connections",
  },
  {
    number: "02",
    title: "Aura Banking",
    description: "Automated asset management with AI-driven risk assessment.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqN7XSamHDGrXu9-HjtYgrEJ3cM_icHaf0Syr_IFesDEIYCR9k2J-XOoEOYG4Z5Sym_c_BH5QW8RPYZ7xamIuLbc4-ofcySD03BT29BX08SWGKyc34tlvc8FmivYBntCgJ9gugJ05jmZwCqWqhy5x0fcJWOHxHWFLzNmuLqyLktQhezU0_0wK68CMSXJ-PLlM2OcukFSPuz5iwC3yYbxFiER-OHxuJ84gctWOLV-YMYmQNXAd5jvvMNi6GcVbNtE9dg446mllsAQyc",
    imageAlt: "Futuristic glowing purple and gold digital data visualization",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 lg:px-20 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn direction="left">
              <span className="text-primary-container text-sm font-bold tracking-[0.2em] uppercase">
                Portfolio
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-black mt-4">
                Selected Work
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-zinc-500 max-w-sm">
              Pushing the boundaries of digital product design with every
              deployment.
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 gap-12" staggerDelay={0.2}>
          {projects.map((project) => (
            <StaggerItem key={project.number}>
              <div className="group relative overflow-hidden bg-surface-container-low">
                <div className="relative aspect-16/8 overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
                <div className="p-10 flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-zinc-400">{project.description}</p>
                  </div>
                  <div className="text-primary-container font-black text-6xl opacity-10">
                    {project.number}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
