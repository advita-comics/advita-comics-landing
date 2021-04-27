import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { H3 } from 'components/ui/Typography';
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
    <li className={classNames(styles.item, 'grid')}>
      <div className={styles.itemTextContent}>
        <H3 className={styles.itemName}>{name}</H3>

        <p className={styles.itemDescription}>{description}</p>

        <a className={styles.itemDownload} href={pdfLink} download>
          Download (PDF)
        </a>
      </div>

      <a
        className={styles.itemPreviewPhoto}
        href={pdfLink}
        onClick={handlePreviewClick}
      >
        <img src={preview.src} alt={preview.alt} />
      </a>

      <Drawer
        title={`Viewing of ${name}`}
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
