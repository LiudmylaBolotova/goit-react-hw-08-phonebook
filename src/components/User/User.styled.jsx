import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const StyledUser = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.sizes.width[5]}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round}px;
  color: ${p => p.theme.colors.text};

  width: ${p => p.theme.sizes.width[5]}px;
  height: ${p => p.theme.sizes.height[3]}px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const ItemUser = styled.li`
  border: ${p => p.theme.borders.superSmall};
  padding: ${p => p.theme.space[4]}px;

  &:not(:last-child) {
    margin-top: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  background-color: ${p => p.theme.colors.backgroundColor};
  border-radius: ${p => p.theme.radii.round}px;

  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};
`;
