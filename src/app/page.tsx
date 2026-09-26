import BannerPage from '@/components/components/shared/homepage/Banner';
import BodyCore from '@/components/components/shared/homepage/BodyCore';
import React from 'react';
import WorkouPage from './Body/page';

const page = () => {
  return (
    <div>
      <BannerPage />

      <BodyCore />
    </div>
  );
};

export default page;