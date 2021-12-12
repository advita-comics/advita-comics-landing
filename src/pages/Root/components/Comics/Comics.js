import React from 'react';
import classNames from 'classnames';
import COMICS from 'data/comics';
import ComicItem from './components/ComicItem';
import styles from './style.module.css';

function Comics() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={classNames('h2', styles.title)}>
          Выбери свою историю!
        </h2>

        <p className={styles.subtitle}>
          Ниже три комикса, которые заканчиваются как раз на том месте,
          где должен появится ты. Посмотри - какой комикс выберешь!?
        </p>

        <ul className={styles.comicList}>
          {COMICS.map((comic) => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Comics;
