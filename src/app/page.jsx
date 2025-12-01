
import FifthSection from "@/components/fifthSection/FifthSection";
import LoopTexts from "@/components/loopTexts/LoopTexts";
import Testimonial from "@/components/Testimonial";
import SixthSection from "@/components/sixthSection/SixthSection";

import PricingPlans from "@/components/PricingSection";
import Image from "next/image";
import StatsSection from "@/components/StatsSection";
import FourthSection from "@/components/fourthSection/FourthSection";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";



export default function Home() {
  return (
    <main>
        
          <HeroSection />
          {/* <ImageSlider /> */}
          <LoopTexts />

      
          <OurServices />
        
             
          {/* <ThirdSection /> */}
          <FifthSection />
          <SixthSection />
          <StatsSection />
          <PricingPlans />
          <Testimonial />
          <FourthSection />
       
      </main>
  );
}
