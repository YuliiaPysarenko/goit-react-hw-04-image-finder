import PropTypes from "prop-types";

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  modalOpen,
}) => {
  return (
    <li
      onClick={modalOpen}
      data-lgimage={largeImageURL}
      key={id}
      className="ImageGalleryItem"
    >
      <img
        key={id}
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  modalOpen: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
