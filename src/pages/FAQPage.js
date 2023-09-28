import { React } from "react";
import FAQ from "../components/FAQ.js";

const FAQPage=() => {
  return (
    <div id="FAQ" className="col-md-5 p-lg-5 mx-auto my-5">
      <h2 className="display-7 font-weight-normal">Frequently Asked Questions</h2>
      <FAQ question="What is hackOMSCS?" answer="HackOMSCS is a 24-hour virtual hackathon taking place on [DATE]. HackOMSCS is free to register and participate. It is entirely student run, and open to anyone!"/>
      <FAQ question="What is a hackathon?" answer="Hackathons are often described as a hybrid between a career fair and a science fair. A creative community of programmers - from novices to experienced - come together for 24 hours to make amazing projects. The projects are then judged by tech professionals from industry and academia, and winners receive awesome prizes!"/>
      <FAQ question="It's My First Hackathon. Should I apply?" answer="Yes! Experience is not required. Hackathons are open creative and learning environments for everyone. There is also a competition category for first hack!"/>
      <FAQ question="I have more questions..." answer="Email us at thiswillbeour@email.edu"/>
    </div>
  );
}

export default FAQPage;