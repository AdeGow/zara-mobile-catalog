import styled from 'styled-components';

export const MobileCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  height: 344px;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0;

  @media (min-width: 700px) {
    height: 377px;
  }

  @media (min-width: 700px) {
    height: 344px;
  }

  border-bottom: 0.5px solid var(--color-border-primary);
  border-right: 0.5px solid var(--color-border-primary);
`;

export const CardImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 75%;
  position: relative;

  .mobile-card-img {
    object-fit: contain;
    padding: 0;

    @media (min-width: 1200px) {
      padding: 0 1rem;
    }
  }
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 25%;
`;
