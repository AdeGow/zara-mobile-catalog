import styled from 'styled-components';

export const MobileDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--color-content-high);
    font-size: var(--font-size-title-l);
    line-height: var(--line-height-title-l);
    text-transform: var(--text-transform-title-l);
    font-stretch: var(--font-stretch-title-l);
    font-weight: var(--font-weight-title-l);
    font-family: var(--font-family-title-l);
    margin-bottom: 0;
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
  margin-bottom: 2rem;
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
  gap: 1.5rem;
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
`;

export const SimilarItemsCarousel = styled.div`
  display: flex;
  width: 100%;
  gap: 0;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: var(--layout-lateral-margin) 0;
  padding-left: var(--layout-lateral-margin);
`;
