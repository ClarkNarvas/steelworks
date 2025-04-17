/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },

    ];
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
