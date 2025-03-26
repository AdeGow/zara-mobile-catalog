import styled from 'styled-components';

export const AnimatedMobileCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  height: 344px;
  box-sizing: border-box;
  padding: 0.7rem;
  margin: 0;
  border-bottom: 0.5px solid var(--color-border-primary);
  border-right: 0.5px solid var(--color-border-primary);

  background-color: var(--color-background-base);
  background-image: linear-gradient(
    to top,
    var(--color-background-contrast) 100%,
    var(--color-background-base) 0%
  );
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: background-size, color, 1s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.1, 1);

  &:hover {
    background-size: 100% 100%;
    color: var(--color-content-inverse);

    .mobile-card-brand {
      color: var(--color-content-inverse);
    }
  }

  @media (min-width: 760px) {
    height: 377px;
  }

  @media (min-width: 1000px) {
    height: 275px;
  }

  @media (min-width: 1200px) {
    height: 344px;
  }
`;

export const MobileCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  height: 250px;
  padding: 1rem;
  flex: 0 0 auto;
  border-left: 0.5px solid var(--color-border-primary);
  border-top: 0.5px solid var(--color-border-primary);
  border-bottom: 0.5px solid var(--color-border-primary);

  &:last-child {
    border-right: 0.5px solid var(--color-border-primary);
  }

  background-color: var(--color-background-base);
  background-image: linear-gradient(
    to top,
    var(--color-background-contrast) 100%,
    var(--color-background-base) 0%
  );
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: background-size, color, 1s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.1, 1);

  &:hover {
    background-size: 100% 100%;
    color: var(--color-content-inverse);

    .mobile-card-brand {
      color: var(--color-content-inverse);
    }
  }

  @media (min-width: 375px) {
    width: 80%;
  }

  @media (min-width: 760px) {
    height: 215px;
    width: 30%;
  }

  @media (min-width: 1000px) {
    height: 210px;
    width: 25%;
  }

  @media (min-width: 1200px) {
    height: 245px;
    width: 20%;
  }
`;

export const CardImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 90%;
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
  gap: 0;
  margin: 0;
  width: 100%;
  height: 10%;
`;

export const MobileInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 50%;

  text-align: left;
  font-size: var(--font-size-body-m);
  font-weight: var(--font-weight-label-m);
  font-family: var(--font-family-body-m);
  letter-spacing: var(--letter-spacing-body-s);
  line-height: 0;
  text-transform: var(--text-transform-label-m);

  .mobile-card-brand {
    color: var(--color-content-mid);
    font-size: var(--font-size-body-s);
    transition: color 1s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.1, 1);
  }

  @media (min-width: 760px and max-width 100px) {
    font-size: var(--font-size-body-m);
    font-weight: var(--font-weight-label-m);

    .mobile-card-brand {
      font-size: var(--font-size-label-s);
      margin: 0;
    }
  }
`;

export const MobileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  flex-grow: 1;
  height: 100%;
`;

export const MobilePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  height: 100%;
  text-align: right;
`;
