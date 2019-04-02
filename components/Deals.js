import {useInView} from 'react-intersection-observer';

const slideDow = (slide) => {
  if (!slide) {
    return {
      width: "35%", 
      height: "60vh", 
      padding: "10vh 2.5%", 
      float: "right", 
      textAlign: "center", 
      position: "relative", 
      transform: "translateX(100%)", 
      transition: "2s"
    }
  }else{
    return {
      width: "35%", 
      height: "60vh", 
      padding: "10vh 2.5%", 
      float: "right", 
      textAlign: "center", 
      position: "relative", 
      transform: "translateX(0%)", 
      transition: "1.5s"
    }
  }
}

const Deals = (props) => {
  
  const [slideDeal, showDeal] = useInView({
    // Optional options 
    threshold: 0.7, 
    triggerOnce: true
  })

  
  return (
  
  <div id="deals" ref={slideDeal} show={showDeal} style={{height: "80vh", width: "100%", margin: "5vh 0", backgroundImage: "url(../static/fruit.jpg)", backgroundPosition:  "right center", backgroundSize: "cover", textAlign: "right"}}>
      
    <div style={slideDow(showDeal)}>
      
      <h1 style={{fontFamily: "gelo, serif", marginTop: "3.5em"}}>Deal of the Week</h1>

      <h2 style={{fontFamily: "menco, sans-serif", fontWeight: "500", display: "block", marginTop: "2em"}}>
        Buy any Sandwich and get a  
        <br />
        <span style={{fontSize: "1.5em", fontWeight: "1000"}}>FREE</span>
        <br />
        Large Fruit Smoothie
      </h2>
      


    </div>
  
  </div>
)}

export default Deals;