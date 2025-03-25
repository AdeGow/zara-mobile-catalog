import styled from 'styled-components';

export const MobileDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MobileFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MobileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MobileFeaturesInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const ColorOptionSquare = styled.div<{ color: string; selected: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  border: ${(props) =>
    props.selected ? '2px solid var(--color-border-primary)' : '1px solid lightgray'};
  cursor: pointer;
`;

export const StorageOptionButton = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  font-weight: 600;
  border: ${(props) =>
    props.selected ? '2px solid var(--color-border-primary)' : '1px solid lightgray'};
  background-color: ${(props) =>
    props.selected ? 'var(--color-background-contrast)' : 'var(--color-background-base)'};
  color: ${(props) =>
    props.selected ? 'var(--color-content-inverse)' : 'var(--color-content-high)'};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const MobileSpecificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SimilarItemsCarousel = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
