module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  assetPrefix:
    process.env.NODE_ENV === "production" ? "/examples/landing" : "/",
};
