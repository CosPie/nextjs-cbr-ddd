import '../styles/globals.css';
import dynamic from 'next/dynamic';

import type { AppProps } from "next/app";
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// globally disable ssr.
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
