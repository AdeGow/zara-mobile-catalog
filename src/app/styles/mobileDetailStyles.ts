import styled from 'styled-components';

export const MobileDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1,
  h2 {
    color: var(--color-content-high);
    font-size: var(--font-size-title-l);
    line-height: var(--line-height-title-l);
    text-transform: var(--text-transform-title-l);
    font-stretch: var(--font-stretch-title-l);
    font-weight: var(--font-weight-title-l);
    font-family: var(--font-family-title-l);
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 2rem;
  }

  p {
    color: var(--color-content-high);
    font-size: var(--font-size-body-l);
    line-height: var(--line-height-body-l);
    text-transform: var(--text-transform-body-l);
    font-stretch: var(--font-stretch-body-l);
    font-weight: var(--font-weight-body-l);
    font-family: var(--font-family-body-l);
  }
`;

export const MobileFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  @media (min-width: 1000px) {
    gap: 6rem;
  }

  @media (min-width: 1000px) {
    margin: 0 var(--spacing-12);
  }
`;

export const MobileImageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 2rem 0;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
    height: auto;
  }

  @media (min-width: 760px) {
    width: 45%;
  }

  @media (min-width: 1000px) {
    padding: 2rem 5rem;
    width: 55%;
  }
`;

export const MobileFeaturesInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 760px) {
    width: 55%;
  }

  @media (min-width: 1000px) {
    width: 45%;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  text-transform: var(--text-transform-title-l);
`;

export const StorageOptionsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid var(--color-border-secondary);
  width: fit-content;
`;

export const StorageOptionButton = styled.button<{ selected: boolean }>`
  cursor: pointer;
  padding: 0.75rem;
  color: var(--color-content-high);
  font-size: var(--font-size-body-l);
  line-height: var(--line-height-body-l);
  text-transform: var(--text-transform-body-l);
  font-stretch: var(--font-stretch-body-l);
  font-weight: var(--font-weight-body-l);
  font-family: var(--font-family-body-l);
  min-width: 90px;
  outline: ${(props) =>
    props.selected ? '1px solid var(--color-border-primary)' : '1px solid transparent'};
  transition: all 300ms ease-in-out;

  &:not(:last-child) {
    border-right: 1px solid var(--color-border-secondary);
  }

  @media (min-width: 760px) {
    padding: 0.75rem;
  }
`;

export const ColorsOptionsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;

  div {
    position: relative;
    display: inline-block;
  }
`;

export const ColorOptionSquare = styled.div<{ color: string; selected: boolean }>`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};

  outline: ${(props) =>
    props.selected
      ? '1px solid var(--color-border-primary)'
      : '1px solid var(--color-border-secondary)'};
  outline-offset: 2px;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  @media (min-width: 760px) {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 760px) {
    width: 20px;
    height: 20px;
  }
`;

export const ColorNameLabel = styled.p`
  position: absolute;
  top: 1rem;
  left: 0;
  font-size: var(--font-size-body-m);
  font-weight: var(--font-weight-body-m);
  color: var(--color-content-high);
  transition: opacity 0.3s ease-in-out;
  z-index: 8;
  animation: appear 300ms ease-in-out;

  @keyframes appear {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1rem;

  button {
    width: 100%;

    @media (min-width: 760px) {
      width: 75%;
    }

    @media (min-width: 1000px) {
      width: 65%;
    }

    @media (min-width: 1200px) {
      width: 70%;
    }
  }
`;

export const MobileSpecificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 60%;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const SpecRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  border-top: 1px solid var(--color-border-secondary);
  &:last-child {
    border-bottom: 1px solid var(--color-border-secondary);
  }

  p {
    color: var(--color-content-high);
    font-size: var(--font-size-body-s);
    line-height: var(--line-height-body-s);
    text-transform: var(--text-transform-body-s);
    font-stretch: var(--font-stretch-body-s);
    font-weight: var(--font-weight-body-s);
    font-family: var(--font-family-body-s);
  }
`;

export const SpecName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 35%;

  p {
    text-transform: var(--text-transform-title-m);
  }

  @media (min-width: 375px) {
    width: 30%;
  }

  @media (min-width: 760px) {
    width: 25%;
  }
`;

export const SpecValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 65%;

  @media (min-width: 375px) {
    width: 70%;
  }

  @media (min-width: 760px) {
    width: 75%;
  }
`;

export const SimilarItemsContainer = styled.div`
  margin: var(--layout-lateral-margin) 0;

  @media (min-width: 1000px) {
    h2 {
      padding-left: 10rem;
    }
  }

  @media (min-width: 1200px) {
    h2 {
      padding-left: 6rem;
    }
  }
`;

export const SimilarItemsCarousel = styled.div`
  display: flex;
  width: 100%;
  gap: 0;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-left: 0.5rem;

  @media (min-width: 760px) {
    padding-left: 2rem;
  }

  @media (min-width: 1000px) {
    padding-left: 12rem;
  }
`;
