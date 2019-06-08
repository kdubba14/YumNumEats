import ContactForm from "./ContactForm";

const Contact = () => (
  <div
    id="contact"
    style={{
      position: "relative",
      height: "80vh",
      width: "100vw",
      margin: "10vh 0",
      textAlign: "center",
      overflow: "hidden",
      zIndex: "3"
    }}
  >
    <img
      alt="Try the new YumShake today!"
      src="../static/shareshake.jpg"
      style={{
        width: "100%",
        bottom: "20%",
        display: "block",
        objectFit: "cover",
        position: "absolute",
        bottom: "-30%",
        zIndex: "1"
      }}
    />

    <div
      style={{
        width: "100%",
        height: "85vh",
        backgroundColor: "rgba(150,114,86,0.8)",
        position: "absolute",
        bottom: "0vh",
        zIndex: "2"
      }}
    >
      <ContactForm />
    </div>
  </div>
);

export default Contact;
