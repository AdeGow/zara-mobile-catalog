import styled from 'styled-components';

export const DrawerContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 12;
  backdrop-filter: blur(10px);
  transition: opacity 0.3s ease-in-out;
  animation: fadeIn 300ms ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const DrawerContentWrapper = styled.div`
  display: flex;
  z-index: 12;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  margin: 0;
  background: var(--color-background-base);
  padding: var(--spacing-05) var(--spacing-05) 0 var(--spacing-05);
  border: none;

  @media (min-width: 760px) {
    width: 45%;
  }

  @media (min-width: 1000px) {
    width: 35%;
  }
`;
