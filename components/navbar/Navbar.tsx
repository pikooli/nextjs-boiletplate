import { useTranslation } from 'next-i18next';
import Link from 'components/link/Link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import NavLink from 'components/navbar/NavLink';

const BtnMobile = ({ open }: { open: boolean }) => {
  return (
    <Disclosure.Button className="lg:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

export default function RootNavbar() {
  const { t } = useTranslation('navbar');

  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <div>
          <div className="flex justify-between">
            <Link href="/" text="Pascal Zhang" className="text-2xl uppercase" />
            <NavLink className="hidden lg:block" />
            <BtnMobile open={open} />
          </div>
          {open ? <NavLink className="block lg:hidden" /> : null}
        </div>
      )}
    </Disclosure>
  );
}

// <nav className="flex">
//   <Link href="/">
//     <a className="navbar-brand">{t('title')}</a>
//   </Link>
//   <BtnMobile />
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <NavLink />
//   </div>
// </nav>;
