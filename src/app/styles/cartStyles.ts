import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const EmptyMessage = styled.p`
  font-size: var(--font-size-body-l);
  text-align: center;
  margin-top: 2rem;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CartItem = styled.li`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid var(--color-border-primary);
  padding-bottom: 1rem;
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;

  h2 {
    font-size: var(--font-size-title-s);
  }

  p {
    font-size: var(--font-size-body-m);
  }
`;

export const RemoveButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  background-color: var(--color-background-disabled);
  color: var(--color-content-high);
  border: 1px solid var(--color-border-secondary);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-background-contrast);
    color: var(--color-content-inverse);
  }
`;

export const TotalRow = styled.div`
  text-align: right;
  font-size: var(--font-size-title-m);
  font-weight: var(--font-weight-title-m);
`;
