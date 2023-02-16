import type { NextPage, GetServerSideProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'next-i18next';

import dayjs from 'lib/dayjs';
import i18n from 'lib/i18n';
import Layout from 'components/Layout';

export const getServerSideProps: GetServerSideProps = i18n.getTranslations();

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <div className="">
        <p>{t('hello')}</p>
        <p>
          {t('todayis')} : {dayjs(new Date()).format('LLLL')}
        </p>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    </Layout>
  );
};

export default Home;
