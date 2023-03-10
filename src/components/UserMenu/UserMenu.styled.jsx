import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: ${p => p.theme.space[4]}px;
`;

export const UserName = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &:first-child {
    margin-right: ${p => p.theme.space[5]}px;
  }

  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const LogoutBtn = styled.button`
  width: ${p => p.theme.sizes.width[1]}px;
  height: ${p => p.theme.sizes.height[0]}px;

  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.btnRound}px;

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
