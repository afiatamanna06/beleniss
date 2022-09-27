import type { NextPage } from 'next'
import { Image } from '@chakra-ui/react'
import Head from 'next/head'
import Intro from '../components/home/Intro'
import About from '../components/about/About'
import Gallery from '../components/gallery/Gallery'
import Menu from '../components/menu/Menu'
import Testimonials from '../components/testimonials/Testimonials'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beleniss</title>
        <meta name="description" content="Beleniss bakery shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image position="absolute" zIndex={1} objectFit="cover" src="/bg_2.jpg" w="full" h="100vh" alt="" />
      <Intro />
      <About />
      <Gallery />
      <Menu />
      <Testimonials />
    </div>
  )
}

export default Home
