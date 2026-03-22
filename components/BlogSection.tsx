import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";

type BlogPost = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
};

const posts: BlogPost[] = [
  {
    id: "ai-pilot-plan",
    category: "Strategy",
    title: "AI pilot plan: 30 days to first results",
    excerpt:
      "How we implement intelligent workflows in legacy systems without breaking the bank.",
    readTime: "5 min read",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCItZUP9tYOehJYw8yHfLsNj9VL-Ytt7WqeGN2qVBtkDJGVTHKsbM8asyuzaCTqvmLED7Pm_Xi6cW0dvOzMk4iTR9ix3YBcYD9THBD9p-DOnaEl5lAstYd8vfptikD-VxBhB5RGW83QTnoMcbnho4ezuezK11wzCrN_Sx9v7RoQFdyES_4syoZfGMBJ2-8bwSD4YtW7zPQWOj760yVr61wWMSW9EbbSIKkVxCDpR8Q5bu8QMfPQLxBQUvSFKAH-0DnWcxWTJi--qPuB",
    imageAlt: "Close up of a glowing AI neural processor",
  },
  {
    id: "scaling-beyond-mvp",
    category: "Engineering",
    title: "Scaling Beyond the MVP",
    excerpt:
      "Structural patterns for handling 100k+ concurrent users on day one.",
    readTime: "8 min read",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0YlXyI5E1Oc7NPQvvWW3kUeAJT63hlN4r2CeS33hgHTWs4Q8OaVCGA6jQ1P82exR7Oq2UuYR57KwJ4BiUMs1g9HJ-u_KU6ldEZJTi5oFBLtwcmsy8E81V1rAP1TP4ICNJlDpqE_C1mqFgvvz_FPsaYe6I2SRHcs9CaA_wEViYracVaLIDxmxuNQYlRdqmXMbGidxrULDC6Sr48xPN4p59Lv2l4cBnM0GREzvgTSrt6g8TZsd55IZIl5Ya47eGcSebVK1JadYBvekU",
    imageAlt: "Digital blocks moving through a blue grid space",
  },
  {
    id: "security-first-architect",
    category: "Security",
    title: "The Security-First Architect",
    excerpt:
      "Why we build zero-trust environments from the first line of code.",
    readTime: "12 min read",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAofLXs5GjgDyCfgyXXExUMmb2uVcZtAGdSxJf1EYamMKj8J9F32kNfCdM4AD0_YTjQAPZOLyjMBdIc51_604P5MllUyv1fUR4k-hfyobpigU_SqBmExKVp740J2VbV2YKd2xxurQaunnnI4sD8L49CQSbfPVu9a-nus_pEGoD322ea_OX-RuahhISvUPxoIJX_bBEOfVNrQC2tHNjLP-GNaJxvUXFFBTV-6cekE1SqFviXLFm43YShhnOp-kaDR1y0lgzm9ejB8Pun",
    imageAlt: "Highly technical green computer code on a dark screen",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-24 px-6 lg:px-20 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black">
              Inside the Engine
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <Link
              href="#"
              className="text-primary-container font-bold flex items-center gap-2 group"
            >
              View all posts{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </FadeIn>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {posts.map((post) => (
            <StaggerItem key={post.id}>
              <article className="bg-surface-container-low group cursor-pointer h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary-container transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6">{post.excerpt}</p>
                  <div className="text-zinc-500 text-xs font-medium italic">
                    {post.readTime}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
