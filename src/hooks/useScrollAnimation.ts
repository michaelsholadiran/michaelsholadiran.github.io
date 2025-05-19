import { useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (threshold: number = 0.1) => {
  const ref = useRef(null);
  const options: UseInViewOptions = {
    amount: threshold,
    once: true,
  };
  const isInView = useInView(ref, options);

  return { ref, isInView };
};
