import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Jump to top immediately on path change, unless there is a hash
      // If there is a hash (e.g. /#portfolio), Navbar handles scrolling to it smoothly
      if (!hash) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        // If navigating to a hash from another page, reset scroll to top immediately first
        // so that the navbar's smooth scroll starts from the top.
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, hash, lenis]);

  return null;
}
