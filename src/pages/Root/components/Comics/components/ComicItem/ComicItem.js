import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import Drawer from 'components/ui/Drawer';
import types from 'types/index';
import styles from './style.module.css';

function ComicItem(props) {
  const {
    comic: {
      name,
      description,
      preview,
      images,
      pdfLink,
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
      <div className={styles.itemTextContent}>
        <h3 className={classNames('h3', styles.itemName)}>{name}</h3>

        <p className={styles.itemDescription}>{description}</p>

        <a className={styles.itemDownload} href={pdfLink} download>
          Скачать (PDF)
        </a>
      </div>

      <a
        className={styles.itemPreviewPhotoWrapper}
        href={pdfLink}
        onClick={handlePreviewClick}
      >
        <img
          className={styles.itemPreviewPhoto}
          src={preview.src}
          alt={preview.alt}
        />
      </a>

      <Drawer
        title={name}
        isOpen={isViewerOpen}
        onClose={closeViewer}
      >
        <div className={styles.itemPhotos}>
          {images.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </Drawer>
    </li>
  );
}

ComicItem.propTypes = {
  comic: types.models.ComicType.isRequired,
};

export default ComicItem;
