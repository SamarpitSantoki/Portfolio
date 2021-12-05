import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>
        Call</LinkTitle>
        <LinkItem href="tel:9512084467">9512084468</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>
        Email</LinkTitle>
        <LinkItem href="mailto:samarpit.santoki@gmail.com">samarpit.santoki@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learn Everyday</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/samarpitsantoki">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/samarpit-santoki-9715441b8/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/samarpit_santoki">
        <AiFillInstagram size="3rem"/>
      </SocialIcons> 
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
