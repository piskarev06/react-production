import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('О сайте')}

      <BugButton />
    </div>
  );
};

export default AboutPage;
