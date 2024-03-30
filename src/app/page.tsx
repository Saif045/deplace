import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import Review from "@/components/Review";
import ScrollMarquee from "@/utils/ScrollMarquee";
import HomeCarousel from "@/components/HomeCarousel";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <ScrollMarquee />
      <QuoteSection />
      <HomeCarousel />
      <Review />
    </div>
  );
}
