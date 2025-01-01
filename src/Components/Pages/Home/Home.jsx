// import React from 'react'
import NavBar from '../../Shareds/NavBar/NavBar'
import Footer from '../../Shareds/Footer/Footer'
// import BannerOne from '../Banner/BannerOne'
import Search from '../Search/Search'
import MarqueeOne from '../Marquee/MarqueeOne'
// import MarqueeTwo from '../Marquee/MarqueeTwo'
import BannerTwo from '../Banner/BannerTwo'
import BannerThree from '../Banner/BannerThree'
import BannerFour from '../Banner/BannerFour'
import BannerFive from '../Banner/BannerFive'
// import BannerSix from '../Banner/BannerSix'
import Carosal from '../Banner/Carosal'
import BannerSix from '../Banner/BannerSex'
// import BusCard from '../AllBus/BusCard'


const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div id='br'></div>
      <MarqueeOne></MarqueeOne>
      <Carosal></Carosal>
      <Search></Search>
      <BannerTwo></BannerTwo>
      <BannerThree></BannerThree>
      <BannerFour></BannerFour>
      <BannerFive></BannerFive>
      <BannerSix></BannerSix>
      <Footer></Footer>
    </div>
  )
}

export default Home
