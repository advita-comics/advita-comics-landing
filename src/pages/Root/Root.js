import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectOverview from './components/ProjectOverview';
import Comics from './components/Comics';
import SupportUs from './components/SupportUs';
import Header from './components/Header';
import Footer from './components/Footer';

function RootPage() {
  return (
    <>
      <Header />

      <main>
        <Helmet>
          <title>AdVita комиксы</title>
          <meta
            name="description"
            content="AdVita комиксы - новый благотворительный проект от AdVita. Создай своего героя, внеси пожертвование и получи свой персонализированный комикс!"
          />
        </Helmet>

        <ProjectOverview />
        <Comics />
        <SupportUs />
      </main>

      <Footer />
    </>
  );
}

export default RootPage;
