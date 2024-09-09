/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/chart',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;