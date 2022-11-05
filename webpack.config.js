const path = require('path');

module.exports = {
  entry: './04-JavaScript-ES6/Projeto-Animais-Fantasticos/js/script.js',
  output: {
    path: path.resolve(__dirname, './04-JavaScript-ES6/Projeto-Animais-Fantasticos/'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
