import React from "react";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";

const FadeOnScroll = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const showLogo = useMotionValue(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    showLogo.set(
      (scrollYProgress?.getPrevious() as number) > scrollYProgress.get() ? 1 : 0
    );
  });
  const scrollYY = useTransform(showLogo, [0, 1], [-50, 0]);
  const springY = useSpring(scrollYY, { stiffness: 100, damping: 20 });
  const opacity = useTransform(showLogo, [0, 1], [0, 1]);
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  return (
    <motion.div
      className="h-full "
      style={{
        opacity: springOpacity,
        translateY: springY,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeOnScroll;
