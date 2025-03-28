import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  h1 {
    margin-bottom: 0;
  }

  .mobile-footer {
    display: flex;
  }

  .desktop-footer {
    display: none;
  }

  @media (min-width: 760px) {
    .mobile-footer {
      display: none;
    }

    .desktop-footer {
      display: flex;
    }
  }
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledCartItem = styled.li`
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
  width: 100%;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const CartImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media (min-width: 760px) {
    flex: 0 0 auto;
    width: unset;
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 50%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      color: var(--color-content-high);
      font-size: var(--font-size-title-m);
      line-height: var(--line-height-title-m);
      text-transform: var(--text-transform-title-m);
      font-stretch: var(--font-stretch-title-m);
      font-weight: var(--font-weight-title-m);
      font-family: var(--font-family-title-m);
      margin: 0;
    }

    p:not(.cart-item-name) {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 760px) {
    flex: 1;
    width: unset;
    gap: 3rem;
  }
`;

export const RemoveButton = styled.button`
  border: none;
  cursor: pointer;
  color: var(--color-semantic-danger-high);
  font-size: var(--font-size-body-m);
  text-align: left;
  line-height: var(--line-height-body-m);
  text-transform: var(--text-transform-body-m);
  font-stretch: var(--font-stretch-body-m);
  font-weight: var(--font-weight-body-m);
  font-family: var(--font-family-body-m);
  margin: 0;
`;

export const CartFooter = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: var(--color-background-base);
`;

export const TotalPriceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.5rem;

  h3 {
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }
`;

export const CartButtonsRow = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

export const CartButtonWrapper = styled.div`
  display: flex;

  button {
    width: 100%;
  }
`;

export const InlineCartFooter = styled.div`
  display: flex;
  padding: 1rem 0;
  margin: 0 var(--layout-lateral-margin);
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 2 * var(--layout-lateral-margin));
  position: fixed;
  bottom: 0;
  left: 0;
  background: var(--color-background-base);
`;

export const InlineCartButtonWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;

  button {
    width: 100%;
  }
`;

export const InlineTotalPriceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 1rem;
  gap: 1rem;

  h3 {
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }
`;

export const InlinePaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  flex: 1;
  gap: 1rem;

  button {
    width: 30%;
  }
`;
