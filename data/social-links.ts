import { FiGithub } from 'react-icons/fi';
import { FaXTwitter, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa6';
import profile from '@/data/profile.json';

const links = [
  {
    label: 'GitHub',
    icon: FiGithub,
    url: profile.socialLinks.github,
    username: profile.socialLinks.github.replace('https://github.com/', ''),
  },
  {
    label: 'LinkedIn',
    icon: FaLinkedinIn,
    url: profile.socialLinks.linkedin,
    username: profile.socialLinks.linkedin.replace(
      'https://www.linkedin.com',
      ''
    ),
  },
  {
    label: 'Twitter',
    icon: FaXTwitter,
    url: profile.socialLinks.twitter,
    username: profile.socialLinks.twitter.replace('https://x.com/', ''),
  },
  {
    label: 'Email',
    icon: FaRegEnvelope,
    url: `mailto:${profile.email}`,
    username: profile.email,
  },
];

export default links;
