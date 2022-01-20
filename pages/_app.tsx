import '../styles/globals.css';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// globally disable ssr.
// eslint-disable-next-line import/no-default-export
export default dynamic(() => Promise.resolve(App), {
  ssr: false
});
