import CricleArrow from "@/components/CricleArrow";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import QuoteSection from "@/components/QuoteSection";
import Review from "@/components/Review";
import ScrollMarquee from "@/components/ScrollMarquee";
import SlideOnHover from "@/components/SlideOnHover";
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

{
  /** 
      <div className="flex flex-col gap-4">
        <SlideOnHover item="Terms" href="/fsaf" />
        <SlideOnHover item="Privacy" href="/sag" />
        <SlideOnHover item="Cookie" href="/sagsagasgsa" />
      </div>
      <div>
        <CricleArrow item="Shop All" href="/" arrowImg="/arrow-right.svg" />
      </div> */
}
