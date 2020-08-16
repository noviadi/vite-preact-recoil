//@ts-ignore
import preactRefresh from '@prefresh/vite'

const config = {
  jsx: 'preact',
  alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat'
  },
  plugins: [preactRefresh()]
}

export default config
