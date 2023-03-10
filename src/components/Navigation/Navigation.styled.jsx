import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  margin-left: ${p => p.theme.space[4]}px;
`;

export const ItemsLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};

  &:first-child {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;
