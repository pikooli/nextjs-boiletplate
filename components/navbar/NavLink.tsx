import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'components/link/Link';

type Props = { className?: string };

const NavLink: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation('navbar');
  const router = useRouter();
  const active = { [router.pathname as string]: 'active' };

  return (
    <ul className={`lg:flex ${className || ''}`}>
      <li className="nav-item">
        <Link
          href="/"
          text={t('index')}
          className={`nav-link ${active['/']}`}
          aria-current="page"
        ></Link>
      </li>
      <li className="nav-item">
        <Link
          href="/about"
          text={t('about')}
          className={`nav-link ${active['/about']}`}
          aria-current="page"
        ></Link>
      </li>
    </ul>
  );
};

export default NavLink;
