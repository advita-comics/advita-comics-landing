import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import types from 'types/index';
import Drawer from '../Drawer';
import styles from './style.module.css';

function ComicItem(props) {
  const {
    comic: {
      name,
      description,
      preview,
      images,
      pdfSrc,
      compact,
    },
  } = props;

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeViewer = useCallback(() => {
    setIsViewerOpen(false);
  }, []);

  const handlePreviewClick = useCallback(
    (event) => {
      event.preventDefault();
      openViewer();
    },
    [openViewer],
  );

  return (
    <li className={styles.item}>
      <img
        className={styles.itemPreviewPhoto}
        src={preview.src}
        alt={preview.alt}
      />

      <div className={styles.itemTextContent}>
        <h3 className={classNames('h3', styles.itemName)}>{name}</h3>

        <p className={styles.itemDescription}>{description}</p>

        <div className={styles.itemLinks}>
          <a className={styles.itemLink} href={pdfSrc} onClick={handlePreviewClick}>
            Читать онлайн
          </a>

          <a className={styles.itemLink} href={pdfSrc} download={name}>
            Скачать (PDF)
          </a>
        </div>
      </div>

      <Drawer
        title={name}
        isOpen={isViewerOpen}
        onClose={closeViewer}
      >
        <ul className={classNames(styles.itemPhotos, styles.itemPhotosCompact)}>
          {compact.images.map((image) => (
            <li
              key={image.src}
              className={styles.itemPhoto}
            >
              <img
                src={image.src}
                alt={image.alt}
              />
            </li>
          ))}
        </ul>

        <ul className={classNames(styles.itemPhotos, styles.itemPhotosFull)}>
          {images.map((image) => (
            <li
              key={image.src}
              className={styles.itemPhoto}
            >
              <img
                src={image.src}
                alt={image.alt}
              />
            </li>
          ))}
        </ul>
      </Drawer>
    </li>
  );
}

ComicItem.propTypes = {
  comic: types.models.ComicType.isRequired,
};

export default ComicItem;
