import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div``;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! I&apos;m Vikash, a full-stack developer based in Pune who likes building software
              that people rely on every day.
            </p>

            <p>
              In February 2026, I rejoined{' '}
              <a href="https://octalogic.in/" target="_blank" rel="noreferrer">
                Octalogic Tech
              </a>
              , where I had interned before. I build web and mobile products for TKO Group (UFC),
              including UFC War Room and a real-time scoring system used at live UFC BJJ events. I
              manage projects independently from planning to launch and review my teammates&apos;
              pull requests.
            </p>

            <p>
              I also freelance for businesses like{' '}
              <a href="https://ngjewels.com/" target="_blank" rel="noreferrer">
                NG Jewels
              </a>{' '}
              and{' '}
              <a href="https://skinncube.com/" target="_blank" rel="noreferrer">
                SkinnCube
              </a>
              , and I interned at{' '}
              <a href="https://unirisefoundation.org/" target="_blank" rel="noreferrer">
                Unirise Research Foundation
              </a>
              , where I built an LLM-powered chatbot that answers questions from PDF documents.
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/Me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Profile"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
