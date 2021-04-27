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
  pdfLink: string,
});

export {
  ComicType,
};

export default {
  ComicType,
};
