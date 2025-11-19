import Hero from "@/components/hero";
import AudioShowcase from "@/components/audio-showcase";
import BentoGrid from "@/components/bento-grid";
import Comparison from "@/components/comparison";

export default function Home() {
  return (
    <main className="min-h-screen bg-vercedo-black text-white selection:bg-vercedo-blue/30">
      <Hero />
      <div id="demo">
        <AudioShowcase />
      </div>
      <div id="features">
        <BentoGrid />
      </div>
      <Comparison />
    </main>
  );
}
