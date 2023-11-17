import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done-animation.json";
import contactAnimation from "../../animations/contact-animation.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("myyqajew");

  return (
    <section className="contact flex">
      <section className="left-section ">
        <h1 className="title">
          <i className="fa-solid fa-envelope"></i>
          Contact Me
        </h1>
        <p className="subtitle">
          Contact me for more information and get notified when I publish
          something new.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <div className="email-wrapper">
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="email" className="email-label">
              Email Address...
            </label>
          </div>

          <div className="message-wrapper">
            <textarea id="message" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <label htmlFor="message" className="message-label">
              Your Message...
            </label>
          </div>

          <input
            type="submit"
            value={state.submitting ? "submitting..." : "submit"}
            className="submit"
            disabled={state.submitting}
          />

          {state.succeeded && (
            <p className="submit-message flex">
              <Lottie
                loop={false}
                animationData={doneAnimation}
                style={{ height: 45 }}
              />
              your message was sent successfully!
            </p>
          )}
        </form>
      </section>

      <section className="right-section">
        <Lottie id="contact-animation" animationData={contactAnimation} />
      </section>
    </section>
  );
};

export default Contact;
