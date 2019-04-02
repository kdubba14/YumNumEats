import {Link, animateScroll} from 'react-scroll';

const scrollToTop = () => {
  animateScroll.scrollToTop()
}

const liStyle = {
  display: "inline-block", 
  height: "8vh", 
  margin: "0 .5em"
}

const Nav = (props) => (

  <div className="navbar" style={props.style}>
      
    <a onClick={scrollToTop} style={{textAlign: "right", cursor: "pointer"}}>
      <img style={{height: "10vh", padding: "0", margin: "0 0 0 auto"}} src="../static/yumnumlogo.png" />
    </a>

    <ul style={{listStyle: "none", color: "#967256", display: "inline-block", textAlign: "center", height: "2vh", width: "100%", margin: "4vh 0", padding: "0", fontFamily: "gelo, serif"}}>
      <li style={liStyle}>
        <Link 
          activeClass="active"
          to="menu"
          spy={true} 
          offset={-100} 
          smooth={true}
          duration= {750}
          style={{color: "#967256", 
          textDecoration: "none", cursor: "pointer"}}>
            Menu
        </Link>
      </li>
      <li style={liStyle}>
        <Link 
          activeClass="active"
          to="deals"
          spy={true} 
          offset={-100} 
          smooth={true}
          duration= {750}
          style={{color: "#967256", 
          textDecoration: "none", cursor: "pointer"}}>
            Deal of the Week
        </Link>
      </li>
      <li style={liStyle}>
        <Link 
          activeClass="active"
          to="map"
          spy={true} 
          offset={-100} 
          smooth={true}
          duration= {750}
          style={{color: "#967256", 
          textDecoration: "none", cursor: "pointer"}}>
            Locations
        </Link>
      </li>
      <li style={liStyle}>
        <Link 
          activeClass="active"
          to="about-us"
          spy={true} 
          offset={-100} 
          smooth={true}
          duration= {750}
          style={{color: "#967256", 
          textDecoration: "none", cursor: "pointer"}}>
            About Us
        </Link>
      </li>
      <li style={liStyle}>
        <Link 
          activeClass="active"
          to="contact"
          spy={true} 
          offset={-100} 
          smooth={true}
          duration= {750}
          style={{color: "#967256", 
          textDecoration: "none", cursor: "pointer"}}>
            Contact Us
        </Link>
      </li>
    </ul>

  </div>

)

export default Nav;