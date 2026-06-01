import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

/**
 * Flat ESLint config (Next 16 native flat config) for the client website.
 * Architecture note: the client has NO database — it consumes the admin's
 * /api/public/* over HTTP via lib/api. Pages import modules only via their
 * public boundary "@/modules/<name>".
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  {
    files: ['src/app/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@/modules/*/services',
                '@/modules/*/services/*',
                '@/modules/*/validation',
                '@/modules/*/validation/*',
              ],
              message:
                "Import a module only via its public boundary '@/modules/<name>'.",
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
