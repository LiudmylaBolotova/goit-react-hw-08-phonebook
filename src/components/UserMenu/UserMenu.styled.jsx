import styled from 'styled-components';

export const StyledElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 25px;
  text-decoration: none;
  transition: 250ms color ease;
`;

export const UserMail = styled.p`
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
  
`;

export const LogoutBtn = styled.button`
  width: ${p => p.theme.sizes.width[1]}px;
  height: ${p => p.theme.sizes.height[0]}px;

  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.btnRound}px;

  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;

  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};

  transition: ${p => p.theme.transitions.transitionBtn};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.color};
    color: ${p => p.theme.colors.twoTextColor};
  }
`;
