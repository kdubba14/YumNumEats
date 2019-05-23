import ContactForm from "./ContactForm";

const Contact = () => (
  <div
    id="contact"
    style={{
      height: "80vh",
      width: "100%",
      margin: "10vh 0",
      textAlign: "center"
    }}
  >
    <img
      alt="Try the new YumShake today!"
      src="../static/shareshake.jpg"
      style={{
        width: "100%",
        height: "80vh",
        position: "absolute",
        left: "0",
        right: "0",
        zIndex: "1"
      }}
    />

    <div
      style={{
        width: "100%",
        height: "80vh",
        backgroundColor: "rgba(150,114,86,0.8)",
        position: "relative",
        zIndex: "2"
      }}
    >
      <ContactForm />
    </div>
  </div>
);

export default Contact;
