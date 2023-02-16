import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import '../styles/globals.scss';
import dayjs from 'lib/dayjs';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  dayjs.locale(router.locale);
  //

  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
