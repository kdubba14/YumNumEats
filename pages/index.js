import React, {useRef, useState} from 'react';
import Head from 'next/head';
import {useInView} from 'react-intersection-observer';

import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Deals from '../components/Deals';
import Contact from '../components/Contact';



const Container = (props) => (
  <div className="container" style={{padding: "0 5%", width: "90%", overflowX: "clip"}}>
    {props.children}
  </div>
)





const App = () => { 
  
  

  const [Map, loadingMap] = useState(null)

  const [mapRef, showMap] = useInView({
    threshold: 0.9,
    triggerOnce: true
  })
  
  const loadMap = () => {
    import('../components/YumMap')
    .then((module) => {
      loadingMap(() => module.default)
    })
    .catch(err => console.log(err))
  }

  const lazyMap = () => {
    if (showMap) {
      loadMap()
    }
  }
  

  return (
  
  <React.Fragment>
    <Head>
      <title>YumNum</title>
    </Head>

    
    <div style={{backgroundColor: "#FFF9E7", height: "100%", width: "100%"}}>
      
      <Nav  />

      <Container>
        <Menu  />
      </Container>
     
      <Deals />
      
      {lazyMap()}

      {
        Map !== null?
          <Map/>
        : <h3 ref={mapRef} style={{width: "100%", textAlign: "center"}}>loading</h3>
      }

      <Container>
        <div id="about-us" style={{height: "70vh", width: "70%", padding: "0 15%", margin: "10vh 0", textAlign: "center"}}>

          <h1 style={{padding: "10% 0 5% 0", fontFamily: "gelo, serif"}}>ABOUT US</h1>

          <p style={{fontFamily: "menco, sans-serif", textAlign: "left"}}>YumNum Eatery was founded in 2022. We were in such a high demand that in order to fill our customers requests, we built a time machine to service the past generations that missed out on this restaurant explosion. We take pride in the efficient fuel that we supply into the robots of society (there is food for normal people too). The inventor of our signature "2 Dose, Doin' the Most" Fruit Smoothie, Kyle Williams, won a Nobel Peace Prize for creating a drink so addicting that it cured world hunger! You haven't heard of YumNum? Dont worry, we deliver to the rock that you live under. Heard of YumNum but havent convinced yourself to visit? We have a 100% money back garuntee that you will be crawling back for more so there is no point in resisting peer pressure.</p>

          <h4 style={{fontFamily: "gelo, serif"}}>What are you waiting for!?</h4>

        </div>
      </Container>

      <Contact />

    </div>
  </React.Fragment>
  )
  
}

export default App;
