import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import techIconPaths from '@components/icons/tech-paths';

// icon: a key from tech-paths.js, or null for the generic code icon
const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript (ES6+)', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'SQL', icon: null },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', icon: 'django' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'REST APIs', icon: null },
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'HTMX', icon: 'htmx' },
      { name: 'Alpine.js', icon: 'alpinedotjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Flutter', icon: 'flutter' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB & Atlas', icon: 'mongodb' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Pinecone', icon: null },
    ],
  },
  {
    title: 'Cloud & Hosting',
    skills: [
      { name: 'AWS (EC2, S3, RDS)', icon: 'amazonaws' },
      { name: 'Google Cloud', icon: 'googlecloud' },
      { name: 'DigitalOcean (Droplets, Managed DB)', icon: 'digitalocean' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Netlify', icon: 'netlify' },
      { name: 'Cloudflare (DNS/CDN)', icon: 'cloudflare' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker & Compose', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'CI/CD Pipelines', icon: null },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Git', icon: 'git' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
];

const StyledSkillsSection = styled.section`
  max-width: 1000px;

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .skill-group {
    ${({ theme }) => theme.mixins.boxShadow};
    padding: 1.75rem 1.5rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);

    @media (prefers-reduced-motion: no-preference) {
      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  h3 {
    margin: 0 0 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px solid var(--lightest-navy);
    border-radius: var(--border-radius);
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.2;
    transition: var(--transition);

    svg {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
    }

    &:hover {
      border-color: var(--green);
      color: var(--green);
    }
  }
`;

const TechIcon = ({ icon }) =>
  techIconPaths[icon] ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={techIconPaths[icon]} />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="feather"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

TechIcon.propTypes = {
  icon: PropTypes.string,
};

const Skills = () => {
  const revealTitle = useRef(null);
  const revealGroups = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealGroups.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledSkillsSection id="skills">
      <h2 className="numbered-heading" ref={revealTitle}>
        Skills
      </h2>

      <div className="skills-grid">
        {skillGroups.map(({ title, skills }, i) => (
          <div key={title} className="skill-group" ref={el => (revealGroups.current[i] = el)}>
            <h3>{title}</h3>
            <ul>
              {skills.map(({ name, icon }) => (
                <li key={name}>
                  <TechIcon icon={icon} />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
