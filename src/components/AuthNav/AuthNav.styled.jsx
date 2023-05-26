import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ItemsLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};

  &:first-child {
    margin-right: 20px;
  }
`;

export const ListAuth = styled.div`
  margin-right: ${p => p.theme.space[4]}px;
`;
