import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/work',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
