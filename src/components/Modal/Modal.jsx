import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {
  StyledOverlay,
  StyledModal,
  StyledAiOutlineCloseCircle,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  const handleButtonClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <StyledOverlay onClick={handleBackdropClick}>
      <StyledAiOutlineCloseCircle
        onClick={handleButtonClick}
      ></StyledAiOutlineCloseCircle>
      <StyledModal>{children}</StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.object]),
  onClose: propTypes.func.isRequired,
};
