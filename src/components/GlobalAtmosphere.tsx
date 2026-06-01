import LightRays from "./ui/LightRays";
import DeepSeaParticles from "./ui/DeepSeaParticles";
import { motion, useScroll, useTransform } from "framer-motion";

const GlobalAtmosphere = () => {
  const { scrollYProgress } = useScroll();

  // Descent logic: 
  // - As we scroll, a darkness overlay increases to simulate depth.
  const darknessOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 0.3, 0.8, 0.95]);
  
  // - Light rays fade as light fails to reach the deep ocean.
  const raysOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.3, 0.05]);

  // - Water caustics (surface reflections) only exist near the top.
  const causticsOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -40 }}>
      {/* 1. Base gradient — deep ocean depth */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 0%, #0A1B34 0%, #071426 40%, #020617 100%)",
        }}
      />

      {/* 2. Volumetric light rays from surface */}
      <motion.div className="absolute inset-0 w-full h-full z-[1]" style={{ opacity: raysOpacity }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#7C8CFF"
          raysSpeed={0.8}
          lightSpread={1.0}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.12}
          distortion={0.04}
        />
      </motion.div>

      {/* 3. Floating bioluminescent particles */}
      <DeepSeaParticles count={45} className="z-[2] opacity-60" />

      {/* 4. Water caustics shimmer */}
      <motion.div className="water-caustics z-[3]" style={{ opacity: causticsOpacity }} />

      {/* 5. Depth fog and vignetting */}
      <div className="absolute inset-0 z-[4] pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_150%)]" />
      
      {/* 6. Dynamic Abyss Darkness Overlay */}
      <motion.div 
        className="absolute inset-0 z-[5] pointer-events-none bg-[#010205]"
        style={{ opacity: darknessOpacity }}
      />
    </div>
  );
};

export default GlobalAtmosphere;
