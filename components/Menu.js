

const defaultCard = (delay) => ({
  height: "65vh", 
  width: "20%", 
  margin: "5vh 2.5% 0 2.5%", 
  display: "inline-block", 
  transitionDuration: "3s", 
  transitionDelay: `${delay}s`, 
  opacity: "1"
})

const hiddenCard = {
  height: "65vh", 
  width: "20%", 
  margin: "5vh 2.5% 0 2.5%", 
  display: "inline-block", 
  position: "absolute", 
  right: "37.5%", 
  transitionDuration: "3s", 
  opacity: "0"
}

const showMenu = (show, delay) => {
  if (show) {
    return defaultCard(delay)
  }else{
    return hiddenCard
  }
}

class Menu extends React.Component {
  constructor(props){
    super(props);

    this.state={
      showSandwiches: false, 
      showSoups: false, 
      showFruits: false, 
      showDrinks: false
    }
  }

  componentDidMount(){
    setTimeout(this.setState({showSandwiches: true}), 2000)

    setTimeout(this.setState({showSoups: true}), 4000)

    setTimeout(this.setState({showFruits: true}), 8000)

    setTimeout(this.setState({showDrinks: true}), 10000)
  }

  render(){
    return(
      <div id="menu" style={{height: "100%", width: "100%", marginTop: "10vh", textAlign: "center"}}>
    

        <div style={showMenu(this.state.showSandwiches, 0)}>
          
          <img alt="Sandwiches" src="../static/003-sandwich.svg" style={{width: "30%", padding: "10% 0 5% 0"}} />

          <h3 style={{fontFamily: "gelo, serif"}}>Sandwiches</h3>

          <div style={{fontFamily: "menco, sans-serif"}}>
            <p>BLT</p>
            <p>California Po'Boy</p>
            <p>Curry Chicken Salad</p>
            <p>Pineapple Bagel Brûlée</p>
            <p>Stacked Veggie w/ Pimiento Cheese</p>
            <p>Cauliflower Grilled Cheese w/ Sun-Dried Tomatoes</p>
          </div>

        </div>

        <div style={showMenu(this.state.showSoups, 0.25)}>
          
          <img alt="Soups" src="../static/004-noodles.svg" style={{width: "30%", padding: "10% 0 5% 0"}} />

          <h3 style={{fontFamily: "gelo, serif"}}>Soups</h3>

          <div style={{fontFamily: "menco, sans-serif"}}>
            <p>Cabbage Soup</p>
            <p>Ginger Carrot Soup</p>
            <p>Lentil Soup</p>
            <p>Broccoli and Cheese Soup</p>
            <p>Old-Fashioned Chicken Noodle Soup</p>
            <p>Minestrone with Parmigiano-Reggiano</p>
          </div>

        </div>

        <div style={showMenu(this.state.showFruits, .5)}>
          
          <img alt="Fruits" src="../static/002-fruit.svg" style={{width: "30%", padding: "10% 0 5% 0"}} />

          <h3 style={{fontFamily: "gelo, serif"}}>Fruits</h3>

          <div style={{fontFamily: "menco, sans-serif"}}>
            <p>Tropical Fruit Cup/Bowl</p>
            <p>PB&J Smoothie</p>
            <p>Banana Ginger Smoothie</p>
            <p>Orange Dream Smoothie</p>
            <p>Mixed Berry Fruit Cup/Bowl</p>
            <p>Caramel Apple Overnight Oatmeal Smoothie</p>
          </div>

        </div>

        <div style={showMenu(this.state.showDrinks, .75)}>
          
          <img alt="Drinks" src="../static/001-coconut-drink.svg" style={{width: "30%", padding: "10% 0 5% 0"}} />

          <h3 style={{fontFamily: "gelo, serif"}}>Drinks</h3>

          <div style={{fontFamily: "menco, sans-serif"}}>
            <p>Chamomille Tea</p>
            <p>Raspberry Tea</p>
            <p>Mango-Pineapple Juice</p>
            <p>Strawberry-Apple Juice</p>
            <p>Kiwi-Watermelon-Lime Juice</p>
            <p>Sweet Potato-Pear-Cinnamon Juice</p>
          </div>

        </div>


        
        <div className="showPics" style={{fontFamily: "gelo, serif", fontSize: ".95em", width: "50%", height: "10vh", backgroundColor: "#6FA16F", color: "white", textAlign: "center", margin: "0 auto", padding: "2vh .5em", borderRadius: ".5em", cursor: "pointer", transition: ".5s"}}>
          <h2 style={{marginBottom: "0", paddingBottom: ".2em"}}>Click here to view the gallery</h2>
          <p style={{fontSize: ".75em", paddingTop: "0em", marginTop: "0"}}>( Carousel to be added )</p>
        </div>
        
      
      </div>
    )
  }
}

export default Menu;