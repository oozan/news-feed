import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '../i18n/i18n';
import { Provider } from 'react-redux';
import store from '@redux/store';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <Component {...pageProps} />;
}

export default function AppReduxWrapper(props: AppProps) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
}
