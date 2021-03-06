import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  position: relative;
`;

const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #adadad;
  }
`;

const LinkStyle = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px; 
  text-align: center;
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="4em" />
      <MotivationalText>Just say the magical word</MotivationalText>
      <Marginer direction="vertical" margin="1em" />
      <Button>
        <Link to="/register" style={{ color: "black"}}>Be a writer</Link>
      </Button>
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <LinkStyle>Privacy Policy</LinkStyle>
          <LinkStyle>Terms of Service</LinkStyle>
          <LinkStyle>Contact</LinkStyle>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved> &copy; 2020 FOLLOWUP All rights reserved</RightsReserved>
    </FooterContainer>
  );
}
