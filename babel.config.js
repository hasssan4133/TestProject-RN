module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-react',
    '@babel/preset-typescript',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-flow',
  ],
  plugins: ['react-native-reanimated/plugin'],
};
