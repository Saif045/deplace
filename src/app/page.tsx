import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import Review from "@/components/Review";
import ScrollMarquee from "@/utils/ScrollMarquee";
import DragCarousel from "@/components/DragCarousel";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ScrollMarquee />
      <QuoteSection />
      <DragCarousel />
      <Review />
    </div>
  );
}
