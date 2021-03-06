module.exports = [
  {
    entry: './client/elc.js',
    target: 'electron-main',
    output: {
      path: __dirname,
      filename: './build/electron_app.js',
      publicPath: '/',
    },
    mode: process.env.NODE_ENV,
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /.((s(a|c))|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
  {
    entry: ['./client/inc/polyfills.js', './client/src/index.js'],
    output: {
      path: __dirname,
      filename: './build/bundle.js',
      publicPath: '/',
    },
    mode: process.env.NODE_ENV,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: 'source-map',
    devServer: {
      public: 'localhost:8080',
      host: '0.0.0.0',
      port: 8080,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /.((s(a|c))|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  }];
