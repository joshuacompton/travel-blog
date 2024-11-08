module.exports = {
  root: true,
  extends: [
    'plugin:@next/next/recommended',
    '@payloadcms',
    'next/core-web-vitals',
    'next/typescript',
  ],
  // ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
}
