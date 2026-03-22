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
    id: "nexus",
    title: "Nexus Platform",
    tag: "Enterprise SaaS",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCA9K85-0irjfUZkLyI-JOxOUfPY0tUTr96ANmTmm4mj6AhoLVNCF7GnQ0eAwUPPeQWBTGxJY0wCWisKvkPqN-YoFx4hSOQtNbQv_XZIt-95NTWYaiw2MwTdrAbpJxxo1Lxr0R24-6qUVueNTR9CJkxo1a-hiYhQBYJGyAWEdk5_uQVcBmanPnWtdiH8BcJru8RdvsBeP20vAJ3PBdYF7_uUgoOm2P5K5kajAaP_zwiaOjDyaBXbhmjM18CV-uXXLzd2XaXl9ahMln7",
    imageAlt: "Nexus platform dashboard",
  },
  {
    id: "aura",
    title: "Aura Banking",
    tag: "FinTech · AI",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqN7XSamHDGrXu9-HjtYgrEJ3cM_icHaf0Syr_IFesDEIYCR9k2J-XOoEOYG4Z5Sym_c_BH5QW8RPYZ7xamIuLbc4-ofcySD03BT29BX08SWGKyc34tlvc8FmivYBntCgJ9gugJ05jmZwCqWqhy5x0fcJWOHxHWFLzNmuLqyLktQhezU0_0wK68CMSXJ-PLlM2OcukFSPuz5iwC3yYbxFiER-OHxuJ84gctWOLV-YMYmQNXAd5jvvMNi6GcVbNtE9dg446mllsAQyc",
    imageAlt: "Aura banking interface",
  },
  {
    id: "ai-dashboard",
    title: "Vektor AI",
    tag: "ML Platform",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCItZUP9tYOehJYw8yHfLsNj9VL-Ytt7WqeGN2qVBtkDJGVTHKsbM8asyuzaCTqvmLED7Pm_Xi6cW0dvOzMk4iTR9ix3YBcYD9THBD9p-DOnaEl5lAstYd8vfptikD-VxBhB5RGW83QTnoMcbnho4ezuezK11wzCrN_Sx9v7RoQFdyES_4syoZfGMBJ2-8bwSD4YtW7zPQWOj760yVr61wWMSW9EbbSIKkVxCDpR8Q5bu8QMfPQLxBQUvSFKAH-0DnWcxWTJi--qPuB",
    imageAlt: "AI dashboard with neural network visualization",
  },
  {
    id: "blockchain",
    title: "Ledger Suite",
    tag: "Web3 · DeFi",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0YlXyI5E1Oc7NPQvvWW3kUeAJT63hlN4r2CeS33hgHTWs4Q8OaVCGA6jQ1P82exR7Oq2UuYR57KwJ4BiUMs1g9HJ-u_KU6ldEZJTi5oFBLtwcmsy8E81V1rAP1TP4ICNJlDpqE_C1mqFgvvz_FPsaYe6I2SRHcs9CaA_wEViYracVaLIDxmxuNQYlRdqmXMbGidxrULDC6Sr48xPN4p59Lv2l4cBnM0GREzvgTSrt6g8TZsd55IZIl5Ya47eGcSebVK1JadYBvekU",
    imageAlt: "Blockchain ledger suite dashboard",
  },
  {
    id: "security",
    title: "Fortis SecOps",
    tag: "Cybersecurity",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAofLXs5GjgDyCfgyXXExUMmb2uVcZtAGdSxJf1EYamMKj8J9F32kNfCdM4AD0_YTjQAPZOLyjMBdIc51_604P5MllUyv1fUR4k-hfyobpigU_SqBmExKVp740J2VbV2YKd2xxurQaunnnI4sD8L49CQSbfPVu9a-nus_pEGoD322ea_OX-RuahhISvUPxoIJX_bBEOfVNrQC2tHNjLP-GNaJxvUXFFBTV-6cekE1SqFviXLFm43YShhnOp-kaDR1y0lgzm9ejB8Pun",
    imageAlt: "Security operations dashboard",
  },
  {
    id: "team",
    title: "Orbit HQ",
    tag: "Team Ops · SaaS",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACS1PLPzKrG9yKRny0GKRkIAZXVTyw_0zSyxH2Xd4bHRmxf9MfNWU60k2Um4CKanTPn89r7-t2BwjJsLZXQ6Xhtdfza0bSpJiNO2k96BkQRD2pP-IY8-n5jS0V-ki3X6TwskNvqNMBPNlL2w--ek66mcowMJPN4sG_3GHDAeODhswJ5vFB7QVPN2y80dCD90DJ2Cwk9SYwbCW5st-4YcEgmkIw-Mn-fgim3cJVG8d7Asg0NiiILt70snr6ngYdsUP_v9PmGcdMXMr6",
    imageAlt: "Orbit HQ team management platform",
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
