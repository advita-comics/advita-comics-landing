import React from 'react';
import ProjectOverview from './components/ProjectOverview';
import Comics from './components/Comics';
import SupportUs from './components/SupportUs';
import styles from './style.module.css';

function RootPage() {
  return (
    <main>
      <div className={styles.sectionColumns}>
        <ProjectOverview />
        <Comics />
        <SupportUs />
      </div>
    </main>
  );
}

export default RootPage;
