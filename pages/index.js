import React, {useRef} from 'react';
import Head from 'next/head';
import {useInView} from 'react-intersection-observer';

import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Deals from '../components/Deals';
import YumMap from '../components/YumMap';
import Contact from '../components/Contact';


const navStyle = (show) => {
  if (show) {
    return {
      height: "10vh", 
      width: "inherit", 
      backgroundColor: "white", 
      position: "fixed", 
      top: "0", 
      right: "0", 
      left: "0", 
      margin: "0", 
      borderBottom: ".05em solid #FFA75B", 
      display: "grid", 
      gridTemplateColumns: "1fr 4fr", 
      gridTemplateRows: "10vh", 
      fontSize: "1em", 
      transitionDuration: ".25s", 
      zIndex: "1"
    }
  }else{
    return {
      height: "10vh", 
      width: "inherit", 
      backgroundColor: "#FFF9E7",
      position: "fixed", 
      top: "0", 
      right: "0", 
      left: "0",  
      margin: "0", 
      display: "grid", 
      gridTemplateColumns: "1fr 4fr", 
      fontSize: "1em", 
      transitionDuration: "1s", 
      zIndex: "1"
    }
  }
}



const Container = (props) => (
  <div id="container" style={{padding: "0 5%", width: "90%", overflowX: "clip"}}>
    {props.children}
  </div>
)

const App = () => {

  
  const [navHideRef, showNav] = useInView({
    /* Optional options */
    threshold: 0.90,
  })

  

  
  return (
  
  <React.Fragment>
    <Head>
      <title>YumNum</title>
      <link rel="stylesheet" href="https://use.typekit.net/kds4gsr.css"></link>
      <link rel="stylesheet" href="../static/main.css" />
      
    </Head>

    
    
    <div style={{backgroundColor: "#FFF9E7", height: "100%", width: "100%"}}>
      
      <Nav style={navStyle(showNav)} />

      {/*<div id="container" style={{padding: "0 5%", width: "90%", overflowX: "clip"}}>*/}

        <div ref={navHideRef} className="nav-fade" style={{width: "100%", height: "10vh", padding: "0", margin: "0", position: "absolute", top:"0"}}></div>

        <Container>
          <Menu  />
        </Container>

        <Deals  />

        
        
        <YumMap id="map" />
        
        

        <Container>
          <div id="about-us" style={{height: "70vh", width: "70%", padding: "0 15%", margin: "10vh 0", textAlign: "center"}}>

            <h1 style={{padding: "10% 0 5% 0", fontFamily: "gelo, serif"}}>ABOUT US</h1>

            <p style={{fontFamily: "menco, sans-serif", textAlign: "left"}}>YumNum Eatery was founded in 2022. We were in such a high demand that in order to fill our customers requests, we built a time machine to service the past generations that missed out on this restaurant explosion. We take pride in the efficient fuel that we supply into the robots of society (there is food for normal people too). The inventor of our signature "2 Dose, Doin' the Most" Fruit Smoothie, Kyle Williams, won a Nobel Peace Prize for creating a drink so addicting that it cured world hunger! You haven't heard of YumNum? Dont worry, we deliver to the rock that you live under. Heard of YumNum but havent convinced yourself to visit? We have a 100% money back garuntee that you will be crawling back for more so there is no point in resisting peer pressure.</p>

            <h4 style={{fontFamily: "gelo, serif"}}>What are you waiting for!?</h4>

          </div>
        </Container>

        <Contact />
      
      {/*</div>*/}

    </div>
  </React.Fragment>
)}

export default App;
