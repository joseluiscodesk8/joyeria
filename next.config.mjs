/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'acdn.mitiendanube.com',
        }
      ]
    },
      sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
      },
};

export default nextConfig;
