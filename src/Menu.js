import React from 'react';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li>{t('home')}</li>
        <li>{t('movies')}</li>
        <li>{t('tvshows')}</li>
        <li>{t('sports')}</li>
        <li>{t('live')}</li>
      </ul>
    </nav>
  );
};

export default Menu;
