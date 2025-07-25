import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

// #region styled-components
const StyledSection = styled.section`
  min-height: calc(75vh - var(--nav-height) - 2rem);
  p, a {
    font-size: 1.25rem;
  }
`;
// #endregion

// #region component
const Contact = () => {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Contact"} />
        </Container>
        <Col className="d-flex flex-column align-items-center text-center mt-5">
          <Row>
            <p>If you would like to get in touch, please use one of the methods below to message me or send an email directly at <a href="mailto:ReeseAEJones@Gmail.com">ReeseAEJones@Gmail.com</a>.</p>
          </Row>
          <Row className="my-md-4">
            <SocialLinks />
          </Row>
        </Col>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Contact;
