import styled from 'styled-components';

export const LayoutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: var(--color-background-base);
  padding: var(--spacing-05) 0;
`;
