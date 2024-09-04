import React from 'react';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="settings">
      <label>
        {t('language')}:
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="ru">Russian</option>
          <option value="es">Spanish</option>
          <option value="zh">Chinese</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
