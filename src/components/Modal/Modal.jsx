
// import { useEffect } from 'react';
// import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { StyledOverlay, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // });

  // const handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     onClose();
  //   }
  // };

  

  // const handleBackdropClick = e => {
  //   if (e.target === e.currentTarget) {
  //     onClose();
  //   }
  // };

  return createPortal(
    <StyledOverlay>
      
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
