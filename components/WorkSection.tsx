import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";

type Project = {
  number: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description:
      "A fully-featured e-commerce solution built for high-traffic sales and seamless admin operations.",
    features: [
      "Secure payment gateway integration",
      "Admin dashboard with analytics",
      "Fast and responsive UI",
    ],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCA9K85-0irjfUZkLyI-JOxOUfPY0tUTr96ANmTmm4mj6AhoLVNCF7GnQ0eAwUPPeQWBTGxJY0wCWisKvkPqN-YoFx4hSOQtNbQv_XZIt-95NTWYaiw2MwTdrAbpJxxo1Lxr0R24-6qUVueNTR9CJkxo1a-hiYhQBYJGyAWEdk5_uQVcBmanPnWtdiH8BcJru8RdvsBeP20vAJ3PBdYF7_uUgoOm2P5K5kajAaP_zwiaOjDyaBXbhmjM18CV-uXXLzd2XaXl9ahMln7",
    imageAlt: "E-commerce platform with product listings and clean dashboard",
  },
  {
    number: "02",
    title: "SaaS Dashboard",
    description:
      "A scalable SaaS platform with real-time analytics, user management, and enterprise-grade architecture.",
    features: [
      "User authentication system",
      "Real-time analytics & reporting",
      "Scalable backend architecture",
    ],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqN7XSamHDGrXu9-HjtYgrEJ3cM_icHaf0Syr_IFesDEIYCR9k2J-XOoEOYG4Z5Sym_c_BH5QW8RPYZ7xamIuLbc4-ofcySD03BT29BX08SWGKyc34tlvc8FmivYBntCgJ9gugJ05jmZwCqWqhy5x0fcJWOHxHWFLzNmuLqyLktQhezU0_0wK68CMSXJ-PLlM2OcukFSPuz5iwC3yYbxFiER-OHxuJ84gctWOLV-YMYmQNXAd5jvvMNi6GcVbNtE9dg446mllsAQyc",
    imageAlt: "SaaS analytics dashboard with charts and data visualizations",
  },
  {
    number: "03",
    title: "Secure Authentication System",
    description:
      "An advanced login and identity system engineered from the ground up with security as the core priority.",
    features: [
      "Advanced multi-factor login security",
      "End-to-end data encryption",
      "Protection against common vulnerabilities",
    ],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACS1PLPzKrG9yKRny0GKRkIAZXVTyw_0zSyxH2Xd4bHRmxf9MfNWU60k2Um4CKanTPn89r7-t2BwjJsLZXQ6Xhtdfza0bSpJiNO2k96BkQRD2pP-IY8-n5jS0V-ki3X6TwskNvqNMBPNlL2w--ek66mcowMJPN4sG_3GHDAeODhswJ5vFB7QVPN2y80dCD90DJ2Cwk9SYwbCW5st-4YcEgmkIw-Mn-fgim3cJVG8d7Asg0NiiILt70snr6ngYdsUP_v9PmGcdMXMr6",
    imageAlt: "Secure login interface with security shield and encryption indicators",
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
                Our Work &amp; Projects
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-zinc-500 max-w-sm">
              We take pride in delivering solutions that solve real-world
              problems and create value for our clients.
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
                <div className="p-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-zinc-400 mb-5">{project.description}</p>
                    <ul className="space-y-1.5">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-zinc-500"
                        >
                          <span className="material-symbols-outlined text-primary-container text-base">
                            check_circle
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-primary-container font-black text-6xl opacity-10 shrink-0">
                    {project.number}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-center text-zinc-500 mt-16 text-lg">
            We are continuously building innovative solutions —{" "}
            <span style={{ color: "#FFE224" }} className="font-bold">
              your project could be next.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
