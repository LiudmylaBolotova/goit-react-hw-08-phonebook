import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(138, 138, 135, 0.26);
`;

export const StyledModal = styled.div`
  background-color: aliceblue;
  max-width: calc(100vw - 30px);
  max-height: calc(100vh - 20px);
  border-radius: ${p => p.theme.radii.round}px;
`;

export const StyledAiOutlineCloseCircle = styled(AiOutlineCloseCircle)`
  width: ${p => p.theme.sizes.width[0]}px;
  height: ${p => p.theme.sizes.height[0]}px;
  color: ${p => p.theme.colors.accent};
  display: block;
  position: absolute;
  bottom: 73%;
  left: 62%;
  z-index: 333;
  cursor: pointer;
`;
