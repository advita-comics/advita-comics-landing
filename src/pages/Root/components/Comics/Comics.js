import React from 'react';
import { H2 } from 'components/ui/Typography';
import SharePageViaSocial from 'components/shared/SharePageViaSocial';
import COMICS from 'data/comics';
import ComicItem from './components/ComicItem';
import styles from './style.module.css';

function Comics() {
  return (
    <section className={styles.section}>
      <div className="container">
        <H2 className={styles.title}>Выбери свою историю!</H2>

        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus
          mauris, viverra et dapibus ut, ornare sed neque. Vestibulum ante ipsum
          primis in faucibus orci luctus
        </p>

        <ul className={styles.comicList}>
          {COMICS.map((comic) => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </ul>

        <SharePageViaSocial className={styles.sharePageViaSocial} />
      </div>
    </section>
  );
}

export default Comics;
