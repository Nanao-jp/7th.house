/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                discardUnused: true,
                mergeIdents: true,
                reduceIdents: true,
                minifyFontValues: true,
                minifyGradients: true,
                normalizeWhitespace: true,
              },
            ],
          },
        }
      : {}),
  },
};

export default config;
