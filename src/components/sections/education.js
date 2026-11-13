import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const degrees = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra',
    range: '2024 – 2026',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Goa University',
    location: 'Goa',
    range: '2021 – 2024',
  },
];

const StyledEducationSection = styled.section`
  max-width: 1000px;

  .education-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .degree {
    ${({ theme }) => theme.mixins.boxShadow};
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
  }

  .range {
    margin: 0 0 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  h3 {
    margin: 0 0 8px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    line-height: 1.3;
  }

  .school {
    margin: 0;
    color: var(--light-slate);
    font-size: var(--fz-lg);
  }

  .location {
    margin: 4px 0 0;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }
`;

const Education = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Education</h2>

      <div className="education-grid">
        {degrees.map(({ degree, school, location, range }) => (
          <div key={degree} className="degree">
            <p className="range">{range}</p>
            <h3>{degree}</h3>
            <p className="school">{school}</p>
            <p className="location">{location}</p>
          </div>
        ))}
      </div>
    </StyledEducationSection>
  );
};

export default Education;
