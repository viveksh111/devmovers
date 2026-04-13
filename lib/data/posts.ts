export type BlogPost = {
  id: string;
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
  imageSrc: string;
  imageAlt: string;
};

export const posts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-pilot-plan-30-days",
    category: "Strategy",
    categoryColor: "#60a5fa",
    title: "AI Pilot Plan: 30 Days to First Results",
    excerpt:
      "How we integrate intelligent workflows into legacy systems in under a month — without breaking what already works.",
    readTime: "5 min read",
    date: "Apr 10, 2026",
    featured: true,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCItZUP9tYOehJYw8yHfLsNj9VL-Ytt7WqeGN2qVBtkDJGVTHKsbM8asyuzaCTqvmLED7Pm_Xi6cW0dvOzMk4iTR9ix3YBcYD9THBD9p-DOnaEl5lAstYd8vfptikD-VxBhB5RGW83QTnoMcbnho4ezuezK11wzCrN_Sx9v7RoQFdyES_4syoZfGMBJ2-8bwSD4YtW7zPQWOj760yVr61wWMSW9EbbSIKkVxCDpR8Q5bu8QMfPQLxBQUvSFKAH-0DnWcxWTJi--qPuB",
    imageAlt: "AI neural network illustration",
  },
  {
    id: "2",
    slug: "scaling-beyond-mvp",
    category: "Engineering",
    categoryColor: "#34d399",
    title: "Scaling Beyond the MVP",
    excerpt:
      "Structural patterns for handling 100k+ concurrent users starting from day one of your production launch.",
    readTime: "8 min read",
    date: "Apr 3, 2026",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0YlXyI5E1Oc7NPQvvWW3kUeAJT63hlN4r2CeS33hgHTWs4Q8OaVCGA6jQ1P82exR7Oq2UuYR57KwJ4BiUMs1g9HJ-u_KU6ldEZJTi5oFBLtwcmsy8E81V1rAP1TP4ICNJlDpqE_C1mqFgvvz_FPsaYe6I2SRHcs9CaA_wEViYracVaLIDxmxuNQYlRdqmXMbGidxrULDC6Sr48xPN4p59Lv2l4cBnM0GREzvgTSrt6g8TZsd55IZIl5Ya47eGcSebVK1JadYBvekU",
    imageAlt: "Scalable cloud architecture",
  },
  {
    id: "3",
    slug: "security-first-architect",
    category: "Security",
    categoryColor: "#f87171",
    title: "The Security-First Architect",
    excerpt:
      "Why we embed zero-trust principles from the very first line of code — and how it saves clients from costly retrofits.",
    readTime: "12 min read",
    date: "Mar 28, 2026",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAofLXs5GjgDyCfgyXXExUMmb2uVcZtAGdSxJf1EYamMKj8J9F32kNfCdM4AD0_YTjQAPZOLyjMBdIc51_604P5MllUyv1fUR4k-hfyobpigU_SqBmExKVp740J2VbV2YKd2xxurQaunnnI4sD8L49CQSbfPVu9a-nus_pEGoD322ea_OX-RuahhISvUPxoIJX_bBEOfVNrQC2tHNjLP-GNaJxvUXFFBTV-6cekE1SqFviXLFm43YShhnOp-kaDR1y0lgzm9ejB8Pun",
    imageAlt: "Green code on dark monitor",
  },
  {
    id: "4",
    slug: "devops-zero-downtime",
    category: "DevOps",
    categoryColor: "#a78bfa",
    title: "Zero-Downtime Deployments with CI/CD",
    excerpt:
      "A step-by-step look at how we build pipelines that let teams ship 10+ times a day without a single outage.",
    readTime: "6 min read",
    date: "Mar 20, 2026",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCItZUP9tYOehJYw8yHfLsNj9VL-Ytt7WqeGN2qVBtkDJGVTHKsbM8asyuzaCTqvmLED7Pm_Xi6cW0dvOzMk4iTR9ix3YBcYD9THBD9p-DOnaEl5lAstYd8vfptikD-VxBhB5RGW83QTnoMcbnho4ezuezK11wzCrN_Sx9v7RoQFdyES_4syoZfGMBJ2-8bwSD4YtW7zPQWOj760yVr61wWMSW9EbbSIKkVxCDpR8Q5bu8QMfPQLxBQUvSFKAH-0DnWcxWTJi--qPuB",
    imageAlt: "CI/CD pipeline diagram",
  },
  {
    id: "5",
    slug: "react-native-vs-flutter",
    category: "Mobile",
    categoryColor: "#fbbf24",
    title: "React Native vs Flutter in 2026",
    excerpt:
      "After shipping 15+ cross-platform apps, here's our honest take on which framework wins for startups today.",
    readTime: "9 min read",
    date: "Mar 14, 2026",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0YlXyI5E1Oc7NPQvvWW3kUeAJT63hlN4r2CeS33hgHTWs4Q8OaVCGA6jQ1P82exR7Oq2UuYR57KwJ4BiUMs1g9HJ-u_KU6ldEZJTi5oFBLtwcmsy8E81V1rAP1TP4ICNJlDpqE_C1mqFgvvz_FPsaYe6I2SRHcs9CaA_wEViYracVaLIDxmxuNQYlRdqmXMbGidxrULDC6Sr48xPN4p59Lv2l4cBnM0GREzvgTSrt6g8TZsd55IZIl5Ya47eGcSebVK1JadYBvekU",
    imageAlt: "Mobile app development",
  },
  {
    id: "6",
    slug: "postgres-performance-tips",
    category: "Engineering",
    categoryColor: "#34d399",
    title: "PostgreSQL Performance Tips We Swear By",
    excerpt:
      "Six indexing, query planning, and connection-pooling tricks that have saved our clients' databases under real traffic.",
    readTime: "7 min read",
    date: "Mar 7, 2026",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAofLXs5GjgDyCfgyXXExUMmb2uVcZtAGdSxJf1EYamMKj8J9F32kNfCdM4AD0_YTjQAPZOLyjMBdIc51_604P5MllUyv1fUR4k-hfyobpigU_SqBmExKVp740J2VbV2YKd2xxurQaunnnI4sD8L49CQSbfPVu9a-nus_pEGoD322ea_OX-RuahhISvUPxoIJX_bBEOfVNrQC2tHNjLP-GNaJxvUXFFBTV-6cekE1SqFviXLFm43YShhnOp-kaDR1y0lgzm9ejB8Pun",
    imageAlt: "Database performance chart",
  },
];
