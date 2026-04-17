/** @type {import('next').NextConfig} */

import { hostname } from 'os';
import path from 'path';

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ibb.co",
        },
        {
          protocol: "https",
          hostname: "i.ibb.co",
        },
      ],
    },
      sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
      },
};

export default nextConfig;
