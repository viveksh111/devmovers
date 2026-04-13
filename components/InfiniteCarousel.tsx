import Image from "next/image";
import { carouselCards } from "@/lib/data/carousel";

export default function InfiniteCarousel() {
  const allCards = [...carouselCards, ...carouselCards];

  return (
    <div className="w-full overflow-hidden relative" aria-label="Project showcase carousel">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />

      <div className="flex gap-5 w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {allCards.map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            className="group relative shrink-0 w-[300px] sm:w-[360px] h-[200px] sm:h-[220px] rounded-2xl overflow-hidden"
            style={{
              boxShadow: `0 0 0 1px ${card.accent}30, 0 0 30px ${card.accent}18, 0 8px 32px rgba(0,0,0,0.6)`,
            }}
          >
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="360px"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ boxShadow: `inset 0 0 0 1.5px ${card.accent}70, 0 0 60px ${card.accent}25` }}
            />
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
