import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledCertificationsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  .certification-card {
    position: relative;
    cursor: default;
    transition: var(--transition);

    @media (prefers-reduced-motion: no-preference) {
      &:hover,
      &:focus-within {
        .certification-inner {
          transform: translateY(-7px);
        }
      }
    }

    .certification-inner {
      ${({ theme }) => theme.mixins.boxShadow};
      ${({ theme }) => theme.mixins.flexBetween};
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      height: 100%;
      padding: 2rem 1.75rem;
      border-radius: var(--border-radius);
      background-color: var(--light-navy);
      transition: var(--transition);
      overflow: auto;
    }

    .certification-top {
      ${({ theme }) => theme.mixins.flexBetween};
      margin-bottom: 35px;

      .certification-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: var(--green);
        color: var(--navy);
        font-size: 24px;
        font-weight: 700;
      }

      .certification-links {
        display: flex;
        align-items: center;
        margin-right: -10px;
        color: var(--light-slate);

        a {
          ${({ theme }) => theme.mixins.flexCenter};
          padding: 5px 7px;

          &.external {
            svg {
              width: 22px;
              height: 22px;
              margin-top: -4px;
            }
          }

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .certification-title {
      margin: 0 0 10px 0;
      color: var(--lightest-slate);
      font-size: var(--fz-xxl);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }

    .certification-issuer {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      margin-bottom: 10px;
    }

    .certification-description {
      color: var(--light-slate);
      font-size: 17px;
      line-height: 1.4;
    }

    .certification-date {
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      margin-top: 20px;
    }

    .certification-tech-list {
      display: flex;
      align-items: flex-end;
      flex-grow: 1;
      flex-wrap: wrap;
      padding: 0;
      margin: 20px 0 0 0;
      list-style: none;

      li {
        font-family: var(--font-mono);
        font-size: var(--fz-xxs);
        line-height: 1.75;

        &:not(:last-of-type) {
          margin-right: 15px;
        }
      }
    }
  }
`;

const Certifications = () => {
  const revealTitle = useRef(null);
  const revealCertifications = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCertifications.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  // Placeholder data - will be replaced with actual certification data
  const certifications = [
    {
      title: 'GitHub Foundations',
      issuer: 'GitHub',
      date: 'June 2025',
      description:
        'Foundational knowledge of Git and GitHub, including repositories, branches, commits, and pull requests. Demonstrates understanding of collaborative development workflows and version control best practices.',
      tech: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      url: 'https://www.credly.com/badges/34a85be2-7a56-4816-9493-163a9314948f/public_url',
    },
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: 'Certified',
      description:
        'Demonstrates advanced SQL skills including complex joins, subqueries, window functions, and advanced data manipulation techniques. Covers intermediate database concepts and performance optimization.',
      tech: ['SQL', 'Database', 'Advanced Queries', 'Data Analysis'],
      url: 'https://www.hackerrank.com/certificates/iframe/7b7b276849a8',
    },
    // Add more certifications as needed
  ];

  return (
    <StyledCertificationsSection id="certifications">
      <h2 ref={revealTitle}>Certifications</h2>

      <div className="certifications-grid">
        {certifications &&
          certifications.map((certification, i) => (
            <div
              key={i}
              className="certification-card"
              ref={el => (revealCertifications.current[i] = el)}>
              <div className="certification-inner">
                <div className="certification-top">
                  <div className="certification-icon">
                    <span>🏆</span>
                  </div>
                  <div className="certification-links">
                    {certification.url && (
                      <a
                        href={certification.url}
                        aria-label="Certificate Link"
                        target="_blank"
                        rel="noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-external-link">
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="certification-title">
                  <a href={certification.url} target="_blank" rel="noreferrer">
                    {certification.title}
                  </a>
                </h3>

                <div className="certification-issuer">{certification.issuer}</div>

                <p className="certification-description">{certification.description}</p>

                <div className="certification-date">{certification.date}</div>

                {certification.tech && (
                  <ul className="certification-tech-list">
                    {certification.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
      </div>
    </StyledCertificationsSection>
  );
};

export default Certifications;
