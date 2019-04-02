import ContactForm from './ContactForm';

const Contact = () => (

  <div id="contact" style={{height: "80vh", width: "100%", margin: "10vh 0", backgroundImage: "url(../static/shareshake.jpg)", backgroundPosition:  "40% 70%", backgroundSize: "110%", textAlign: "center"}}>

    <div style={{width: "100%", height: "80vh", backgroundColor: "rgba(150,114,86,0.8)"}}>
      <ContactForm />
    </div>

  </div>

)

export default Contact;