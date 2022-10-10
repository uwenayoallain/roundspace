import { motion } from "framer-motion";
import useMousePosition, { useIsMouseMoving } from "../hooks/useMousePosition";

export default function Cursor() {
  const position = useMousePosition();
  const cursor = {
    initial: {
      left: 0,
      top: 0,
    },
    animate: {
      left: position.x - 48,
      top: position.y - 48,
      scale: useIsMouseMoving() ? 0.7 : 1,
      rotate: useIsMouseMoving() ? "circle" : 0,
    },
    exit: {
      scale: 0,
    },
  };
  return (
    <>
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        key='cursor'
        variants={cursor}
        className='h-24 w-24 bg-white/70 absolute pointer-events-none z-50 rounded-full flex justify-center items-center backdrop-blur-xl'>
        Scroll
      </motion.div>
    </>
  );
}
