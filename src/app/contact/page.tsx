import * as React from "react";
import { Container } from "../components/Container";
import ContactForm from "../components/ContactForm/ContactForm";
type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <main>
      <Container>
        <ContactForm />
      </Container>
    </main>
  );
};

export default AboutPage;
