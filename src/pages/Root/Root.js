import React from 'react';
import ProjectOverview from './components/ProjectOverview';
import Comics from './components/Comics';
import SupportUs from './components/SupportUs';
// import styles from './style.module.css';

function RootPage() {
  return (
    <main>
      <ProjectOverview />
      <Comics />
      <SupportUs />
    </main>
  );
}

export default RootPage;
