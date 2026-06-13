import { defineConfig } from '@tarojs/cli'

export default defineConfig(async () => ({
  projectName: 'pocket-journal',
  date: '2026-06-13',
  designWidth: 750,
  deviceRatio: { 640: 2.34 / 2, 750: 1, 828: 1.81 / 2 },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  framework: 'react',
  compiler: 'webpack5',
  mini: {},
  h5: { publicPath: '/', staticDirectory: 'static' }
}))
