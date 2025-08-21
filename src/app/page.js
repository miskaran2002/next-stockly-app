"use client";



import FAQ from "./Components/FAQ";
import HeroBannerSlider from "./Components/HeroBannerSlider";
import OurServices from "./Components/Our Services";
import ProductHighlights from "./Components/ProductHighlights";

export default function Home() {
  return (
    <div>
      <HeroBannerSlider></HeroBannerSlider>
      <ProductHighlights></ProductHighlights>
      <OurServices></OurServices>
      <FAQ></FAQ>

      
    </div>
  );
}
