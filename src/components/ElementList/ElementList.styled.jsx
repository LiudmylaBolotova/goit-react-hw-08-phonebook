import styled from 'styled-components';

export const Element = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: ${p => p.theme.borders.superSmall};
  padding: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.backgroundColor};
  border-radius: ${p => p.theme.radii.round}px;
`;

export const ContactList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: start;
  width: ${p => p.theme.sizes.width[3]}px;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
  border-bottom: ${p => p.theme.borders.dottedLine};
`;

export const BtnList = styled.ul`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const StyledBtn = styled.button`
  width: ${p => p.theme.sizes.width[0]}px;
  height: ${p => p.theme.sizes.height[0]}px;

  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.btnRound}px;
  margin-top: ${p => p.theme.space[3]}px;
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

export const ElementString = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;
