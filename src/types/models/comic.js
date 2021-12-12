import {
  string,
  exact,
  arrayOf,
  number,
} from 'prop-types';

const ImageType = exact({
  src: string,
  alt: string,
});

const ComicType = exact({
  id: number,
  name: string,
  description: string,
  preview: ImageType,
  images: arrayOf(ImageType),
  pdfSrc: string,
  compact: exact({
    preview: ImageType,
    images: arrayOf(ImageType),
  }),
});

export {
  ComicType,
};

export default {
  ComicType,
};
