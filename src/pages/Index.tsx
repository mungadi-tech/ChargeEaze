import { Facebook, Instagram, Twitter } from "lucide-react";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/Hero";

export default function Index() {
  return (
    <div>
      <HeroSection />
      <Body />
      <Footer
        Ficon={<Facebook />}
        Ticon={<Twitter />}
        Iicon={<Instagram />}
        Flink="https://www.facebook.com/profile.php?id=61558674541651&mibextid=ZbWKwL"
        Ilink="https://www.instagram.com/chargeease?igsh=MTZudmt0cHlhMmJzaQ=="
        Tlink="https://www.x.com/5amastchltd?t=-545yqxqAKmN3F6M9jZaIA&s=08"
      />
    </div>
  );
}
