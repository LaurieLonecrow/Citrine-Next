import React from 'react';
import Hero from '../Hero';
import { Container, Content, Heading } from './WelcomeStyles';
const Welcome = () => {
  return (
      <>
      <Hero 
        position={`center`}
        image={`https://res.cloudinary.com/lonecrow/image/upload/v1643990999/Citrine/LSA_9484_f5yj6d.jpg`}/> 
    <Container>
       <Heading>Our Mission</Heading>
       <Content>
       The <em>citrine crystal</em> is associated with happiness, creativity, 
       and self confidence to name a few, and that is exactly what we embody at Citrine Hair Studio.
       From the moment you walk into our groovy space, we want you to feel welcomed 
       and at home. We come together, united by our passion for beauty and wellness.
       Much like crystals, we are all unique. We want to bring a personalized hair experience to each 
       guest. No matter what your hair goals may be, OUR goal at Citrine is to inspire and help 
       your light shine from the inside out.
       <br></br>
       With love,
       <br></br>
       Lindsay & Madison
       </Content> 
   </Container>
   </>
  );
};

export default Welcome;
