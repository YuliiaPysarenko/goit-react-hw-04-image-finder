import PropTypes from "prop-types";

const Button = ({ onClickLoadMore }) => {
  return (
    <button onClick={onClickLoadMore} type="button" className="Button">
      Load more
    </button>
  );
};

Button.propTypes = { onClickLoadMore: PropTypes.func.isRequired};

export default Button;
