import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";

const Hero = (props) => (
  <Section row nopadding nomargin>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Hi There✌️ ,I'm Samarpit Santoki, a student at Charusat University. My
        current interests are Web Development, Game Development and learning
        Linux(I'm obsessed with it at the moment).Also I love to know more about
        latest technology and to watch anime in my free time. I am also
        developing interest in open-source projects.
      </SectionText>
      <a
        href="https://drive.google.com/viewerng/viewer?url=https://samarpitsantoki.me/SamarpitSantoki.pdf"
        target="__blank"
      >
        <Button>My CV</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
