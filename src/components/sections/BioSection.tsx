import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const BioSection = () => {
  return (
    <Section id="bio">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">
            I'm a passionate developer with a love for creating elegant solutions to complex problems.
            With years of experience in web development, I specialize in building modern, responsive,
            and user-friendly applications.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through technical writing and mentoring.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BioSection;