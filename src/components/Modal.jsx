import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export default function Modal(props) {

  const openModal = useCallback(e => {
      if (e.key === "Escape") {
        props.handleModalOpen(e);
      }
    }, []);

  useEffect(() => {
    window.addEventListener("keydown", openModal);
    return () => {
        window.removeEventListener("keydown", openModal);
    };
  }, ["keydown"]);

  const { handleModalOpen, largeImage, tags } = props;
  return (
    <div onClick={handleModalOpen} className="Overlay">
      <div className="Modal">
        <img src={largeImage} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleModalOpen: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}