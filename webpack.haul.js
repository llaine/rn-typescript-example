module.exports = ({ platform }, { module }) => ({
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
  }
});