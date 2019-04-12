import {Link, animateScroll} from 'react-scroll';
import {useInView} from 'react-intersection-observer';

const scrollToTop = () => {
  animateScroll.scrollToTop()
}

const liStyle = {
  display: "inline-block", 
  height: "8vh", 
  margin: "0 .5em"
}

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

const Nav = (props) => {

  const [navHideRef, showNav] = useInView({
    /* Optional options */
    threshold: 0.90,
  })
  
  return (
  <React.Fragment>
  <div style={navStyle(showNav)} className="navbar">
      
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
  <div ref={navHideRef} className="nav-fade" style={{width: "100%", height: "10vh", padding: "0", margin: "0", position: "absolute", top:"0", zIndex: "-1"}}></div>
  </React.Fragment>
  )
}

export default Nav;