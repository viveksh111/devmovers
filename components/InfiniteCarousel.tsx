"use client";

import Image from "next/image";

type CarouselCard = {
  id: string;
  title: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
};

const cards: CarouselCard[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    tag: "Web App · Payments",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCA9K85-0irjfUZkLyI-JOxOUfPY0tUTr96ANmTmm4mj6AhoLVNCF7GnQ0eAwUPPeQWBTGxJY0wCWisKvkPqN-YoFx4hSOQtNbQv_XZIt-95NTWYaiw2MwTdrAbpJxxo1Lxr0R24-6qUVueNTR9CJkxo1a-hiYhQBYJGyAWEdk5_uQVcBmanPnWtdiH8BcJru8RdvsBeP20vAJ3PBdYF7_uUgoOm2P5K5kajAaP_zwiaOjDyaBXbhmjM18CV-uXXLzd2XaXl9ahMln7",
    imageAlt: "E-commerce platform dashboard",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    tag: "Analytics · SaaS",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqN7XSamHDGrXu9-HjtYgrEJ3cM_icHaf0Syr_IFesDEIYCR9k2J-XOoEOYG4Z5Sym_c_BH5QW8RPYZ7xamIuLbc4-ofcySD03BT29BX08SWGKyc34tlvc8FmivYBntCgJ9gugJ05jmZwCqWqhy5x0fcJWOHxHWFLzNmuLqyLktQhezU0_0wK68CMSXJ-PLlM2OcukFSPuz5iwC3yYbxFiER-OHxuJ84gctWOLV-YMYmQNXAd5jvvMNi6GcVbNtE9dg446mllsAQyc",
    imageAlt: "SaaS analytics dashboard interface",
  },
  {
    id: "auth-system",
    title: "Secure Auth System",
    tag: "Cybersecurity · Auth",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACS1PLPzKrG9yKRny0GKRkIAZXVTyw_0zSyxH2Xd4bHRmxf9MfNWU60k2Um4CKanTPn89r7-t2BwjJsLZXQ6Xhtdfza0bSpJiNO2k96BkQRD2pP-IY8-n5jS0V-ki3X6TwskNvqNMBPNlL2w--ek66mcowMJPN4sG_3GHDAeODhswJ5vFB7QVPN2y80dCD90DJ2Cwk9SYwbCW5st-4YcEgmkIw-Mn-fgim3cJVG8d7Asg0NiiILt70snr6ngYdsUP_v9PmGcdMXMr6",
    imageAlt: "Secure authentication system login screen",
  },
];

// Duplicate for seamless infinite loop
const allCards = [...cards, ...cards];

export default function InfiniteCarousel() {
  return (
    <div
      className="w-full max-w-7xl overflow-hidden relative"
      aria-label="Project showcase carousel"
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-linear-to-r from-surface to-transparent" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-linear-to-l from-surface to-transparent" />

      {/* Scrolling track */}
      <div className="flex gap-5 w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {allCards.map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            className="group relative shrink-0 w-[340px] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-[200px] overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                sizes="340px"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Info */}
            <div className="p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-sm text-on-surface">{card.title}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{card.tag}</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container transition-all duration-300">
                <span className="material-symbols-outlined text-sm text-zinc-500 group-hover:text-on-primary-container transition-colors">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
