module.exports = ({ platform }, { module, resolve }) => ({
  entry: `./src/index.${platform}.tsx`,
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      ...module.rules
    ]
  },
  resolve: {
    ...resolve,
    extensions: ['.ts', '.tsx', ...resolve.extensions],
  },
});