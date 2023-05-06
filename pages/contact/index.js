import React from "react";
import Team from "../../components/team/Team";
import ContactForm from "../../components/contactForm/ContactForm";

const componentName = () => {
  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="text-center">
          <span className="golden-badge">Kontakt</span>
        </div>
      </div>
      <Team />
      <div className="bg-[#F8F8F8]">
        <ContactForm />
      </div>
    </div>
  );
};

export default componentName;
