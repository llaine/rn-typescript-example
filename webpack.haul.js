const path = require('path');

module.exports = ({ platform }, { module, resolve }) => ({
  entry: `./src/index.${platform}.tsx`,
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              },
            },
            {
              loader: 'ts-loader'
            }
        ],
      },
      ...module.rules
    ]
  },
  resolve: {
    ...resolve,
    alias: {
        src: path.resolve(__dirname, 'src/'),
        components: path.resolve(__dirname, 'src/components/'),
        resources: path.resolve(__dirname, 'src/resources/')
    },
    extensions: ['.ts', '.tsx', `.${platform}.ts`, '.native.ts', `.${platform}.tsx`, '.native.tsx', ...resolve.extensions],
  },
});