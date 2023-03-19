import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  

  width: ${p => p.theme.sizes.width[6]}px;
  border-bottom: ${p => p.theme.borders.normal};
`;
