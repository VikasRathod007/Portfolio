import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  max-width: 1000px;

  & > header {
    margin-bottom: 80px;
  }
`;

const StyledPosts = styled.ul`
  display: grid;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledPost = styled.li`
  .post-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);

    @media (prefers-reduced-motion: no-preference) {
      &:hover,
      &:focus-within {
        transform: translateY(-5px);
      }
    }
  }

  .post-date {
    margin: 0 0 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .post-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .post-description {
    margin: 0;
    color: var(--light-slate);
    font-size: var(--fz-lg);
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }
`;

const BlogPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet title="Blog" />

      <StyledMainContainer>
        <header>
          <h1 className="big-heading">Blog</h1>
          <p className="subtitle">Notes on things I&apos;ve built and learned</p>
        </header>

        {posts.length > 0 ? (
          <StyledPosts>
            {posts.map(({ node }) => {
              const { title, description, slug, date, tags } = node.frontmatter;
              return (
                <StyledPost key={slug}>
                  <div className="post-inner">
                    <p className="post-date">
                      {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h2 className="post-title">
                      <Link to={slug}>{title}</Link>
                    </h2>
                    <p className="post-description">{description || node.excerpt}</p>
                    {tags && (
                      <ul className="post-tags">
                        {tags.map(tag => (
                          <li key={tag}>#{tag}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </StyledPost>
              );
            })}
          </StyledPosts>
        ) : (
          <p>The first posts are on their way. Check back soon!</p>
        )}
      </StyledMainContainer>
    </Layout>
  );
};

BlogPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 160)
          frontmatter {
            title
            description
            slug
            date
            tags
          }
        }
      }
    }
  }
`;
