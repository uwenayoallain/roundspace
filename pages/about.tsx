import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Container from "../components/utils";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Round Space web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <div className='h-screen bg-slate-800 text-white flex justify-center items-center w-full'>
          Header 1 Test
          <Link href='/'>home page</Link>
        </div>
      </Container>
    </div>
  );
};

export default About;
