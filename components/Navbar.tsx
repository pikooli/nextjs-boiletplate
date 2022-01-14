import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function RootNavbar() {
  const { t } = useTranslation('navbar');
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">{t('title')}</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={`nav-link ${router.pathname === '/' && 'active'}`}
                  aria-current="page"
                >
                  {t('index')}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={`nav-link ${
                    router.pathname === '/about' && 'active'
                  }`}
                  aria-current="page"
                >
                  {t('about')}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
