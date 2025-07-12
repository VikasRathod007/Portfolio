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
        font-size: 24px;
        font-weight: 700;

        &.github {
          background-color: #f6f8fa;
          border: 2px solid #d1d9e0;
        }

        &.sql {
          background-color: transparent;
        }

        &.postman {
          background-color: transparent;
        }

        &.default {
          background-color: var(--green);
          color: var(--navy);
        }
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

  // Function to render certification icon
  const renderCertificationIcon = iconType => {
    switch (iconType) {
      case 'github':
        return (
          <div className={`certification-icon ${iconType}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              style={{ fill: '#24292f' }}>
              <title>GitHub</title>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
        );
      case 'sql':
        return (
          <div className={`certification-icon ${iconType}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="32px" height="32px">
              <path fill="#3d4b89" d="M1,7V45c0,3.21,8.86,5.84,20,5.99L43,33V7Z" />
              <ellipse cx="22" cy="7" fill="#5663af" rx="21" ry="6" />
              <path
                fill="#5663af"
                d="M1,32.993c0,3.314,9.4,6,21,6s21-2.686,21-6V20c0,3.314-9.4,6-21,6S1,23.314,1,20Z"
              />
              <rect width="38" height="26" x="21" y="33" fill="#aac7c8" rx="2" />
              <path
                fill="#373737"
                d="M57,32H52a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1V57a1,1,0,0,1-1,1H23a1,1,0,0,1-1-1V35a1,1,0,0,1,1-1H48a1,1,0,0,0,0-2H44V7c0-4.6-11.067-7-22-7S0,2.4,0,7V45c0,4.265,9.9,6.693,20,6.97V57a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V35A3,3,0,0,0,57,32ZM22,2C34.209,2,42,4.961,42,7s-7.791,5-20,5S2,9.039,2,7,9.791,2,22,2ZM2,10.1C5.674,12.67,13.872,14,22,14s16.326-1.33,20-3.9V20c0,2.039-7.791,5-20,5S2,22.039,2,20Zm0,13C5.674,25.67,13.872,27,22,27s16.326-1.33,20-3.9V32H23a3,3,0,0,0-3,3v2.965C8.828,37.66,2,34.92,2,33ZM2,45V36.116c3.443,2.407,10.817,3.664,18,3.857v9.989C8.828,49.656,2,46.918,2,45Z"
              />
              <path
                fill="#373737"
                d="M44,43a4,4,0,0,0-8,0v6a4,4,0,0,0,4,4,3.947,3.947,0,0,0,2.019-.567l.274.274a1,1,0,0,0,1.414-1.414l-.274-.274A3.947,3.947,0,0,0,44,49Zm-2.293,6.293a1,1,0,0,0-1.414,1.414l.218.218A1.96,1.96,0,0,1,40,51a2,2,0,0,1-2-2V43a2,2,0,0,1,4,0v6a1.96,1.96,0,0,1-.075.511Z"
              />
              <path
                fill="#373737"
                d="M30,41a2,2,0,0,1,2,2,1,1,0,0,0,2,0,4,4,0,1,0-4,4,2,2,0,1,1-2,2,1,1,0,0,0-2,0,4,4,0,1,0,4-4,2,2,0,0,1,0-4Z"
              />
              <path
                fill="#373737"
                d="M47,39a1,1,0,0,0-1,1V52a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H48V40A1,1,0,0,0,47,39Z"
              />
            </svg>
          </div>
        );
      case 'postman':
        return (
          <div className={`certification-icon ${iconType}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px">
              <path
                fill="#F36933"
                d="M18.855,6.049L18.855,6.049c-0.036,0.027-0.059,0.069-0.059,0.117c0,0.015,0.002,0.029,0.006,0.042V6.207	c0.027,0.054,0.043,0.117,0.043,0.184c0,0.101-0.036,0.194-0.097,0.266l0.001-0.001c-0.019,0.024-0.03,0.054-0.03,0.087	c0,0.044,0.021,0.084,0.053,0.11c0.023,0.018,0.052,0.029,0.084,0.03c0.042,0,0.08-0.02,0.106-0.05	c0.099-0.119,0.16-0.273,0.16-0.442c0-0.112-0.027-0.216-0.074-0.31c-0.025-0.035-0.066-0.058-0.112-0.058	C18.906,6.023,18.878,6.033,18.855,6.049z"
              />
              <polygon fill="#F36933" points="19.049,6.082 19.047,6.078 19.048,6.081" />
              <path
                fill="#F36933"
                d="M13.527,0.099C6.955-0.744,0.942,3.9,0.099,10.473c-0.843,6.572,3.8,12.584,10.373,13.428	c6.573,0.843,12.588-3.801,13.429-10.374C24.745,6.955,20.102,0.943,13.527,0.099z M15.998,7.584	c-0.232,0.003-0.441,0.098-0.593,0.25l-4.453,4.453l-0.95-0.95C14.391,6.961,15.183,6.919,15.998,7.584z M11.135,12.445l4.44-4.44	c0.113-0.118,0.272-0.192,0.449-0.192c0.342,0,0.62,0.278,0.62,0.62c0,0.19-0.086,0.361-0.221,0.474l-0.001,0.001l-4.699,4.125	L11.135,12.445z M11.465,13.139l-1.1,0.238c-0.004,0.001-0.009,0.001-0.013,0.001c-0.023,0-0.044-0.013-0.054-0.033	c-0.005-0.009-0.008-0.019-0.008-0.03c0-0.017,0.007-0.032,0.018-0.043l0.645-0.645L11.465,13.139z M8.662,12.68l1.172-1.172	l0.879,0.878l-1.979,0.426c-0.006,0.001-0.012,0.002-0.019,0.002c-0.029,0-0.054-0.017-0.066-0.041	c-0.007-0.011-0.011-0.024-0.011-0.039C8.638,12.713,8.647,12.693,8.662,12.68z M5.016,18.737L5.016,18.737	c-0.039-0.003-0.069-0.035-0.069-0.075c0-0.003,0-0.005,0-0.008c0.002-0.018,0.01-0.034,0.022-0.046h0.002l0.946-0.946l1.222,1.222	L5.016,18.737z M7.442,17.482L7.442,17.482c-0.075,0.039-0.124,0.115-0.124,0.203c0,0.019,0.002,0.037,0.007,0.055v-0.002	l0.203,0.865c0.002,0.009,0.004,0.019,0.004,0.03c0,0.069-0.056,0.125-0.125,0.125c-0.035,0-0.067-0.014-0.09-0.038H7.314	l-1.228-1.229l3.762-3.758l1.82-0.393l0.874,0.874C11.287,15.316,9.571,16.415,7.442,17.482z M12.72,14.054h-0.002l-0.839-0.839	l4.699-4.125c0.043-0.039,0.082-0.08,0.117-0.125l0.002-0.002C16.55,10.308,14.668,12.208,12.72,14.054z M17.662,8.126	c-0.502,0-0.956-0.203-1.285-0.532h0.001l-0.003-0.002c-0.328-0.329-0.531-0.784-0.531-1.285c0-1.006,0.816-1.822,1.822-1.822	c0.446,0,0.854,0.16,1.17,0.426l-0.003-0.002l-1.61,1.613c-0.022,0.022-0.035,0.051-0.035,0.084c0,0.033,0.013,0.063,0.035,0.084	l1.247,1.247C18.234,8.056,17.956,8.126,17.662,8.126z M18.956,7.594c-0.081,0.08-0.169,0.151-0.265,0.214l-0.006,0.004h-0.001	l-1.207-1.207l1.533-1.533C19.671,5.792,19.647,6.904,18.956,7.594z"
              />
            </svg>
          </div>
        );
      default:
        return (
          <div className="certification-icon default">
            <span>🏆</span>
          </div>
        );
    }
  };

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
      icon: 'github',
    },
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: 'Certified',
      description:
        'Demonstrates advanced SQL skills including complex joins, subqueries, window functions, and advanced data manipulation techniques. Covers intermediate database concepts and performance optimization.',
      tech: ['SQL', 'Database', 'Advanced Queries', 'Data Analysis'],
      url: 'https://www.hackerrank.com/certificates/iframe/7b7b276849a8',
      icon: 'sql',
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      date: 'July 2025',
      description:
        'Demonstrates fundamental knowledge of API testing, collection creation, environment management, and automated testing using Postman. Covers REST API principles, request/response handling, and basic API development workflows.',
      tech: ['API Testing', 'Postman', 'REST APIs', 'Automation', 'Testing'],
      url: 'https://badgr.com/public/assertions/bRxY2dl8RbG2o58IWeZMug?identity__email=vikeyrathod007%40gmail.com',
      icon: 'postman',
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
                  {renderCertificationIcon(certification.icon)}
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
