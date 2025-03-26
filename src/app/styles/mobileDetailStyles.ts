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
`;

export const MobileImageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
`;

export const MobileFeaturesInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
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
  padding: 0.5rem 1rem;
  font-weight: 600;

  &:not(:last-child) {
    border-right: 1px solid var(--color-border-secondary);
  }

  outline: ${(props) => (props.selected ? '1px solid var(--color-border-primary)' : 'none')};

  color: var(--color-content-high);
  cursor: pointer;
  transition: border 0.3s ease-in-out;
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
  cursor: pointer;
`;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1rem;

  button {
    width: 100%;
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
