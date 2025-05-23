import styled from 'styled-components';

export const MobilesGridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  gap: 0;
  border-collapse: collapse;
  border-top: 0.5px solid var(--color-border-primary);
  border-left: 0.5px solid var(--color-border-primary);
  z-index: 0;
  margin-top: 0.5rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
