// import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {
  StyledOverlay,
  StyledModal,
  StyledAiOutlineCloseCircle,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {

  const handleButtonClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <StyledOverlay>
      <StyledAiOutlineCloseCircle onClick={handleButtonClick}>Close</StyledAiOutlineCloseCircle>
      <StyledModal>{children}</StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}

// Modal.propTypes = {
//   onClose: propTypes.func.isRequired,
//   images: propTypes.arrayOf(
//     propTypes.shape({
//       src: propTypes.string.isRequired,
//       alt: propTypes.string,
//     })
//   ),
// };
