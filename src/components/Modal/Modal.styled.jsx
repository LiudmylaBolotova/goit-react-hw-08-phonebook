import styled from 'styled-components';

export const StyledOverlay = styled.div`
   position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(141, 141, 137, 0.107);
 

`;

export const StyledModal = styled.div`
  background-color: aliceblue;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;



// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   border: ${p => p.theme.borders.normal};
//   border-radius: ${p => p.theme.radii.formRound}px;
//   width: ${p => p.theme.sizes.width[4]}px;
//   background-color: ${p => p.theme.colors.twoBackgroundColor};
// `;

// export const InputForm = styled.input`
//   border: ${p => p.theme.borders.small};
//   border-radius: ${p => p.theme.radii.round}px;
//   color: ${p => p.theme.colors.text};

//   width: ${p => p.theme.sizes.width[3]}px;
//   height: ${p => p.theme.sizes.height[1]}px;

//   :active,
//   :hover,
//   :focus {
//     outline: none;
//     border-color: ${p => p.theme.colors.text};
//   }
// `;

// export const TitleForm = styled.h2`
//   font-size: ${p => p.theme.fontSizes[1]}px;
//   margin: ${p => p.theme.space[3]}px;
// `;

// export const BtnForm = styled.button`
//   width: ${p => p.theme.sizes.width[1]}px;
//   height: ${p => p.theme.sizes.height[0]}px;

//   border: ${p => p.theme.borders.small};
//   border-radius: ${p => p.theme.radii.btnRound}px;

//   margin-top: ${p => p.theme.space[5]}px;
//   margin-bottom: ${p => p.theme.space[5]}px;

//   cursor: pointer;

//   font-size: ${p => p.theme.fontSizes[0]}px;
//   font-weight: ${p => p.theme.fontWeights.middle};
//   color: ${p => p.theme.colors.text};

//   transition: ${p => p.theme.transitions.transitionBtn};
//   :hover,
//   :focus {
//     background-color: ${p => p.theme.colors.accent};
//     color: ${p => p.theme.colors.color};
//     color: ${p => p.theme.colors.twoTextColor};
//   }
// `;

