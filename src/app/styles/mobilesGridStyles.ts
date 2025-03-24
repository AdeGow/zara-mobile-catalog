import styled from 'styled-components';

export const MobilesGridWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 0;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
