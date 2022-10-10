import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/utils";
import bg from "/public/background.svg";
import {
  Parallax as Page,
  ParallaxLayer as Section,
} from "@react-spring/parallax";
import Logo from "../components/Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import Cursor from "../components/Cursor";
import { useRef } from "react";

const Home: NextPage = () => {
  const parent = useRef(null);
  const header = {
    initial: {
      y: "6rem",
    },
    animate: {
      y: 0,
      transition: {
        delay: 2,
        ease: "linear",
        duration: 0.3,
      },
    },
  };
  return (
    <div>
      <Head>
        <title>Roundspace \ home</title>
        <meta name='description' content='Roundspace' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <>
          {/* <Logo className='light' /> */}
          <Page pages={3} config={{ mass: 1, tension: 300, friction: 40 }}>
            <Section
              offset={0}
              speed={0}
              className='bg-black relative h-screen'>
              {/* <Cursor /> */}
              <Image src={bg} alt='bg-image' layout='fill' draggable='false' />
              <div className='absolute inset-0 flex justify-center items-center text-white'>
                <div className=' w-1/3 text-xl'>
                  <div className='h-24 overflow-hidden'>
                    <motion.h1
                      variants={header}
                      initial='initial'
                      animate='animate'
                      className='text-9xl text-center font-black'>
                      Round Space
                    </motion.h1>
                  </div>
                  <p className='p-4 text-justify'>
                    A digital design agency that has been designing websites,
                    apps, and software for over a decade. We are a full-service
                    digital agency that develops and executes all of our
                    clients&apos; digital initiatives.
                  </p>
                  <Link href='/about'>
                    <motion.button className='mx-auto my-4 px-16 py-7 bg-violet-600 rounded-full block shadow-xl shadow-violet-500/40'>
                      learn more
                    </motion.button>
                  </Link>
                </div>
              </div>
            </Section>
            <Section
              offset={1}
              speed={0}
              className='bg-red-500 relative h-screen'></Section>
            <Section
              offset={2}
              speed={0}
              className='bg-yellow-500 relative h-screen'></Section>
          </Page>
        </>
      </Container>
    </div>
  );
};

export default Home;
