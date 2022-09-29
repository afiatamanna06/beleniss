import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Intro from '../components/home/Intro'
import About from '../components/about/About'
import Gallery from '../components/gallery/Gallery'
import Menu from '../components/menu/Menu'
import Testimonials from '../components/testimonials/Testimonials'
import Chef from '../components/chef/Chef'
import Order from '../components/order/Order'
import Blog from '../components/blog/Blog'
import Footer from '../components/footer/Footer'
import HomeCarousel from '../components/home/HomeCarousel'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beleniss</title>
        <meta name="description" content="Beleniss bakery shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="absolute" w="full" h="100vh">
        <HomeCarousel />
      </Box>
      <Intro />
      <About />
      <Gallery />
      <Menu />
      <Testimonials />
      <Chef />
      <Order />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
