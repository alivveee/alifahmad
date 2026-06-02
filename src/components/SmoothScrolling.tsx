import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  const options = {
    lerp: 0.1,
    wheelMultiplier: 0.7,
    smoothTouch: true,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
