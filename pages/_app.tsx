import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import '../styles/globals.scss';
import fontawersome from 'lib/fontawersome';
import dayjs from 'lib/dayjs';

fontawersome();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  dayjs.locale(router.locale);
  //

  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
