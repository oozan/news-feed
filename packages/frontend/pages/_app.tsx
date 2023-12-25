import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '../i18n/i18n';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <Component {...pageProps} />;
}

export default function AppReduxWrapper(props: AppProps) {
  return <App {...props} />;
}
