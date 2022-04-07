import '../styles/globals.css';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// enable mock api
if (process.env.API_MOCKING === 'enabled') {
  require('../mocks/index')
}

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// globally disable ssr.
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
