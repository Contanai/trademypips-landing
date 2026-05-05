import { KineticGlow } from "@/landing/KineticGlow";
import { useEffect, useRef } from "react";

const T1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2QIW96LeB37K52F4bUaW_Sc4hMNmKaTjPZCwiygPj63zqmYqEtzQW3PZOhb8YqyGZLsWGrrrAc2ljqGZkmNU-BQX2bQO6FOKDyYp6XwcAVuZcWjKEBzgMtaCDfPcO4ONb7YoTbvDggidiClx5Hv5i5PWMuFVJjvPXNwboNs1X-6j0OUCT_Zy9lZ5QnF-Jc_70_crq9t9DYv-ox72ebttbvE0GinK-G25-yBPTrzpkA9fH8T8EjKqmvpsh83Jowhcyq5vIFjS4jvo";
const T2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDThDQChATF5B-VvD56lyjewfCX4Y1grwLQT61GLMMKDh2gRJFzlvHHJMLy_4Jx8Dp2zlxRA4F2OtA_LHDfIUVspGXWoOvIIKtxPIaep-5HvQsF231AqCn5-Z8KjqxXJd_hhPFQdOYD-LZArSmOJXVPNayZ7FZvbm22mlRsTeboZHIHLxZpFkS2GLx0tbUHZ27qmCn7V69EQwGF-z2qvplJPFDvyTM5sgO2ILnKGzwtIfJvQ6yEJqwNmv1mfSrg0UZBqokzEERkWm4";
const T3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD1KO5qnW8biJU1LiCYCr63G7O0345TI3do3H5Ngp9_x7fy77F0gqtKODEoKxBmRhQWbsAgkB7rGwGGJLXzzMu-x8NtWf5rK50yZMhOgpnJOQkxRqpHztfmAvibfjjfpMpMapxZlMhS4acAt-DnwBNs2eOQjoLizFSP8ZIiGw1LBkd9SqyyVOGLI_7dkQjKbCCxj6D9SNnPVDLLSt54P6kKHsXK76cbJgnsoLGzvZhFYvZsD11XKaNv2I8-H9OwUEQScjXRsConOJw";

const TESTIMONIALS = [
  {
    name: "Alex Rivier",
    role: "FTMO FUNDED TRADER",
    image: T1,
    roleClassName: "text-primary",
    cardClassName:
      "border-primary/20 transition-all duration-500 hover:border-primary/50 glass-card",
    imageClassName: "grayscale-[20%] transition-all group-hover:grayscale-0",
  },
  {
    name: "Sarah Chen",
    role: "MASTER BUNDLE USER",
    image: T2,
    roleClassName: "text-secondary",
    cardClassName: "z-20 border-primary/40 glow-blue glass-card",
    imageClassName: "transition-transform duration-700 group-hover:scale-105",
  },
  {
    name: "James Morgan",
    role: "PRO TERMINAL USER",
    image: T3,
    roleClassName: "text-primary",
    cardClassName:
      "border-primary/20 transition-all duration-500 hover:border-primary/50 glass-card",
    imageClassName: "grayscale-[20%] transition-all group-hover:grayscale-0",
  },
] as const;

export function LandingTestimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollSlides = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const amount = track.clientWidth * 0.9;
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const intervalId = window.setInterval(() => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const nextLeft = track.scrollLeft + track.clientWidth * 0.9;
      const shouldLoop = nextLeft >= maxScrollLeft - 8;

      track.scrollTo({
        left: shouldLoop ? 0 : nextLeft,
        behavior: "smooth",
      });
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="testimonials" className="relative bg-deep-blue px-6 py-xxl">
      <KineticGlow className="left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/2 bg-secondary/10" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="font-h2 text-h2 text-white">Traders Winning Daily</h2>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>
        <div className="mb-8 flex justify-center gap-3 md:justify-end">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background/40 text-primary transition-colors hover:bg-primary/20"
            onClick={() => scrollSlides("prev")}
            aria-label="Previous testimonial"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background/40 text-primary transition-colors hover:bg-primary/20"
            onClick={() => scrollSlides("next")}
            aria-label="Next testimonial"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-lg overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((testimonial) => {
            const scaledClass = testimonial.name === "Sarah Chen" ? "lg:scale-105" : "";

            return (
              <article
                key={testimonial.name}
                className={`group relative aspect-[9/16] min-w-full snap-center overflow-hidden rounded-3xl ${testimonial.cardClassName} sm:min-w-[calc(50%-12px)] lg:min-w-[calc((100%-32px)/3)] ${scaledClass}`.trim()}
              >
                <img
                  alt={`User testimonial from ${testimonial.name}`}
                  className={`h-full w-full object-cover ${testimonial.imageClassName}`.trim()}
                  src={testimonial.image}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background via-background/80 to-transparent p-lg">
                  <p className="mb-1 text-lg font-bold text-white">{testimonial.name}</p>
                  <p className={`text-xs font-label-caps tracking-widest ${testimonial.roleClassName}`.trim()}>
                    {testimonial.role}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-4 text-center text-xs font-label-caps tracking-widest text-white/55 md:hidden">
          Swipe to view more testimonials
        </div>
      </div>
    </section>
  );
}
