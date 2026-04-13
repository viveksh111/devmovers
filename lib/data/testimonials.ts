export type Testimonial = {
  id: string;
  quote: string;
  rating: number;
  avatarX: string;
  featured: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "DevMovers delivered exactly what we needed. The team was deeply professional, fast to respond, and truly understood our vision. The final product exceeded every expectation.",
    rating: 5,
    avatarX: "0%",
    featured: false,
  },
  {
    id: "t2",
    quote: "Their security-first approach gave us complete confidence in our platform. Every architectural decision was made with our users' safety in mind. Truly world-class engineering.",
    rating: 5,
    avatarX: "50%",
    featured: true,
  },
  {
    id: "t3",
    quote: "Smooth communication, transparent process, and lightning-fast delivery. We always knew exactly what was happening. The best dev team we've ever worked with.",
    rating: 5,
    avatarX: "100%",
    featured: false,
  },
];
