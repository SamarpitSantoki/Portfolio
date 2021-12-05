import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technology">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technology</SectionTitle>
     <SectionText>
       I have worked with a bunch of technology in Web development from back-end to design.
     </SectionText>
     <List>
       <ListItem>
         <DiReact size="3rem"/>
         <ListContainer>
           <ListTitle>Front-End</ListTitle>
           <ListParagraph>
             Experince with <br/>
             React and Hbs
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiFirebase size="3rem"/>
         <ListContainer>
           <ListTitle>Back-End</ListTitle>
           <ListParagraph>
             Experince with <br/>
             Express and MongoDB
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiZend size="3rem"/>
         <ListContainer>
           <ListTitle>UI/UX</ListTitle>
           <ListParagraph>
             Experince with <br/>
             Figma
           </ListParagraph>
         </ListContainer>
       </ListItem>
     </List>

  </Section>
);

export default Technologies;
