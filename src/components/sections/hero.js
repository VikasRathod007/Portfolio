import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.6);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(100, 255, 218, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
  }
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: var(--nav-height) 0 60px;

  .status {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 25px 4px;
    padding: 6px 14px;
    border: 1px solid var(--lightest-navy);
    border-radius: 30px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--green);
      animation: ${pulse} 2s infinite;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    }
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    background-color: var(--green);
    color: var(--navy);

    &:hover,
    &:focus-visible {
      box-shadow: 5px 5px 0 0 var(--navy), 5px 5px 0 1px var(--green);
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 0 50px;
    margin: 60px 0 0;
    padding: 30px 0 0;
    border-top: 1px solid var(--lightest-navy);
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 25px 30px;
      margin-top: 50px;
    }

    li {
      display: flex;
      flex-direction: column;
    }

    .value {
      color: var(--lightest-slate);
      font-size: clamp(28px, 4vw, 36px);
      font-weight: 600;
      line-height: 1.1;
    }

    .label {
      max-width: 150px;
      margin-top: 6px;
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      line-height: 1.4;
    }
  }
`;

const stats = [
  { value: '2+', label: 'Years building software' },
  { value: '4–5', label: 'Projects delivered for UFC' },
  { value: '3 mo', label: 'UFC War Room, start to launch' },
  { value: '4', label: 'Certifications' },
];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const status = (
    <div className="status">
      <span className="dot" aria-hidden="true" />
      Open to roles · India / Remote
    </div>
  );
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Vikash Rathod.</h2>;
  const three = <h3 className="big-heading">I build software.</h3>;
  const four = (
    <p>
      I&apos;m a full-stack developer at Octalogic Tech, building web and mobile products for TKO
      Group (UFC). I work mostly with Python/Django and Node.js.
    </p>
  );
  const five = (
    <div className="hero-buttons">
      <a className="email-link" href={`mailto:${email}`} target="_blank" rel="noreferrer">
        Get In Touch
      </a>
      <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">
        View Resume
      </a>
    </div>
  );
  const six = (
    <ul className="stats">
      {stats.map(({ value, label }) => (
        <li key={label}>
          <span className="value">{value}</span>
          <span className="label">{label}</span>
        </li>
      ))}
    </ul>
  );

  const items = [status, one, two, three, four, five, six];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
