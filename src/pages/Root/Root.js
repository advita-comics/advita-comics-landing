import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectOverview from './components/ProjectOverview';
import Comics from './components/Comics';
import SupportUs from './components/SupportUs';

function RootPage() {
  return (
    <main>
      <Helmet>
        <title>Advita comics</title>
      </Helmet>

      <ProjectOverview />
      <Comics />
      <SupportUs />
    </main>
  );
}

export default RootPage;
