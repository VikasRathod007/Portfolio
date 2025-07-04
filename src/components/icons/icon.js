import React from 'react';
import PropTypes from 'prop-types';
import {
  IconBookmark,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconLeetCode,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconStar,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'Bookmark':
      return <IconBookmark />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'LeetCode':
      return <IconLeetCode />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Star':
      return <IconStar />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
