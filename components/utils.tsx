import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: JSX.Element;
}
export default function Container({ children }: Props) {
  const delay = 1;
  const animator = {
    initial: {
      top: 0,
      display: "block",
    },
    animate: {
      y: "-105vh",
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "anticipate",
      },
    },
  };

  const exitor = {
    initial: {
      top: "180vh",
      display: "none",
    },
    exit: {
      top: "80vh",
      display: "block",
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    },
  };

  const content = {
    initial: {
      y: "100vh",
    },
    animate: {
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "linear",
      },
    },
  };
  return (
    <>
      <motion.div
        className='min-h-screen'
        key='content'
        variants={content}
        initial='initial'
        animate='animate'
        exit='exit'>
        {children}
      </motion.div>
      <motion.div
        key='animator'
        variants={animator}
        initial='initial'
        animate='animate'
        exit='exit'
        className='bg-yellow-500 h-screen w-full absolute'></motion.div>
      <motion.div
        key='exitor'
        variants={exitor}
        initial='initial'
        exit='exit'
        className='bg-yellow-500 h-[150vh] w-full fixed'></motion.div>
    </>
  );
}
