/** @type {import('next').NextConfig} */

import { hostname } from 'os';
import path from 'path';

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'acdn.mitiendanube.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn-media.glamira.com',
        },
        {
          protocol: 'https',
          hostname: 'napoleonejoyas.com',
        },
        {
          protocol: 'https',
          hostname: 'wallpapers.com',
        },
        {
          protocol: 'https',
          hostname: 'glauser.vteximg.com.br',
        },
        {
          protocol: 'https',
          hostname: 'kevins.com.co',
        },
        {
          protocol: 'https',
          hostname: 'c4.wallpaperflare.com',
        },   {
          protocol: 'https',
          hostname: 'm.media-amazon.com', 
        },
        {
          protocol: 'https',
          hostname: 'http2.mlstatic.com', 
        },
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
        },
        {
          protocol: 'https',
          hostname: 'www.verajoya.es',
        },
        {
          protocol: 'https',
          hostname: 's1.elespanol.com',
        },
        {
          protocol: 'https',
          hostname: 'images.squarespace-cdn.com',
        },
      ]
    },
      sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
      },
};

export default nextConfig;
