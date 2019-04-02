

const inputStyle = {
  border: ".1em solid #FFA75B", 
  backgroundColor: "rgba(255, 249, 231, 0.5)", 
  fontSize: ".8em", 
  padding: ".3em .5em", 
  margin: "2em 0"
}

const buttonStyle = {
  border: "none", 
  borderRadius: ".3em", 
  backgroundColor: "#FFA75B", 
  color: "#FFF9E7", 
  fontSize: ".8em", 
  padding: ".5em 1em", 
  cursor: "pointer"
}

const loadingSentStyle = {
  height: "10vh", 
  padding: "35vh 0 35vh 0"
}

const Form = (props) => (

  <div style={{width: "100%", height: "80vh", padding: "0 15%", boxSizing: "border-box"}}>

    <h1 style={{paddingTop: "10vh", fontFamily: "gelo, serif", color: "#FFF9E7"}}>CONTACT US</h1>

    <input name="name" onChange={props.handleTyping} className="nameEmail nameField" style={inputStyle} type="text" placeholder="Name" />
    <input name="email" onChange={props.handleTyping} className="nameEmail emailField" style={inputStyle} type="email" placeholder="Email" />

    <input name="subject" onChange={props.handleTyping} className="subjectMessage" style={inputStyle} type="text" placeholder="Subject" />
    <textarea name="message" onChange={props.handleTyping} className="subjectMessage messageField" style={inputStyle} type="text-area" placeholder="Message" />

    <button type="submit" onClick={props.handleSubmit} style={buttonStyle}>Send Message</button>

    <p style={{fontSize: ".9em", paddingTop: "0em", marginTop: "1em", color: "#FFF9E7"}}>( Form Validation to be added )</p>
  
  </div>

)

const Loading = () => (
  <div className="spinner" style={{width: "100%", height: "80vh", padding: "0 15%", boxSizing: "border-box"}}>
    <img style={loadingSentStyle} prefetch src="../static/loader.svg" />
  </div>
)

const Sent = () => (
  <div style={{width: "100%", height: "80vh", padding: "0 15%", boxSizing: "border-box", color: "#83D685"}}>
    <h1 style={loadingSentStyle}>Sent</h1>
  </div>
)

class ContactForm extends React.Component { 
  
  state={
    name: '', 
    email: '', 
    subject: '', 
    message: '', 
    loading: false, 
    sent: false
  }

  _handleTyping = (e) => (
    this.setState({
      [e.target.name]: e.target.value
    })
  )

  _handleSubmit = () => {

    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.subject)
    console.log(this.state.message)

    this._messageSending()
    setTimeout(() => {this._messageSent()},2000)
  }

  _messageSending = () => {
    this.setState({
      loading: true
    })
  }

  _messageSent = () => {
    this.setState({
      loading: false, 
      sent: true
    })
  }
  
  render() {
    
    if (this.state.loading) {
      return (
        <Loading />
      )
    }else if (this.state.sent) {
      return (
        <Sent />
      )
    }else{
      return (
        <Form handleTyping={this._handleTyping} handleSubmit={this._handleSubmit} />
      )
    }

  }
}

export default ContactForm;